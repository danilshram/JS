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
    let loginInput = document.createElement('input')
    checkbox.innerText = open ? 'Hide' : 'Show'
    this.status = open
    loginInput.type = 'text'
    parent.append(passwordInput)
    parent.append(loginInput)
    parent.append(checkbox)

    this.getValue = function(){
        return passwordInput.value, loginInput.value
    }
    this.setValue = function(newValue = "" , newValue2 = "" ) {
        passwordInput.value = newValue
        loginInput.value = newValue2
        return passwordInput.value, loginInput.value
    }
    this.getOpen = function(){
        return this.status
    } 
    this.setOpen = function(status) {
        this.status = status
        if(this.status){
            passwordInput.type = 'text'
        }else{
            passwordInput.type = 'password'
        }
        checkbox.innerText = this.status ? 'Hide' : 'Show'
    }
    if(typeof this.onChange === 'function'){
        this.onChange(passwordInput.value)
    }
    if(typeof this.onChange2 === 'function'){
        this.onChange2(loginInput.value)
    }
    if(typeof this.onOpenChange === 'function'){
        this.onOpenChange(this.status)
    }
    passwordInput.oninput = this.onChange(passwordInput.value) = () => {
        if(loginInput.value === "" && passwordInput.value === ""){
            checkbox.disabled = true
        }else{
            checkbox.disabled = false
        }  
        
    }
    loginInput.oninput =  this.onChange2(loginInput.value)= () => {
        if(loginInput.value === "" && passwordInput.value === ""){
            checkbox.disabled = true
        }else{
            checkbox.disabled = false
        } 
    }
    checkbox.onclick = () =>{
        this.setOpen(!this.status)
        this.onOpenChange(this.status)
    }
    this.setOpen(open)

}

let p = new Password(document.body, true)

p.onChange = data => console.log(data)  //буде корисно при виконаннi LoginForm та Password Verify
p.onOpenChange = open => console.log(open)

p.setValue('qwerty')
console.log(p.getValue())

p.setOpen(false)
console.log(p.getOpen())

function Login(parent, open){
    let loginInput = document.createElement('input')
    let checkButton = document.createElement('button')
    checkButton.innerText = 'GO'
    loginInput.type = 'text'
    this.status = open
    parent.append(loginInput)
    parent.append(checkButton)

    this.getLoginValue = function(){
        return loginInput.value
    }
    this.setLoginValue = function(newValue){
        loginInput.value = newValue 

        return loginInput.value
    }
    this.getCheckButton = function(){
        return this.status
    }
    this.setCheckButton = function(status){   
        this.status = status  
        if(this.status && loginInput.value.length > 0){
            checkButton.disabled = false
        }else{
            checkButton.disabled = true
        }    
    }
    this.onChange = function(){       
        return loginInput.value
    }
    this.onButtonChange = function(status){      
        return status
    }
    loginInput.oninput = () => this.onChange(loginInput.value)
    checkButton.onclick = () =>{
        this.setCheckButton(!this.status)
        this.onButtonChange(this.status)
    }
    this.setCheckButton(open)
}
const b = new Login(document.body, true)
b.setLoginValue('')
console.log(b.getLoginValue())