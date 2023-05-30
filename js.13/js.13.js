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
    this.onChange = function(){
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


// p.onOpenChange = open => console.log(open)
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




// function Login(parent, open){
//     let loginInput = document.createElement('input')
//     let checkButton = document.createElement('button')
//     checkButton.innerText = 'GO'
//     loginInput.type = 'text'
//     this.status = open
//     parent.append(loginInput)
//     parent.append(checkButton)

//     this.getLoginValue = function(){
//         return loginInput.value
//     }
//     this.setLoginValue = function(newValue){
//         loginInput.value = newValue 

//         return loginInput.value
//     }
//     this.getCheckButton = function(){
//         return this.status
//     }
//     this.setCheckButton = function(status){   
//         this.status = status  
//         if(this.status && loginInput.value.length > 0){
//             checkButton.disabled = false
//         }else{
//             checkButton.disabled = true
//         }    
//     }
//     this.onChange = function(){       
//         return loginInput.value
//     }
//     this.onButtonChange = function(status){      
//         return status
//     }
//     loginInput.oninput = () => this.onChange(loginInput.value)
//     checkButton.onclick = () =>{
//         this.setCheckButton(!this.status)
//         this.onButtonChange(this.status)
//     }
//     this.setCheckButton(open)
// }
// const b = new Login(document.body, true)
// b.setLoginValue('')
// console.log(b.getLoginValue())    
// // passwordInput.oninput = this.onChange(passwordInput.value) = () => {
//         if(loginInput.value === "" && passwordInput.value === ""){
//             checkbox.disabled = true
//         }else{
//             checkbox.disabled = false
//         }  
        
//     // }
//     // checkbox.onclick = () =>{
//     //     this.setOpen(!this.status)
//     //     this.onOpenChange(this.status)
//     // }