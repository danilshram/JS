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
            if(someF){
                (result === null) ? result = someF() : undefined
            }else{
                return
            }
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
                resultArray.push(item)
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
const credentials = () => {
    let capitalize =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
    let name = prompt ("Введіть ім'я") || "";
    let surname = prompt ("Введіть прізвище") || "";
    let fatherName = prompt ("Введіть ім'я по-батьковій") || "";
    let fullName = name + " " + surname + " " + fatherName
    return {name:capitalize(name), surname:capitalize(surname), fatherName:capitalize(fatherName), fullName:capitalize(fullName)}
}
let respectMe = checkResult(credentials, x => x.name !== "" &&  x.surname !== "" && x.fatherName !== "")
let checkFullName = respectMe()