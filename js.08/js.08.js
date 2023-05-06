{
    var age = + prompt ("Скільки вам років?", ""); 
if(age < 0) {
    alert("Неможливо")
}else if (age < 18) {
    alert("школяр");
}
else if (age < 30){
    alert("молодь");
}
else if (age < 45){
    alert("зрілість");
}
else if (age < 60){
    alert("захід сонця");
}
else {
    alert("як пенсія?");
}
}

{
    let italySize = +prompt("Введіть свій розмір (італійський)");
    switch(italySize){
        case '38':
            alert ("Ваш англійський розмір 8")
            break
        case  '40':
            alert ("Ваш англійський розмір 10")
            break
        case '42':
            alert ("Ваш англійський розмір 12")
            break
        case '44':
            alert ("Ваш англійський розмір 14")
            break
        case '46':
            alert ("Ваш англійський розмір 16")
            break
        case '48':
            alert ("Ваш англійський розмір 18")
            break
        case '50':
            alert ("Ваш англійський розмір 20")
            break
        case '52':
            alert ("Ваш англійський розмір 22")
            break
}
}
{
    let color = prompt("Введіть колір","");
    if(color === "red" || color === "black" || color === "blue" || color === "green"){
        if(color === "red" || color === "black"){
            if(color === "red"){
                 document.write("<div style='background-color: red;'>червоний</div>")
             } 
              document.write("<div style='background-color: black; color: white;'>чорний</div>") 
         }
         if(color === "blue" || color === "green"){
             if (color === "blue"){
                 document.write("<div style='background-color: blue;'>синій</div>")
             }
             document.write("<div style='background-color: green;'>зелений</div>")
         }
    } else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>")
    }
}
{
    const noSwitch = (key, cases, defaultKey='default') => {
        if(key in cases){
            return cases[key]
        }else {
            return cases[defaultKey]
        }

}
const drink = prompt("Що ви любите пити")
noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай(){
        console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
    },
    "пиво": () => console.log('Добре влітку, та в міру'),
    віскі: function(){
        console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
    },
    default(){
        console.log('шото я не зрозумів')
    }
})
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
        let currencies = data.rates
        for (let currency in currencies){
           let buttonHtml = document.createElement("button")
            buttonHtml.innerText = currency
            buttonHtml.onclick = () =>{
                const currentCurrencyToUSD = currencies[currency]
                const yourSummary = +prompt("Введіть суму яку хочете поміняти") 
                let result = yourSummary / currentCurrencyToUSD
                alert(result)
            }
            document.body.append(buttonHtml)
        }
        })
}

{
    // <select id='from'> - вихідна валюта
    // <select id='to'> - валюта в яку відбувається обмін
    // <div id='rate'> - кроскурс між валютами
    // <input type='number' id='amount' /> - сума у вихідній валюті
    // <div id='result'> - сума у валюті, в яку хочемо поміняти
//     Використовуючи заготівлю з попереднього завдання, наповніть select-и тегами option з назвами валют, використовуючи цикл
//     document.createElement
//     innerText для option
//     from.append або to.append
//     За межами циклу призначте обробники onchange для елементів select та oninput для елемента input, використовуючи їх id. За цими подіями оновлюйте текст у div#rate та div#result
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
       let firstCurrency = document.createElement('select')
       firstCurrency.id = 'from'
       let secondCurrency = document.createElement('select')
       secondCurrency.id = 'to'
       let course = document.createElement('div')
       course.id = 'rate'
       let yourMoney = document.createElement('input')
       yourMoney.type = 'number'
       yourMoney.id = 'amount'
       let result = document.createElement('div')
       result.id = 'result'

       let currencies = data.rates
       for(currency in currencies){
        let option = document.createElement('option')
        option.innerText = currency
        // option.value = currency 
        // firstCurrency.appendChild(option)
        // secondCurrency.appendChild(option)
        firstCurrency.add(new Option(currency, currency))
        secondCurrency.add(new Option(currency, currency))
       }
       console.log(firstCurrency)

       firstCurrency.onchange = () => course.innerHtml = firstCurrency.value / secondCurrency.value
       secondCurrency.onchange = () => course.innerHtml = firstCurrency.value / secondCurrency.value
       yourMoney.onchange = () => result.innerHTML = yourMoney.value * (firstCurrency.value / secondCurrency.value)
       document.body.append(firstCurrency)
       document.body.append(secondCurrency)
    })
}





