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
                        children: [`Enter a data please`],
                    },
                    {
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
                            id: 'surname'
                        }
                    }
                ],
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['ok'],
                        attrs: {
                            id: 'ok',
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
    console.log(body.children[1].children[1].children)
    console.log(body.children[0].children[3].attrs['id'])
    body.children[1].children[0].attrs[prompt("Введіть атрибут")] = prompt("Введіть значення") 
    body.tagName = body
    body.children[0].body = body
    body.children[1].body = body
    body.children[0].children[0] = body.children[0]
    body.children[0].children[1] = body.children[0]
    body.children[0].children[2] = body.children[0]
    body.children[0].children[3] = body.children[0]
    body.children[1].children[0] = body.children[1]
    body.children[1].children[1] = body.children[1]
}


{
    let arr = [1,2,3,4,5, "a", "b", "c"]
    const [,even1,,even2,,] = arr
    const [odd1,,odd2,,odd3] = arr
    const [,,,,,...arr2] = arr
}
  


