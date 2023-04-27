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
    const [,even1,,even2,,] = arr
    const [odd1,,odd2,,odd3] = arr
    const [,,,,,...arr2] = arr
}

{
    let arr = [1, "abc"]
    let letters = arr[1].split('')
    arr = [1,...letters]
    let [number, s1, s2, s3] = arr
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
