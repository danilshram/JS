function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        if (typeof action === 'function'){ //если action - не объект, а функция
            return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
        }
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb(state) //и запускаем подписчиков
        }
    }
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}

// REDUCERS
function combineReducers(reducers){
    function totalReducer(state={}, action){
        const newTotalState = {}
        for (const [reducerName, reducer] of Object.entries(reducers)){
            const newSubState = reducer(state[reducerName], action)
            if (newSubState !== state[reducerName]){
                newTotalState[reducerName] = newSubState
            }
        }
        if (Object.keys(newTotalState).length){
            return {...state, ...newTotalState}
        }
        return state
    }
    return totalReducer
}

function promiseReducer(state={},  {name, type, status, payload, error}){
    if (type === 'PROMISE'){
        return{
            ...state,   
            [name] : {status, payload, error}
        }
    }
    return state
}

function authReducer(state={}, {type, token, payload}){
    if(type === "AUTH_LOGOUT"){
        return state
    }
    if(type === "AUTH_LOGIN"){
        if(!token && typeof payload !== 'object'){
            return state
        }
        return {...state, 
            token,
            payload: jwtDecode(token)
        }
}
        return state
}

function jwtDecode(token){ 
    try{
        let tokenParts = token.split('.')
        let tokenSecondPart = tokenParts[1]
        let tokenJSON = atob(tokenSecondPart)
        let normalToken = JSON.parse(tokenJSON)
        return normalToken
    }
    catch(e){
        return undefined
    }
}
const reducers = {
    promise: promiseReducer, //допилить много имен для многих промисо
    auth: authReducer,     //часть предыдущего ДЗ
    //cart: cartReducer,     //часть предыдущего ДЗ
}
const totalReducer = combineReducers(reducers)
let store = createStore(totalReducer)

const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token})
const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'})

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2Mzc3ZTEzM2I3NGUxZjVmMmVjMWMxMjUiLCJsb2dpbiI6InRlc3Q1IiwiYWNsIjpbIjYzNzdlMTMzYjc0ZTFmNWYyZWMxYzEyNSIsInVzZXIiXX0sImlhdCI6MTY2ODgxMjQ1OH0.t1eQlRwkcP7v9JxUPMo3dcGKprH-uy8ujukNI7xE3A0"

store = createStore(authReducer)

store.subscribe(() => console.log(store.getState())) 
store.dispatch(actionAuthLogin(token))


const actionPending   = (name)      => ({name, type: 'PROMISE', status: 'PENDING'})
const actionFulfilled = (name, payload) => ({name, type: 'PROMISE', status: 'FULFILLED', payload})
const actionRejected  = (name, error)   => ({name, type: 'PROMISE', status: 'REJECTED',  error})

//имена добавить
const actionPromise = (name, promise) =>
    async dispatch => { 
        dispatch(actionPending(name)) //сигнализируем redux, что промис начался
        try{
            const payload = await promise //ожидаем промиса
            dispatch(actionFulfilled(name, payload)) //сигнализируем redux, что промис успешно выполнен
            return payload //в месте запуска store.dispatch с этим thunk можно так же получить результат промиса
        }
        catch (error){
            dispatch(actionRejected(name, error)) //в случае ошибки - сигнализируем redux, что промис несложился
        }
    }

store = createStore(totalReducer) //не забудьте combineReducers если он у вас уже есть
store.subscribe(() => console.log(store.getState()))

const drawGoods = (state) => {
    const [,route] = location.hash.split('/')
    if (route !== 'good') return
    const {status, payload, error} = store.getState().promise.goodFindOne || {}//.имя другое
    if (status === 'PENDING'){
        main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
    }
    if (status === 'FULFILLED'){
        const {name, _id, price, description} = payload
        main.innerHTML = `<h1>${name}</h1>
                         <section>Ціна: ${price}</section>
                         <section>Опис товару: ${description}</section>
                         `
    }
}

store.subscribe(drawGoods)

store.subscribe(() => {
    const [,route] = location.hash.split('/')
    if (route !== 'category') return
    const {status, payload, error} = store.getState().promise.catById || {}//.имя одно
    if (status === 'PENDING'){
        main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
    }
    if (status === 'FULFILLED'){
        console.log(payload)
        const {name, goods} = payload
        main.innerHTML = `<h1>${name}</h1>`
        for (const {_id, name, price, images} of goods){
            main.innerHTML += `<a href="#/good/${_id}">${name}
            <img src = "http://shop-roles.node.ed.asmer.org.ua/${images[0].url}">
            </a>`
        }
    }
})

const actionGetPeople = id =>  //имя другое
    actionPromise(fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json()))

const actionGetFilm = id => 
    actionPromise(fetch(`https://swapi.dev/api/films/${id}`).then(res => res.json()))

const actionSomePeople = () => 
    actionPromise(fetch(`https://swapi.dev/api/people/`).then(res => res.json()))

// store.dispatch(actionSomePeople())
 
store.subscribe(() => {
    const {status, payload, error} = store.getState().promise.rootCats
    if (status === 'FULFILLED' && payload){
        aside.innerHTML = ''
        for (const {_id, name} of payload){
            aside.innerHTML += `<a href="#/category/${_id}">${name}</a>`
        }
    }
})

function getGql(adress){
    return function gql(query, variables ={}){
        return new Promise((resolve, rejected) =>{
            const headers ={}
            const token = localStorage.getItem("localStoredReducer")
            if(token){
                headers["Authorization"] = `Bearer ${token}`
            }
            fetch(adress, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json", 
                    ...headers 
                },
                body: JSON.stringify({ query, variables }),
            }).then(res => res.json())
            .then(json => {
                if(json.errors){
                    throw new Error(json.errors.message)
                }
                let data = json.data
                let keys = Object.keys(data)
                let result = data[keys[0]]
                resolve(result)
            })
            .catch(e =>{
                rejected(e)
            })
            })
        }
    }
let adress = 'http://shop-roles.node.ed.asmer.org.ua/graphql'
let gql = getGql(adress)
;(async () => {
    const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`
    const cats = await gql(catQuery,  {q: "[{}]"})
    console.log(cats) //список категорій з _id name та всім таким іншим
    
    
    const loginQuery = `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`
    
    const token = await gql(loginQuery ,{login: "test457", password: "123123"})
    console.log(token)
})()


const gqlRootCats = () => 
    gql(`query rootCats { 
            CategoryFind(query:"[{\\"parent\\": null}]"){
             _id name
           }
}`)
const gqlCatById = (_id) =>{
    console.log(_id, "name")
    return gql(`query catById($q: String){
        CategoryFindOne(query: $q){
          name parent {_id name} 
              subCategories{_id name}
              goods{_id name price images{url}}
        }
      }`, 
      {q : JSON.stringify([{_id}])}
      )
}
const gqlGoodById = (_id) =>{
    return gql(`query goodById($q: String){
        GoodFindOne(query: $q){ 
          _id name description price
          images{url}
        }
      }`,
      {q : JSON.stringify([{_id}])}
      )
}
const actionRootCats = () =>
actionPromise('rootCats', gqlRootCats())
store.dispatch(actionRootCats())
const actionCatById = (_id) => actionPromise('catById', gqlCatById(_id)) 
const actionGoodById = (_id) => actionPromise('goodFindOne', gqlGoodById(_id))



window.onhashchange = () => {
    console.log(location.hash, "loc")
    const [,route, _id] = location.hash.split('/')

    const routes = {
        // people(){
        //     console.log('People', _id)
        //     store.dispatch(actionGetPeople(_id))
        // },
        // films(){
        //     store.dispatch(actionGetFilm(_id))
        // },
        category() {
            store.dispatch(actionCatById(_id))
        },
        good(){
            console.log('good', _id)
            store.dispatch(actionGoodById(_id))
        },
        login(){
            console.log('А ТУТ ЩА ДОЛЖНА БЫТЬ ФОРМА ЛОГИНА')
            //нарисовать форму логина, которая по нажатию кнопки Login делает store.dispatch(actionFullLogin(login, password))
        },
        //register(){
            ////нарисовать форму регистрации, которая по нажатию кнопки Login делает store.dispatch(actionFullRegister(login, password))
        //},
    }
    if (route in routes){
        routes[route]()
    }
}
window.onhashchange()