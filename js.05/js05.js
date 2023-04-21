{
    let answers = ["Любиш м'ясо", "Маму теж?", "А ЗСУ?"].map(confirm)
    console.log(answers)
}



{
    let firstAnswer = prompt("Як справи?");
    let secondAnswer = prompt("Як Великдень святкував?");
    let thirdAnswer = prompt("Довго вже програмуєш?");
    const arr = []
    arr[0] = firstAnswer
    arr[1] = secondAnswer
    arr[2] = thirdAnswer
    console.log(arr)
}


{
    const arr = [1, 2, 3, 4, 5, 6];
    let index = arr[prompt("Введіть індекс")];
    console.log(index)
}


{
    const arr = [1, 2, 3, 4, 5, 6];
    let index = arr[prompt("Введіть індекс")];
    let value = prompt("Введіть значення");
    arr[index] = value;
    console.log(arr)
}


{
    const multiplicationTable = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
    [0, 3, 6, 9, 12, 15, 18, 21, 24, 27],
    [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
    [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
    [0, 7, 14, 21, 28, 35, 42, 49, 56, 63],
    [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
    [0, 9, 18, 27, 36, 45, 54, 63, 72, 81]
    ];
    multiplicationTable[1] = multiplicationTable[1].slice(1);
    multiplicationTable[2] = multiplicationTable[2].slice(1);
    multiplicationTable[3] = multiplicationTable[3].slice(1);
    multiplicationTable[4] = multiplicationTable[4].slice(1);
    multiplicationTable[5] = multiplicationTable[5].slice(1);
    multiplicationTable[6] = multiplicationTable[6].slice(1);
    multiplicationTable[7] = multiplicationTable[7].slice(1);
    multiplicationTable[8] = multiplicationTable[8].slice(1);
    multiplicationTable[9] = multiplicationTable[9].slice(1);
    multiplicationTable.slice(1);
}



{
    let words = prompt("Введіть рядок");
    arr = words.split(" ");
    let index = arr.indexOf(prompt("Введіть правильне слово")) + 1;
    console.log(index)
}


{
    let arr = [];
    arr.push(prompt("write something"));
    arr.push(prompt("write something"));
    arr.push(prompt("write something"));
    arr.push(prompt("write something"));
    arr.push(prompt("write something"));
    console.log(arr)
    let arr2 = [arr.pop(), arr.pop(), arr.pop(), arr.pop(), arr.pop()]
    console.log(arr2)
    arr2 = [arr.shift(), arr.shift(), arr.shift(), arr.shift(), arr.shift(), arr.shift()]
    arr2 = [arr.unshift(arr.shift), arr.unshift(arr.shift), arr.unshift(arr.shift), arr.unshift(arr.shift), arr.unshift(arr.shift)]
    console.log(arr2)

}


const copyMultiplicationTable = [...multiplicationTable];
console.log(copyMultiplicationTable)

{
    copyMultiplicationTable = JSON.parse(JSON.stringify(multiplicationTable));
}


{
    let arr = [1, 2, 3, 4, 5];
    const arr2 = arr
    console.log(arr === arr2)
}

{
    const multiplicationTable2 = [...multiplicationTable[0], ...multiplicationTable[1], ...multiplicationTable[2], ...multiplicationTable[3], ...multiplicationTable[4], ...multiplicationTable[5], ...multiplicationTable[6], ...multiplicationTable[7], ...multiplicationTable[8], ...multiplicationTable[9]];
    console.log(multiplicationTable2)
}

{
    const word = prompt("Введіть слово");
    let [a,,,,b,,,,c] = word.split('');
    console.log([a,b,c])
} 


{
    const word = prompt("Введіть слово");
    let [,a=!,,b=!, c=! ] = word.split('');
    console.log([a,b,c])
}


{
    const multiplicationTable = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        [0, 3, 6, 9, 12, 15, 18, 21, 24, 27],
        [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
        [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
        [0, 7, 14, 21, 28, 35, 42, 49, 56, 63],
        [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
        [0, 9, 18, 27, 36, 45, 54, 63, 72, 81]
        ];
    let [[a, b, ...rest1], [c, d, ...rest2], [e, f, ...rest3], [g, h, ...rest4]] = multiplicationTable;
    multiplicationTable2 = [b, ...rest1, d, ...rest2, f, ...rest3, h, ...rest4];
    console.log(multiplicationTable2)

}


{
    let names = ["John", "Paul", "George", "Ringo"];
    for(const man of names) {
        alert(man)
    }
}


{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
       str += `<option>${currency}</option>`
    }
    str+= "</select>"
    document.write(str)

}

{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str += name + ` `
    }
    str+= "</table>"
    document.write(str) 
}


{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str += `<br>${name}</br>`
    }
    str+= "</table>"
    document.write(str)
}


{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (let currency of currencies){ 
        str += `<br></br>`
        console.log(currency)
        for (let letter of currency){ 
            str += letter + " "
            console.log(letter)
        }
    }
    str+= "</table>"
    document.write(str)
}


{
    let multiplicationTable = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        [0, 3, 6, 9, 12, 15, 18, 21, 24, 27],
        [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
        [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
        [0, 7, 14, 21, 28, 35, 42, 49, 56, 63],
        [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
        [0, 9, 18, 27, 36, 45, 54, 63, 72, 81]
        ];
    let str = "<table>"
    for (let numbers of multiplicationTable){
        str += `<br></br>`
        console.log(numbers)
        for (let one of numbers) {
        str += one + ` `
        console.log(one)
        }
    }
    str += "</table>"
    document.write(str)
}
{
    const capitalize = str => {
        let result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
        return result 
    }
    console.log(capitalize("cANBerRa"))
}


{
    let string = prompt("Введіть строку");
    let arr = string.split(" ");
    const arr2 = arr.map(x=> x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase())
    const arr3 = arr2.toString()
    console.log(arr3)
} 


{
    let answer = prompt("Введіть строку");
    let arr = answer.split(" ");
    let badWords = [`shit`, `fuck`, `bitch`]
    let arr2 = arr.filter(x => !badWords.includes(x))
    let arr3 = arr2.toString()
    console.log(arr3)
} 

{
    let words = prompt("Введіть рядок")
    let arr = words.split(" ")
    let badWords = [`shit`, `fuck`, `bitch`]
    let arr2 = arr.map(x => !badWords.includes(x) ? x : x = 'beep')
    let arr3 = arr2.join(' ').toString()
    console.log(arr3)
}


{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce( (a,b) => (a + `<option>${a,b}</option>` + '' + b))
    str += "</select>"
    document.write(str)
}

// {
// const line = prompt()
// const bracketsStack = []
// let   i  = 0
// for (const character of line){

//     if (character !== bracketsStack) {
//          break; 
//     }
//     i++ 

// }
// }  Не розумію як його робити