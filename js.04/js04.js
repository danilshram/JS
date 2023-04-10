{
    let userNumber = prompt("Введіть число");
    if (isNaN(userNumber)) {
        alert("Це не число")
    }
    else {
        alert ("Дякую")
    }
    let number = userNumber % 2;
    if (number === 0){
        alert ("Ви ввели парне число")
    }
    else {
        alert("Ви ввели непарне число")
    }
}

{
    let user = prompt("Введіть щось, але без некоректних слов будь ласка");
    let firstBadWord = user.includes("блять");
    let secondBadWord = user.includes ("сука");
    let thirdBadWord = user.includes ("жопа");
    if(firstBadWord) {
        alert ("Просив же без некоректних слів")
    }
    if(secondBadWord) {
        alert ("Просив же без некоректних слів")
    }
    if(thirdBadWord) {
        alert ("Просив же без некоректних слів")
    }
}

{
    let question = confirm("Води хочеш?");
    if (question) {
        alert ("Зараз принесу")
    }
    else {
        alert("Ну як хочеш")
    }
}


{
    let italySize = +prompt("Введіть свій розмір (італійський)");
    if (italySize === 38) {
        alert ("Ваш англійський розмір 8")
    }
    if(italySize === 40) {
        alert ("Ваш англійський розмір 10")
    }
    if(italySize === 42) {
        alert ("Ваш англійський розмір 12")
    }
    if(italySize === 44) {
        alert ("Ваш англійський розмір 14")
    }
    if(italySize === 46) {
        alert ("Ваш англійський розмір 16")
    }
    if(italySize === 48) {
        alert ("Ваш англійський розмір 18")
    }
    if(italySize === 50) {
        alert ("Ваш англійський розмір 20")
    }
    if(italySize === 52) {
        alert ("Ваш англійський розмір 22")
    }
}


{
    let sex = confirm ("Якої ви статі? (Ок - чоловік, Cancel - жінка)");
    sex ? "Ви чоловічої статі" : "Ви жіночої статі";
}

{
!!2 //true
!!0 //false
!!1 // true
2 || 1 // 2
2 || 0 // 2
2 && 1 // 1
1 && 2 // 2 
0 && 2 // 0
0 || 1 || 2 // 1
0 && 1 && 2 // 0
2 || 1 || 0 // 2
2 && 1 && 0 // 0
confirm('left') || confirm('right') // true, якщо 'left' або 'right' ок. false, якщо тиснути 'left' і 'right' cancel
confirm('left') && confirm('right') // true, якщо "left" і "right" ок. false, якщо один з confirm cancel
null || 2 // 2
undefined && 1 // undefined
alert("Hello") && confirm('Are you sexy?'); // true якщо всюди втиснути ок. false, якщо втиснути в 1 випадку cancel
alert("Hello") || confirm('Are you drunk?'); // true якщо або в перщому, або в другому випадку втиснути ок. false якщо оба випадки будуть cancel
(undefined || 2) && (3 || 0) // 3
(2 && 1) || (null && 0) // 1
(2 > 1) && "greater" // "greater"
(2 < 1) && null // false
null && (2 < 1) // null
1 ? "one" : "not one" // "one"
0 ? "zero" : "not zero" // "not zero"
"0" ? "\"zero\"" : "not `zero`" // "zero"
parseInt("0") ? 'true' : 'false' // false
("" || 2) && (3 || "3.5") || (4 && 5) // 3
(-1 + 1) && "zero" // 0
"-1" + 1 && "oups" // oups
(typeof null === 'object') ? "null is object" : "null is null" // null is object
Math.random() < 0.5 && 'less' || 'more' // якщо 0.5 > mathRandom, то залишиться "less", якщо 0.5 < mathRandom то буде "more"
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a // якщо 0.5 > mathRandom, то залишиться "less", якщо 0.5 < mathRandom то буде "more"
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' // prime
}

{
let age = prompt("Скільки вам років?");
if (age === null || age === "") {
    alert ("Ви не ввели свій вік")
}
}
{
confirm ("Шопінг?") || alert("ти бяка");
}
{
    let shoping = confirm("Шопінг?");
    if (shoping === null) {
        alert("ти бяка")
    }
}


{
    let name = prompt("Введіть ім'я") || "Володимир";
    let surname = prompt("Введіть прізвище") || "Зеленський";
    let fatherName = prompt("Введіть ім'я по-батьковій") || "Володимирович";
}

{
    let name = prompt("Введіть ім'я");
    if (name === null || name === "") {
         name = "Володимир"
    }
    let surname = prompt("Введіть прізвище");
    if (surname === null || surname === ""){
        surname = "Зеленський"
    }
    let fatherName = prompt("Введіть ім'я по-батьковій");
    if (fatherName === null || fatherName === "") {
        fatherName = "Володимирович"
    }
}


{
    let login = prompt("Введіть логін");
    let rightLogin = "admin";
    if (login === rightLogin) {
        alert ("Дякуємо!")
    }
    while(login !== rightLogin) {
        alert("Введіть логін повторно")
        login = prompt ("Введіть логін")
    }
    let password = prompt("Введіть пароль");
    let rightPassword = "qwerty";
    if (password === rightPassword) {
        alert ("Вітаємо в нашему сервісі")
    }
    while (password !== rightPassword) {
        alert("Введіть пароль повторно")
        password = prompt("Введіть пароль")
    }

}


{
    let currency = prompt("З якою валютою будемо працювати usd/eur/zloty?").toUpperCase();
    let buySale = confirm("Купити це ок, продати це cancel");
    let rate = 0;
    if (currency === "USD") {
        rate = buySale ? 37.2 : 37.9
    }
    if (currency === "EUR") {
        rate = buySale ? 40.3 : 41.1
    }
    if (currency === "ZLOTY") {
        rate = buySale ? 8.35 : 8.9
    }
    let sum = +prompt("Введіть суму, яку хочете обміняти");
    let exchange = 0;
    if (buySale) {
        exchange = Math.round(sum / rate)
    }
    else {
        exchange = Math.round(sum * rate)
    }
    console.log(exchange)
}


{
    let userChoose = prompt("Введіть ваш варіант: камінь/ножиці/папір");
    let computerChoose = ["камінь", "ножиці", "папір"];
    let choiceProgram = Math.ceil(Math.random() * computerChoose.length)
    if (computerChoose[choiceProgram] === userChoose) {
        alert("Нічия")
    }
 else if (
    (computerChoose[choiceProgram] === "камінь" && userChoose === "ножиці") ||
    (computerChoose[choiceProgram] === "ножиці" && userChoose === "папір") ||
    (computerChoose[choiceProgram] === "папір" && userChoose === "камінь")
  ) {
    alert("Комп'ютер переміг");
  } else if (
    (computerChoose[choiceProgram] === "камінь" && userChoose === "папір") ||
    (computerChoose[choiceProgram] === "ножиці" && userChoose === "камінь") ||
    (computerChoose[choiceProgram] === "папір" && userChoose === "ножиці")
  ) {
    alert("Юзер переміг");
  }
}