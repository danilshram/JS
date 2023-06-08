let mainDiv = document.getElementById('main-block')

function createStore(reducer){
    let state = reducer(undefined, {})
    let sbs = []
    let subscribe = sb => (sbs.push(sb), () => sbs = sbs.filter(x => x !== sb))
    let getState = () => state
    let dispatch = action => {
        let newState = reducer(state, action)
        if(newState !== state){
            state = newState
            for(let sb of sbs){
                sb()
            }
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
function reducer(state, {type, what, many, price, cash}) {
    if(!state)
    return {
        beer: { 
            many: 100,
            price: 15
        },
        chips: {
            many: 100,
            price: 10
        },
        cigars: {
            many: 100,
            price: 20
        },
        case: 0,
        cash: 0
    }
    let cost = many * price
    if(!state[what].many){
        alert("Закінчилось :(")
        return {
            ...state,
            many : 0
        }
    }    
    if(type === "buy"){     
        if(cash < cost || !cash){
        alert("Маловато грошей у вас")
        return {
            ...state
    }
    }
        return {
        ...state,
        [what]: { ...state[what], many: state[what].many - many},
        cash: state.cash,
        case: state.case + cost
    }
}  
    return state
}

const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
function showState(parent,state){
        return parent.innerText = state
}
let texts = {}
let showNewState = () => {
        let keyValues = Object.entries(store.getState()).map(([key,value]) => {
            if(key === 'case'){
                document.title = [key + ':' + value]
            }
            if(key !== 'case' && key !== 'cash'){
            let text = texts[key]
            if(!text){
                text = document.createElement('p')
                mainDiv.append(text) 
                texts[key] = text
            }
            let displayKeys = `${key} : ${value.many}`
            showState(text, displayKeys)
        }
        }) 
}
showNewState()
store.subscribe(showNewState) 

let storeKeys = Object.keys(store.getState())
let select = document.createElement('select')
let input = document.createElement('input')
let inputCash = document.createElement('input')
inputCash.type = 'number'
inputCash.placeholder = 'Сюди кеш'
inputCash.onchange = () =>{
    let min = parseInt(inputCash.value)
    if(min < 0){
        inputCash.value = 0
    }
}
input.type = 'number'
input.placeholder = 'Тут кількість'
input.onchange = () =>{
    let min = parseInt(input.value)
    if(min < 0){
        input.value = 0
    }
}
const button = document.createElement('button')
button.innerText = 'BUY'

mainDiv.append(select)
mainDiv.append(input)
mainDiv.append(inputCash)
mainDiv.append(button)

storeKeys.forEach(key => {
    let option = document.createElement('option')
    option.innerText = key
    select.append(option)
})
button.onclick = () => {
    if(select.value === 'beer'){
        store.dispatch(actionBuyBeer(input.value, parseInt(inputCash.value)))
    }
    if(select.value === 'chips'){
        store.dispatch(actionBuyChips(input.value, parseInt(inputCash.value)))
    }
    if(select.value === 'cigars'){
        store.dispatch(actionBuyCigars(input.value,  parseInt(inputCash.value)))
    }
}

let actionBuyBeer = (many,cash) =>({type: 'buy', what:'beer', many, price: 15, cash})
let actionBuyChips = (many, cash) =>({type: 'buy', what:'chips', many,price: 10, cash})
let actionBuyCigars = (many, cash) =>({type: 'buy', what: 'cigars', many,price: 20, cash})