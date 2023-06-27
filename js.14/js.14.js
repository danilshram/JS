{
function htmlTree(parent){
    if (typeof parent === 'string') {
        return parent;
    }

    let tagName = parent.tagName
    let htmlStr = `<${tagName}`

    if(parent.attrs){
        let attrs = Object.entries(parent.attrs).map(([key,value]) => `${key}="${value}"`)
        htmlStr += " " + attrs.join()
    }

    if(parent.children){
            let childs = parent.children.map(child => htmlTree(child))
            htmlStr += `>${childs.join("")}</${tagName}>`
    }else {
        htmlStr += `></${tagName}>`;
    }

    return htmlStr
}


const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}
htmlTree(table)
}


function domTree(parent, obj){
    let tagName = document.createElement(obj.tagName)   
    if(obj.attrs){
        let attrs = Object.entries(obj.attrs).map(([key,value]) => `${key}:${value}`)
        for(attr in obj.attrs){
            tagName.setAttribute(attr, obj.attrs[attr])
        }
    }
    if(Array.isArray(obj.children)){
        let childs = obj.children.map(child => {
            if(typeof child === 'object'){
                domTree(tagName, child)
            }else{
                tagName.innerText = child
            }
        })
        tagName.append(childrens)
    }
    parent.append(tagName)
}
const table = {
    tagName: 'table',
    attrs: {
        border: "1px",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}
domTree(document.body, table)


{
    function deepCopy(someArr){
        if (typeof someArr === "object" && Array.isArray(someArr)) {
            return someArr
        }
        let copyArr = []
        for(let key in someArr){
            let value = someArr[key]
            copyArr[key] = deepCopy(value)
        }
        return copyArr
    }
    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const arr2 = deepCopy(arr)
    console.log(arr2)
}


{
    function stringify(something){
        if(typeof something === 'undefined' || something === null){
            something = 'null'
            return something
        }
        if (typeof something === 'string') {
            return '"' + something + '"';
          }
          
          if (typeof something === 'number' || typeof something === 'boolean') {
            return something.toString();
          }
          
          if (Array.isArray(something)) {
            const elements = something.map(i => stringify(i));
            return '[' + elements.join(',') + ']';
          }
          
          if (typeof something === 'object') {
            const keys = Object.keys(something).map((key) => {
            const value = stringify(something[key])
            if(value !== 'null'){
                return '"' + key + '":' + value
            }else{
                return undefined
            }
            }).filter(Boolean)
            return '{' + keys.join(',') + '}'
          }
         return ''
}
const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
const table = {
    tagName: 'table',
    attrs: {
        border: "1px",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}

    const jsonTable = stringify(table)
    console.log(jsonTable)    
    const jsonString = stringify(arr)
    console.log(JSON.parse(jsonString))
}
{
    function getElementById(idToFind){
        let domElement 
        function walker(parent){
            for (const child of parent.children){
                if(child.id === idToFind){
                    domElement = child
                    throw domElement
                }
                walker(child)
            }
        }
        try{
            walker(document.body)
        }catch(e){
            return e
        }
    }
}
