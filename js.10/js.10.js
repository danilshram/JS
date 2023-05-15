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
{
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
}
{
    function isSorted (...params){
        for(numbers of params){
            let i = 0
            i++
            if(typeof numbers === "number" && params[i] < params [i + 1] ){
                return true
            }
            return false
        }
    }
}