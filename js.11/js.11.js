function makeProfileTimer(){
    let firstTimer = performance.now()
    return function(){
        let secondTimer = performance.now()
        let time = secondTimer - firstTimer
        let normalTime = time.toFixed()
        return normalTime
    }
}

function makeSaver(someF){
        let result = null
        return function(){
            (result === null) ? result = someF() : undefined
            return result
        }
}

let myBind = function (someF, context, params){
    let foo = someF.bind(context) 
    return function(...arguments){
        let resultArray = []
        let i = 0
        for (let item of params){
            if(item !== undefined){
                resultArray = [...resultArray, item]
            }else{
                resultArray = [...resultArray, arguments[i]]
                i++
            }
        }
        return foo(...resultArray)
    }
}

function checkResult(original, validator){
    function wrapper(...params){
        let result = original(params)
        let validatorResult = validator(result)
        if(validatorResult){
            return result
        }else{
            let foo = wrapper.call(original)
            return foo        
        }
    }
    return wrapper
}
let RandomHigh = checkResult(Math.random, number => number > 0.5)
let number = RandomHigh()
let AlwaysSayYes = checkResult(confirm, x => x)
let question = AlwaysSayYes(confirm("Шо?"))
