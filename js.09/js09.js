{
let question
do{
    question = confirm("Шо там?")
} while(!question)
}
{
    let arr = []
    let arr2 = []
    let words
    while(words = prompt("Введіть шось")) {
        arr2 = arr.push(words)
    }
    console.log(arr)
}

{
    let arr = []
    let words 
    let i = 0
    while(words = prompt("Введіть шось")) {
        arr[i] = words
        i++
    }
    console.log(arr)
}

{
    let i
    for(i = 0;;i++){
        if(Math.random() > 0.9){
            break
        }
    }
    alert(`Кількість ітерацій: ${i}`)
}
{
    while(prompt("введіть щось") === null){

    }
}
{
    let n =+prompt("До якого числа рахуємо?")
    let result = 0
    for(i = 1;i<=n;i+=3){
        result+= i
    }
    console.log(result)
}
{
    let n =+prompt("До якого числа рахуємо?")
    let string = []
    let a = []
    for(let i = 0; i<=n; i++){
        a[i] = string.push("#")
    }
    string = string.join("")
    console.log(string)
}
{
    let str = ''
    for(let i = 0;i<10;i++){
        for(let x = 0; x<10;x++){
            str+= x 
        }
        str+= '\n'
    }
    console.log(str)
}
{
    let i = +prompt("Скільки колонок буде?")
    let x = +prompt("Скільки елементів в рядку?")
    let str = ''
    for(let j = 0;j<i;j++){
        if(j%2 === 0){
        for(let n = 0; n<x;n++){
            str+='.' + '#'
           }
        }else{
        for(let n = 0; n<x;n++){
            str+='#' + '.'
    }
    }
    str+= '\n'
}
console.log(str)
}
{
    let n = +prompt("Скільки елементів буде?")
    let cube = []
    for(let i = 0; i<n;i++){
        cube[i] = i**3
    }
    console.log(cube)
}
{
    let size = 10
    let arr = []
    for(let i = 0;i<size;i++){
        arr[i] = []
        for(let x =0; x<size; x++){
            arr[i][x] = i * x
        }
    }
    console.log(arr)
}