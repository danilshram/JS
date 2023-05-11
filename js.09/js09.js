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

{
    let readArrayOfObjects = () => {
        let arr = []
        for(let i = 0;; i++){
            let question = confirm("Ще хочеш?")
            if(!question){
                break
            }
            let keyName = prompt("Введіть ключ")
            let keyValue = prompt("Введіть значення для ключа")
            if(![keyName] || !keyValue){
                return arr
            }
            arr[i]= {[keyName]: keyValue} 
        }
    return arr
    }
    readArrayOfObjects()
}



{
        let size = 10
        let table = document.createElement('table')
        table.style.border = '2px black solid'
        let arr = []
        for(let i = 0;i<size;i++){
            let tr = document.createElement('tr')
            tr.style.border = '1px solid black'
            arr[i] = []
            table.append(tr)
            for(let x = 1; x<size; x++){
                let td = document.createElement('td')
                td.style.border = '1px solid black'
                arr[i][x] = i * x
                td.innerText = arr[i][x]
                tr.append(td)
            }
        }
       document.body.append(table)
}
 