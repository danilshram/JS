{
function htmlTree(parent){
    if (typeof parent === 'string') {
        return parent;
    }

    let tagName = parent.tagName
    let htmlStr = `<${tagName}`

    if(parent.attrs){
        let attrs = Object.entries(parent.attrs).map(([key,value]) => `${key}=${value}`)
        htmlStr += `${" " + attrs}` 
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
        tagName.style = attrs
    }

    if(Array.isArray(obj.children)){
        let childs = obj.children.map(child => {
            if(typeof child === 'object'){
                domTree(tagName, child)
            }else{
                tagName.innerText = child
            }
        })
        let childrens = childs.join("")
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
    function deepCopy( )
    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]

}