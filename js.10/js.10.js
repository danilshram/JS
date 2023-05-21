{
function farenheit(celcius){
    let degrees = (celcius*1.8) + 32
    return degrees
}
farenheit(50)
}
{
    function secrets(rightLogin, rightPassword){
        let login = prompt('Введіть логін')
        let password = prompt('Введіть пароль')
        if(login !== rightLogin && password !== rightPassword){
            alert (`false`)
        }else {
            alert(`true`)
        }
        return {login, password}
    }
    secrets('admin','qwerty')
}
{
    function filterLexic(str, badWords){
        str = str.split(' ')
        let str2 = string.filter(x=> !badWords.includes(x))
        str2 = str2.toString()
        return str2
 }
}
{
    function color(r, g, b){
        let rgb = "#" + (r < 16 ? "0" + r.toString(16) : r.toString(16)) + (g < 16 ? "0" + g.toString(16) : g.toString(16)) + (b < 16 ? "0" + b.toString(16) : b.toString(16));
        return rgb
    }
}
{
    function capitalize(){
        let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
        let name = prompt ("Введіть ім'я");
        let surname = prompt ("Введіть прізвище");
        let fatherName = prompt ("Введіть ім'я по-батьковій");
        let fullName = name + " " + surname + " " + fatherName
        return {name:result(name), surname:result(surname), fatherName:result(fatherName), fullName:result(fullName)}
    }
    capitalize()
}
{
    function createPerson(name,surname){
        return {
            name,
            surname,
            getFullName: function (){
                return `${this.name} ${this.surname} ${this.fatherName}`
            }
            }
        }
}
{
    function createPersonClosure(name, surname){
        let age 
        let fatherName
        
        function getName (){
            return name
        }
        function getSurname (){
            return surname
        }
        function getAge (){
            return age
        }
        function getFatherName(){
            return fatherName
        }
        function getFullName (){
            return `${name} ${surname} ${fatherName}`
        }
        function setName (newName){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newName) === newName){
                name = newName
                return name
            } else{
                return name
            }
        }
        function setSurname (newSurname){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newSurname) === newSurname){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }
        function setFatherName (newFatherName){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newFatherName) = newFatherName){
                fatherName = newFatherName 
                return fatherName
            }else{
                return fatherName
            }
        }
        function setAge (newAge){
            if(newAge >= 0 && newAge<= 100){
                age = newAge
                return age
            }else{
                return undefined
            }
        }
        function setFullName (newFullName){
            let partsOfFullName = newFullName.split(" ")
            surname = partsOfFullName[0]
            name = partsOfFullName[1]
            fatherName = partsOfFullName[2]
            return `${surname} ${name} ${fatherName}`
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
          }
    }
}

    function createPersonClosureDestruct(person){
        let{name, surname, fatherName, age} = person
        function getName (){
            return name
        }
        function getSurname (){
            return surname
        }
        function getAge (){
            return age
        }
        function getFatherName(){
            return fatherName
        }
        function getFullName (){
            return `${surname} ${name} ${fatherName}`
        }
        function setName (newName){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newName) === newName){
                name = newName
                return name
            }else{
                return name
            }
        }
        function setSurname (newSurname){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newSurname) === newSurname){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }
        function setFatherName (newFatherName){
            let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
            if(result(newFatherName) === newFatherName){
                fatherName = newFatherName 
                return fatherName
            }else{
                return fatherName
            }
        }
        function setAge (newAge){
            if(newAge >= 0 && newAge<= 100){
                age = newAge
                return age
            }else{
                return undefined
            }
        }
        function setFullName (newFullName){
            let partsOfFullName = newFullName.split(" ")
            surname = partsOfFullName[0]
            name = partsOfFullName[1]
            fatherName = partsOfFullName[2]
            return `${surname} ${name} ${fatherName}`
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
          }
    }

{
    function isSorted (...params){
            for(let i = 1; i<params.length;i++){
            if(typeof params[i] !== "number" || params[i] <= params[i-1]){
                return false
            }
        }
        return true
    }
}
{
    let arr = []
    let arr2 = []
    let numbers 
    while(numbers = +prompt("Введіть шось")) {
        arr2 = arr.push(numbers)
    }
    function isSorted (...params){
        for(let i = 1; i<params.length;i++){
        if(typeof params[i] !== "number" || params[i] <= params[i-1]){
            return false
        }
    }
    return true
}
    let sortArr = arr.sort((a, b) => a - b)
    isSorted(sortArr)
    console.log(sortArr)
}      
// Доповнив задання функцією яка сортує отриманий масив

function createPersonClosureDestruct(person){
    let{name, surname, fatherName, age} = person
    function getName (){
        return name
    }
    function getSurname (){
        return surname
    }
    function getAge (){
        return age
    }
    function getFatherName(){
        return fatherName
    }
    function getFullName (){
        return `${surname} ${name} ${fatherName}`
    }
    function setName (newName){
        let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
        if(result(newName) === newName){
            name = newName
            return name
        }else{
            return name
        }
    }
    function setSurname (newSurname){
        let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
        if(result(newSurname) === newSurname){
            surname = newSurname
            return surname
        }else{
            return surname
        }
    }
    function setFatherName (newFatherName){
        let result =(x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()
        if(result(newFatherName) === newFatherName){
            fatherName = newFatherName 
            return fatherName
        }else{
            return fatherName
        }
    }
    function setAge (newAge){
        if(newAge >= 0 && newAge<= 100){
            age = newAge
            return age
        }else{
            return undefined
        }
    }
    function setFullName (newFullName){
        let partsOfFullName = newFullName.split(" ")
        surname = partsOfFullName[0]
        name = partsOfFullName[1]
        fatherName = partsOfFullName[2]
        return `${surname} ${name} ${fatherName}`
    }
    return {
        getName,
        getSurname,
        getFatherName,
        getAge,
        getFullName,
        setName,
        setSurname,
        setFatherName,
        setAge,
        setFullName,
      }
}
    const b = createPersonClosureDestruct("Ганна", "Іванова")
    b.setAge(15)
    b.setFullName("Петрова Ганна Миколаївна")

    function personForm(parent, person){
        let nameInput = document.createElement('input')
        let surnameInput = document.createElement('input')
        let fatherNameInput = document.createElement('input')
        let fullNameInput = document.createElement('input')
        let ageInput = document.createElement('input')
        nameInput.value = person.getName()
        surnameInput.value = person.getSurname()
        fatherNameInput.value = person.getFatherName()
        fullNameInput.value = person.getFullName()
        ageInput.value = person.getAge()
        parent.appendChild(nameInput)
        parent.appendChild(surnameInput)
        parent.appendChild(fatherNameInput)
        parent.appendChild(ageInput)
        parent.appendChild(fullNameInput)


        nameInput.oninput = () => {
            nameInput.value = person.setName(nameInput.value)
            fullNameInput.value = person.getFullName()
        }
        surnameInput.oninput = () => {
            surnameInput.value = person.setSurname(surnameInput.value)
            fullNameInput.value = person.getFullName()
        }
        fatherNameInput.oninput = () => {
            fatherNameInput.value = person.setFatherName(fatherNameInput.value)
            fullNameInput.value = person.getFullName()
        }
        fullNameInput.oninput = () =>{
            fullNameInput.value = person.setFullName(fullNameInput.value)
            nameInput.value = person.getName()
            surnameInput.value = person.getSurname()
            fatherNameInput.value = person.getFatherName()
        }
        ageInput.type = 'number'
        ageInput.oninput = () => {
            ageInput.value = person.setAge(ageInput.value)
        }
}

personForm(document.body, b);

    function getSetForm(parent, getSet){
        const inputs = {} 
        const updateInputs = () => { 
            for(let fieldName in inputs){
                let input = inputs[fieldName]
                const getKey    = `get` + fieldName
                let value = getSet[getKey]()
                if(value){
                input.value = value
                }
            }
        }
        
        for (const getSetName in getSet){
            const getOrSet = getSetName.startsWith('get')
            const fieldName = getSetName.slice(3)
            const getKey    = `get` + fieldName
            const setKey    = `set` + fieldName
            let getValue = getSet[getKey]()
            const input = document.createElement('input')
            input.placeholder = fieldName
            input.type = (typeof getValue === 'number') ? 'number' : 'text'
            if(getValue && getOrSet && setKey && getKey){
                input.value = getValue
            }
            input.oninput = function(){
                const setKey    = `set` + fieldName
                let setValue = getSet[setKey]
                if(setValue){
                    setValue(input.value)
                    updateInputs()
                }
                } 
            inputs[fieldName] = input
            parent.appendChild(input)
        }
        updateInputs()
    }    

    let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}
getSetForm(document.body, car)