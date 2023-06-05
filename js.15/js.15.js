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

{
    function delay(ms){
        function executor(fulfill, reject){ 
            setTimeout(() => fulfill(ms), (ms = Math.random() * ms))
        }
        return new Promise(executor)
   }
   let promiseA = fetch("https://swapi.dev/api/people/2/").then(res => res.json()).then(info => console.log(info))
   let promiseB = delay(100).then(time => console.log(`"Пройшло :${time.toFixed(3)} мілісекунд"`))
   Promise.race([promiseA, promiseB]).then(result => console.log(result))
}

{
    function confirmPromise(text){
        return new Promise((fullfil, reject) => {
            let result = confirm(text)
            if(result){
                fullfil()
            }else{
                reject()
            }
   })
}
   confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
                                            () => console.log('respect за посидючість і уважність'))
}

{
    function promptPromise(text){
        return new Promise((fullfil,reject) => {
            let result = prompt(text)
            if(result){
                fullfil(result)
            }else{
                reject()
            }
        })
    }
    promptPromise("Как тебя зовут?").then(name => console.log(`Тебя зовут ${name}`), 
                                      () => console.log('Ну зачем морозиться, нормально же общались'))
}

{
    function LoginPassword(parent, open){
        let loginInput = document.createElement('input')
        let passwordInput = document.createElement('input')
        let checkButton = document.createElement('button')
        checkButton.innerText = 'GO'
        checkButton.disabled = true
        loginInput.type = 'text'
        this.status = open
        parent.append(loginInput)
        parent.append(passwordInput)
        parent.append(checkButton)
    
        this.getLoginValue = function(){
            return loginInput.value
        }
        this.getPasswordValue = function(){
            return passwordInput.value
        }
        this.setLoginValue = function(newValue){
            loginInput.value = newValue 
            return loginInput.value
        }
        this.setPasswordValue = function(newValue){
            return passwordInput.value = newValue
        }
        this.getCheckButton = function(){
            return this.status
        }
        this.setCheckButton = function(status){   
            return this.status = status  
        }
        this.onChange = function(){         
            return loginInput.value
        }
        this.onChange2 = function(){
            return passwordInput.value
        }
        this.onButtonChange = function(status){      
            return status 
        }
        loginInput.oninput = () =>{
           this.onChange(loginInput.value)
           return Promise.resolve({login: loginInput.value, password : passwordInput.value})
           .then(({login,password}) => console.log(`Ви ввели ${login} та ${password}`))
        }
        passwordInput.oninput = () => {
            this.onChange2(passwordInput.value)    
            if(loginInput.value !== "" && passwordInput.value !==""){
                checkButton.disabled = false
             }else{
                 checkButton.disabled = true
            }
            return Promise.resolve({login: loginInput.value, password : passwordInput.value})
           .then(({login,password}) => console.log(`Ви ввели ${login} та ${password}`))
         }
        checkButton.onclick = () =>{
            this.setCheckButton(!this.status)
            this.onButtonChange(this.status)
        }
        this.setCheckButton(open)
 }
 function loginPromise(parent){
    function executor(resolve, reject){
        const form = new LoginPassword(parent)
        if(form){
            resolve(form.getLoginValue(), form.getPasswordValue()) 
        }else{
            reject()
        }
    }
    return new Promise(executor)
}
loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))
}