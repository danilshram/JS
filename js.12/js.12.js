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
function reducer(state, {type, what, many}) {
    if(!state)
    return {
        beer: 100,
        chips: 100,
        cigars: 100
    }
    if(type === "buy")
    return {
        ...state,
        [what]: state[what] - many
    }
    return state
}
const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(store.getState())
function showState(parent,state){
    return parent.innerHTML = state
}
store.subscribe(() => {
    let keyValues = Object.entries(store.getState()).map(x => x.join(" "))
    showState(mainDiv, keyValues)
})


let actionBuyBeer = many =>({type: 'buy', what:'beer', many})
let actionBuyChips = many =>({type: 'buy', what:'chips', many})
let actionBuyCigars = many =>({type: 'buy', what: 'cigars', many})
store.dispatch(actionBuyBeer(5))