{
    const dog = {
    name : "Дені",
    age : "4",
    weight : "40kg",
    race : "Лабрадор",
    [prompt("Введіть ключ")] : prompt("Введіть значення"),
}
    const coffee = {
        kind: 'arabica',
        country: 'Kenia',
        typeFor: 'filter',
        weight: '250gr',
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
    }
    const pants = {
        color: 'black',
        brand: 'Levis',
        age: '1 year',
        size: 'L',
        [prompt("Введіть ключ")] : prompt("Введіть значення")
    }
}

{
    const dog = {
        name : "Дені",
        age : "4",
        weight : "40kg",
        race : "Лабрадор",
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
    }
    let name = prompt("Введіть ключ")
    let obj2 = {
        [name] : prompt("Введіть значення"),
        ...dog 
    }
    console.log(obj2)
}

{
    const body = {
        tagName: 'body',
        children: [
            { 
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: [`Enter a data please`],
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ],
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['ok'],
                        attrs: {
                            id: 'ok',
                        }
                    },
                    {
                        tagName: 'button',
                        children: ['cancel'],
                        attrs: {
                            id: 'cancel'
                        }
                    }
                ]
            }
        ]
    }
    console.log(body.children[1].children[1].children)
    console.log(body.children[0].children[3].attrs['id'])
    body.children[1].children[0].attrs[prompt("Введіть атрибут")] = prompt("Введіть значення")
    let {children:[{children:[{children:spanText},{},{},{attrs:{id:nameId}}]},{children:[{},{children:buttonText}]}]} = body
    body.tagName = body
    body.children[0].body = body
    body.children[1].body = body
    body.children[0].children[0] = body.children[0]
    body.children[0].children[1] = body.children[0]
    body.children[0].children[2] = body.children[0]
    body.children[0].children[3] = body.children[0]
    body.children[1].children[0] = body.children[1]
    body.children[1].children[1] = body.children[1]
}


{
    let arr = [1,2,3,4,5, "a", "b", "c"]
    const [odd1,even1, odd2,even2, odd3,...arr2] = arr
    console.log(odd1,even1, odd2,even2, odd3, arr2)
}

{
    let arr = [1, "abc"]
    const [number, [s1,s2,s3]] = arr
    console.log(number, s1, s2, s3)
}
{
    let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}
    let [{name, surname, children:[name1, name2]}] = [obj]
    console.log(name1,name2)
}
{
    let arr = [1,2,3,4,5,6,7,10]
    let {0:a,1:b,length}= arr
    console.log(a,b,length)
}

{
    const pants = {
        color: 'black',
        brand: 'Levis',
        age: '1 year',
        size: 'L',
    }
    const {[[prompt("Bведіть ключ")]]:f, ...rest} = pants
    console.log(rest)
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        const{rates:currencies} = data
        let firstCurrency = prompt("Введіть вхідну валюту").toUpperCase().trim() + Object.keys(currencies)                              
        let secondCurrency = prompt("Введіть валюту в яку конвертуємо").toUpperCase().trim() + Object.keys(currencies)                                    
        let summary = +prompt("Введіть суму у вхідній валюті")
        if(firstCurrency === secondCurrency) {
            alert("Ви впевнені, шо ви не помилились?")
        }
        else {
            const{[firstCurrency]:yourCurrency, [secondCurrency]: ourCurrency} = currencies
            if(yourCurrency !== undefined && ourCurrency !== undefined && (isNaN(summary)) && summary > 0) {
                let result =`${summary*(yourCurrency/ourCurrency)}`
                alert(result)
            }
        }
})                 
// НЕ ЗНАЮ ЩО ЩЕ 
}
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        const{rates:currencies} = data
        const nameOfCurrency = Object.keys(currencies)
        str = "<select>"
            for(currency of nameOfCurrency) {
                str += `<option>${currency}</option>`, ''
            }
            str += `</select>`
            document.write(str)
})
}


{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const currencies = data.rates
        const nameOfCurrency = Object.keys(currencies)
        const currencyValue = Object.entries(currencies)
        let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
        str += "<table><tr><th></th>"
        for(let currency of nameOfCurrency){
            str+= `<th>${currency}</th>`
        }
        str += `</tr>`
        for(let currencyArray of currencyValue){
            let [currency1, value1] = currencyArray
            str+=`<tr><td>${currency1}</td>`
            for(let[currency2, value2] of currencyValue){
                str+= `<td>${(value1 / value2).toFixed(4)}</td>`
            }
        }
        str+= `</table>`
        document.write(str)
        
})
}


{
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
  }
    let str = `<form>`
    let keys = Object.keys(car)
    for(let key of keys){
        let value = car[key]
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
    document.write(str)
}


{/* <form>
    <label>Name: <input type="text" value="chevrolet chevelle malibu"/></label>
    <label>Cylinders: <input type="number" value="8"/></label>
    <label>Displacement: <input type="number" value="307"/></label>
    <label>Horsepower: <input type="number" value="130"/></label>
    <label>Weight_in_lbs: <input type="number" value="3504"/></label>
    <label>Origin: <input type="text" value="USA"/></label>
    <label>in_production: <input type="checkbox" /></label>
</form> */}


{
    const persons = [
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
let personKeys = []
let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
str += '<table><tr>'
for(let person of persons) {
    // personKeys = [...Object.keys(person), ...personKeys]
    const keys = Object.keys(person)
    for(key of keys){
       if(!personKeys.includes(key)){
        personKeys = [...personKeys, key]
        str+= `<td>${key}</td>`
    }    
    }    
}
str+=`</tr>`
for(let person of persons) {
    str+=`<tr>`
    for(let key of personKeys){
        personValue = person[key]
        if(personValue === undefined){
            str+= `<td></td>`
        }else{
        str+=`<td>${personValue}</td>`
        }
    }
    str+=`</tr>`
}

str+=`</table>`
document.write(str)
}
