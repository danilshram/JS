let mainDiv = document.getElementById('main-block')
let beerDiv = document.getElementById('beer')
let chipsDiv = document.getElementById('chips')
let cigarsDiv = document.getElementById('cigars')
mainDiv.innerHTML = 

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
        what: state[what] - many
    }
    if((state.beer = 0) || (state.chips = 0) || (state.cigars = 0)){
        
    }
    return state
}
const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(store.getState())
let actionBuyBeer = many =>({type: 'buy', what: 'beer', many})
let actionBuyChips = many =>({type: 'buy', what: 'chips', many})
let actionBuyCigars = many =>({type: 'buy', what: 'cigars', many})
