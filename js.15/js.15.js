{
function jsonTable(parent, json){
    let table = document.createElement('table')
    table.style = 'border: 1px solid black'
    let headerInfo = Object.keys(json)
    let header = document.createElement('thead')
    header.style = 'border: 1px solid black'
    let headerTr = document.createElement('tr')
    headerTr.style = 'border: 1px solid black'
    headerInfo.forEach(element => {
        let thHeader = document.createElement('th')
        thHeader.style = 'border: 1px solid black'
        thHeader.innerText = element
        headerTr.append(thHeader)
    });
    header.append(headerTr)
    table.append(header)

    let tableInfo = Object.values(json)
    let tr = document.createElement('tr')
    tr.style = 'border: 1px solid black'
    tableInfo.forEach(element => {
        let td = document.createElement('td')
        td.style = 'border: 1px solid black'
        td.innerText = element
        tr.append(td)
        table.append(tr)
    })
    parent.append(table)
    }
const div = document.createElement('div')
document.body.append(div)
}



{
  function jsonTable(parent, json){
    let table = document.createElement('table')
    table.style = 'border: 1px solid black'
    let headerInfo = Object.keys(json)
    let header = document.createElement('thead')
    header.style = 'border: 1px solid black'
    let headerTr = document.createElement('tr')
    headerTr.style = 'border: 1px solid black'
    headerInfo.forEach(element => {
        let thHeader = document.createElement('th')
        thHeader.style = 'border: 1px solid black'
        thHeader.innerText = element
        headerTr.append(thHeader)
    });
    header.append(headerTr)
    table.append(header)

    let tableInfo = Object.values(json)
    let tr = document.createElement('tr')
    tr.style = 'border: 1px solid black'
    tableInfo.forEach(element => {
        let td = document.createElement('td')
        td.style = 'border: 1px solid black'
        td.innerText = element

        if(Array.isArray(element)){
            td.innerText = 'Click button for more information'
            let buttons = element.forEach(item => {
                item = document.createElement('button')
                item.innerText = 'GO'
                td.append(item)
                item.onclick = () => element.forEach(item =>{
                fetch(item)
                .then(res => res.json())
                .then(info => jsonTable(document.body, info))
            })
            })
            
        }
        if(typeof element === 'string' && element.slice(0,4) === 'http'){
            td.innerText = 'Click button for more information'
            let button = document.createElement('button')
            button.innerText = 'GO'
            button.onclick = () =>{
                fetch(element)
                .then(res => res.json())
                .then(info => jsonTable(document.body, info))
            }
            td.append(button)
        }
        tr.append(td)
        table.append(tr)
    })
    parent.append(table)
}
const div = document.createElement('div')
document.body.append(div)
fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(luke => jsonTable(div, luke))
}
