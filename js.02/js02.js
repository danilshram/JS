var a = 5;  
var b, c;

b = ((a) * (5)); //спочатку підставляється значення перемінної а, пізніше вичисляється b  
b = ((c) = (b/2)); // спочатку підставляється значення перемінної b, на другому етапі вичисляється в с, на останньому етапі значення перемінної с оновлює значення b 
alert (c);
alert (b);



let age = +prompt ("Скільки вам років?");
let yearOfBirth = (2023 - age);
alert ("Ваш рік народження: " + yearOfBirth);




let celciusDegrees = +prompt ("Скільки сьогодні градусів?");
let farenheitDegrees = ((celciusDegrees * 1.8) + 32);
alert ("Сьогодні стільки по Фаренгейту: " + farenheitDegrees);



let firstNumber = +prompt ("Введіть перше число");
let secondNumber = +prompt ("На що поділимо?");
let result = Math.round (firstNumber / secondNumber);
alert ("Результат: " + result);




const rate = 8.57; // курс польського злотого
let hrywnia = +prompt ("Шо по чьом?");
let money = rate * hrywnia;
alert ("Ось стільки це в гривнях " + money .toFixed(2));




let red = +prompt ("Шо по червоному?");
let green = +prompt ("А по зеленому?");
let blue = +prompt ("Не забудь про синій");
let css = ((red.toString(16).padStart(2,0)) + (green.toString(16).padStart(2,0)) + (blue.toString(16).padStart(2,0)));
alert ("#" + css);


let floors = prompt ("Скільки поверхів у будинку?");
let flatFloorNumber = prompt ("Скільки квартир на поверсі?");
let flatNumber = prompt ("Який номер квартири?");

let flatPerEntrance = (floors * flatFloorNumber);
let entranceNumber = Math.ceil ((flatNumber - 1) / flatPerEntrance) + 1;
let floorNumber = Math.ceil((flatNumber - 1) % flatPerEntrance / flatFloorNumber) + 1 ;
alert ("Квартира номер " + flatNumber + " знаходиться на " + floorNumber + " поверсі " + entranceNumber + " під'їзду");