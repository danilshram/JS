function Person(name,surname){
        this.name = name,
        this.surname = surname,
        this.getFullName = () => {
            return this.name + " " + this.surname + " " + this.fatherName
        }
}
function Person(name,surname){
    this.name = name
    this.surname = surname
}
Person.prototype.getFullName = function (){
    return this.name + " " + this.surname + " " + this.fatherName 
}



function Password(parent, open){
    let passwordInput = document.createElement('input')
    let checkbox = document.createElement('button')
    checkbox.innerText = open ? 'Hide' : 'Show'
    this.status = open
    parent.append(passwordInput)
    parent.append(checkbox)

    this.getValue = function(){
        return passwordInput.value
    }
    this.setValue = function(newValue) {
        passwordInput.value = newValue
        return passwordInput.value
    }
    this.getOpen = function(){
        return this.status
    } 
    this.setOpen = function(status) {
        this.status = status
        if(this.status){
            passwordInput.type = 'text'
            checkbox.innerText = 'Hide'
        }else{
            passwordInput.type = 'password'
            checkbox.innerText = 'Show'
        }
    }
    this.onChange = () => {
        return passwordInput.value
    }
    this.onOpenChange = function(){
        return this.status
    }
    passwordInput.oninput = function() {
        this.onChange(passwordInput.value)
    }
    checkbox.onclick = () =>{
        this.setOpen(!this.status)
        this.onOpenChange(this.status)
    }
    this.setOpen(open)
}


p.setValue('qwerty')
console.log(p.getValue())
p.setOpen(false)
console.log(p.getOpen())


function Password(parent, open){
    let passwordInput = document.createElement('input')
    let checkbox = document.createElement('button')
    checkbox.innerText = open ? 'Hide' : 'Show'
    this.status = open
    parent.append(passwordInput)
    parent.append(checkbox)

    this.getValue = function(){
        return passwordInput.value
    }
    this.setValue = function(newValue) {
        passwordInput.value = newValue
        return passwordInput.value
    }
    this.getOpen = function(){
        return this.status
    } 
    this.setOpen = function(status) {
        this.status = status
        if(this.status){
            passwordInput.type = 'text'
            checkbox.innerText = 'Hide'
        }else{
            passwordInput.type = 'password'
            checkbox.innerText = 'Show'
        }
    }
    this.onChange = () => {
        passwordInput.value
    }
    this.onOpenChange = function(){
        return this.status
    }
    passwordInput.oninput = () => {
        this.onChange(passwordInput.value)
    }
    checkbox.onclick = () =>{
        this.setOpen(!this.status)
        this.onOpenChange(this.status)
    }
    this.setOpen(open)
}
let div = document.createElement("div")
document.body.append(div)
let loginInput = document.createElement("input")
div.append(loginInput)
let p = new Password(div, true)
let loginButton = document.createElement("button")
loginButton.disabled = true
div.append(loginButton)
loginButton.innerText = "GO"

loginInput.oninput = p.onChange = () => {
    if(loginInput.value !== "" && p.getValue().length > 0){
        loginButton.disabled = false
    }else{
        loginButton.disabled = true
    }
}


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
     }
     passwordInput.oninput = () => {
        this.onChange2(passwordInput.value)    
        if(loginInput.value !== "" && passwordInput.value !==""){
            checkButton.disabled = false
         }else{
             checkButton.disabled = true
         }
     }
    checkButton.onclick = () =>{
        this.setCheckButton(!this.status)
        this.onButtonChange(this.status)
    }
    this.setCheckButton(open)
    }
const b = new LoginPassword(document.body, true)
b.setLoginValue('')
console.log(b.getLoginValue())    





function PasswordVerify(parent){
    let passwordInput = document.createElement('input')
    let checkbox = document.createElement('button') 
    checkbox.innerText = open ? 'Hide' : 'Show'
    let checkPasswordInput = document.createElement('input')
    checkPasswordInput.type = 'password'
    checkPasswordInput.style.display = 'initial'

    this.status = false
    parent.append(passwordInput)
    parent.append(checkPasswordInput)
    parent.append(checkbox)

    this.getValue = function(){
        return passwordInput.value
    }
    this.getCheckValue = function(){
        return checkPasswordInput.value
    }
    this.setValue = function(newValue) {
        passwordInput.value = newValue
        return passwordInput.value
    }    
    this.setCheckValue = function(newValue){
        return checkPasswordInput.value = newValue
    }
    this.getOpen = function(){
        return this.status
    } 
    this.setOpen = function(status) {
        this.status = status
        if(this.status){
            passwordInput.type = 'text'
            checkbox.innerText = 'Hide'
        }else{
            passwordInput.type = 'password'
            checkbox.innerText = 'Show'
        }
    }
    this.setStyle = (style,style2) => {
        passwordInput.style.borderColor = style
        checkPasswordInput.style.borderColor = style2
    }
    this.onChange = () => {
        passwordInput.value
    }
    this.onChange2 = () =>{
        checkPasswordInput.value
    }
    this.onOpenChange = function(){
        return this.status
    }
    checkPasswordInput.oninput = () =>{
        this.onChange2(checkPasswordInput.value)
        if(checkPasswordInput.value !== passwordInput.value){
            this.setStyle('red', 'red')
        }else{
            this.setStyle('black','black')
        }  
    }
    passwordInput.oninput = () => {
        this.onChange(passwordInput.value)
        if(passwordInput.value !== checkPasswordInput.value){
        this.setStyle('red', 'red')
        }else{
        this.setStyle('black','black')
        }   
    }
    checkbox.onclick = () =>{        
        if(!this.status){
            checkPasswordInput.style.display = 'none'
        }else{
            checkPasswordInput.style.display = 'initial'
        }    
        this.setOpen(!this.status)
        this.onOpenChange(this.status)

    }
    this.setOpen(this.status)
}
let newDiv = document.createElement('div')
document.body.append(newDiv)
const password = new PasswordVerify(newDiv,true)
