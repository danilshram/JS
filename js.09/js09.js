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
    let str = ''
    for(let i = 0; i<=n; i++){
        str += "#"+" "
    }
    console.log(str)
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
        for(let n = 0; n<x;n++){
            if((n+j)%2 !== 0){
               str+='#' 
            }else {
                str+='.'
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
        let object = {}
        for(let i = 0;; i++){
            let question = confirm("Ще хочеш?")
            if(!question){
                break
            }
            let continueLoop = true
            while(continueLoop){
                let keyName = prompt("Введіть ключ")
                let keyValue = prompt("Введіть значення для ключа")
                if(keyName === null){
                    continueLoop = false
                    break
                }
                if(keyValue === null){
                    continueLoop = false
                    break
                }
                object[keyName] = keyValue
            }
            arr[i] = object 
        }
    return arr
    }
    readArrayOfObjects()
}
{
    let size = 11;
    let str = "";
    for(let i = 1; i<=size; i++){
        let startStr = ".".repeat(size - i)
        let romb = "#".repeat(2*i - 1)
        let endStr = ".".repeat(size - i)
        str+= startStr + romb + endStr + '\n'
    }
    for(let x = size - 1; x>0; x--){
        let startStr = ".".repeat(size - x)
        let romb = "#".repeat(2*x - 1)
        let endStr = ".".repeat(size - x)
        str+= startStr + romb + endStr + '\n'
    }
    console.log(str)
}
{
        let size = 10
        let table = document.createElement('table')
        table.style.border = '2px black solid'
        let arr = []
        for(let i = 0;i<size;i++){
            let row = document.createElement('tr')
            row.style.border = '1px solid black'
            arr[i] = []
            for(let x = 0; x<size; x++){
                let cell  = document.createElement('td')
                arr[i][x] = i * x
                cell.innerText = arr[i][x] 
                row.appendChild(cell)
                cell.addEventListener('mouseover', function () {
                    cell.style.backgroundColor = 'green';
                    row.style.backgroundColor = 'blue';
                    let column = table.rows[x].cells[cell.cellIndex]
                    column.style.backgroundColor = 'red';
                  });
          
                  cell.addEventListener('mouseout', function () {
                    cell.style.backgroundColor = 'transparent';
                    row.style.backgroundColor = 'transparent';
                    let column =  table.rows[x].cells[cell.cellIndex]
                    column.style.backgroundColor = 'transparent';
                  });
            }  
            table.append(row)
        }
       document.body.append(table)
}