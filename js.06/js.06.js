{
    const dog = {
    name : "Дені",
    age : "4",
    weight : "40kg",
    race : "Лабрадор"
}
}

{
    const obj = {
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
        [prompt("Введіть ключ")] : prompt("Введіть значення")
    }
    console.log(obj)
}

{
    const obj = {
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
        [prompt("Введіть ключ")] : prompt("Введіть значення"),
        [prompt("Введіть ключ")] : prompt("Введіть значення")
    }
    let name = prompt("Введіть ключ")
    let obj2 = {
        [name] : prompt("Введіть значення"),
        ...obj 
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
                        children: ["Enter a data please"],
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
                            id: 'name'
                        }
                    }
                ],
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['ok'],
                        attrs: {
                            id: 'ok'
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
}
