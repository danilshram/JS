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
let cube = myBind(Math.pow, Math, [, 3])
let pow5 = myBind(Math.pow, Math, [, 5])
pow5(2)
cube(3)