let farenheit = celcius => (celcius*1.8) + 32
farenheit()


let color = (r, g, b) => {
    let rgb = "#" + (r < 16 ? "0" + r.toString(16) : r.toString(16)) + (g < 16 ? "0" + g.toString(16) : g.toString(16)) + (b < 16 ? "0" + b.toString(16) : b.toString(16));
    return rgb
}
color(14,231,0)


let flatNumber = (yourFlatNumber, floors, flatFloorNumber) => {
    floors = prompt ("Скільки поверхів у будинку?");
    flatFloorNumber = prompt ("Скільки квартир на поверсі?");
    yourFlatNumber = prompt ("Який номер квартири?");
    let flatPerEntrance = (floors * flatFloorNumber);
    let entrance = Math.ceil ((yourFlatNumber - 1) / flatPerEntrance) + 1;
    let floor = Math.ceil((yourFlatNumber - 1) % flatPerEntrance / flatFloorNumber) + 1 ;
    return {entrance, floor}
} 
// Або, я можу не давати можливості користувачу вводити промпт і вписую значення параметрів при виклику функціі //


const capitalize = () => {
    let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
    let name = prompt ("Введіть ім'я");
    let surname = prompt ("Введіть прізвище");
    let fatherName = prompt ("Введіть ім'я по-батьковій");
    let fullName = name + " " + surname + " " + fatherName
    return {name:result(name), surname:result(surname), fatherName:result(fatherName), fullName:result(fullName)}
}
capitalize()


let str = string => {
    string = string.split('\\n')
    string = string.join('\n')
    return string
}
alert(str("ну\nякось\nтак"))


let age = (yourAge, age = 18) => (yourAge = prompt("Введіть свій вік")) ? yourAge : age
age()



let secrets = (rightLogin, rightPassword) => {
    let login = prompt("Введіть логін")
    let password = prompt("Введіть пароль")
    if(login !== rightLogin && password !== rightPassword){
        alert (`false`)
    }else {
        alert(`true`)
    }
    return {login, password}
}
secrets('admin','qwerty')


let multiplicationTable = (arr) => {
    let str = `<table>`
    for (let numbers of arr) {
        str+= `<tr>`
        for (let number of numbers) {
            str += `<td>${number}</td>`
        }
        str+=`</tr>`
    }
    str +=`</table>`
    return document.write(str)
}
multiplicationTable([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]])


let filterLexic = (string,badWords) => {
    string = string.split(' ')
    let string2 = string.filter(x => !badWords.includes(x))
    string2 = string2.toString()
    return string2
}
alert(filterLexic())
{

fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
.then(data => {
    const{rates: currencies} = data 
    let mainArr = []
    mainArr[0] = [" "]
    const nameOfCurrency = Object.keys(currencies)
    const currencyValue = Object.entries(currencies)
    for(let currency of nameOfCurrency){
        mainArr[0].push(currency)
    }
    let index = 1
    for([currency1, value1] of currencyValue){
        mainArr[index] = []
        mainArr[index].push(currency1)
        for(let[currency2, value2] of currencyValue){
            mainArr[index].push((value1/value2).toFixed(4))
        }
        index++
    }
    let multiplicationTable = (arr) =>{
        let str = `<style table, td {border: 1px solid black}></style>`
        str += "<table><tr>"
        for (let numbers of arr) {
            str += `<tr></tr>`
            for (let number of numbers) {
                str += `<td>${number}</td>`
            }
        }
        str += `</tr>`
        str +=`</table>`
        return document.write(str)
    }
    return(multiplicationTable(mainArr))
})
} 


let html = obj => {
    let str = `<form>`
    let keys = Object.keys(obj)
    for(let key of keys){
        let value = obj[key]
        let inputType = null  
        if(typeof value === "string") {
            inputType = 'text'
        }
        if(typeof value === "number") {
            inputType = 'number'
        }
        if(typeof value === "boolean") {
            inputType = 'checkbox'
        }
        str+=`<label>${key}<input type=${inputType} value="${value}" /></label>`
    }
    str+= `</form>`
    obj = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
  }
    return document.write(str)

}
html(obj)

{
    var persons = [
        {name: "Іван", age: 17},
        {name: "Марія", age: 35},
        {name: "Олексій", age: 73},
        {name: "Яків", age: 12},
    ]
    let sort = (arr, key, sorting) => {
    const sortArray = arr.sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key];
        } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          return a[key].localeCompare(b[key]);
        } else {
          return 0;
        }
      })
    if(sorting){
       return sortArray
    } 
       return sortArray.reverse()
    }
    sort(persons, "age", false); 
    sort(persons, "name", false);
}

{
    let persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
]
const tableView = (arr, key, sorting) => {
    const sortArray = arr.sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key];
        } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          return a[key].localeCompare(b[key]);
        } else {
          return 0;
        }
      })
    if(!sorting){
        sortArray.reverse()
    } 
    console.log(sortArray)
    let itemKeys = []
    let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
    str += '<table><tr>'
    for(let item of sortArray) {
        const keys = Object.keys(item)
        for(key of keys){
        if(!itemKeys.includes(key)){
            itemKeys = [...itemKeys, key]
            str+= `<td>${key}</td>`
        }    
        }    
    }
    str+=`</tr>`
    for(let item of sortArray) {
        str+=`<tr>`
        for(let key of itemKeys){
            itemValue = item[key]
            if(itemValue === undefined){
                str+= `<td></td>`
            }else{
            str+=`<td>${itemValue}</td>`
            }
        }
        str+=`</tr>`
    }
    str+=`</table>`
    document.write(str)
    }
tableView(persons, "age", true)
}

let calc = (a) => {
    let c = null
    let b = (a * 5);
    b = (c = b/2)
    return {b, c}
}
console.log(calc(1))

