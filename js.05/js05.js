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