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





