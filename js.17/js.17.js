{
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
    
    async function trafficLight(){        
        let div = document.createElement('div')
        document.body.append(div)
        while (true){
            div.style = 'background-color: green; height: 100px'
            await delay(2000)
            div.style = 'background-color: yellow; height: 100px'
            await delay(2000)
            div.style = 'background-color: red; height: 100px'
            await delay(2000)
        }
    }
    trafficLight()
}
{
    async function trafficLight(parent, ms){        
        while (true){
            parent.style = 'background-color: green; height: 100px'
            await delay(2000)
            parent.style = 'background-color: yellow; height: 100px'
            await delay(2000)
            parent.style = 'background-color: red; height: 100px'
            await delay(2000)
        }
    }    
    let div = document.createElement('div')
    document.body.append(div)
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
    trafficLight(div, delay(2000))
}
{
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
    function domEventPromise(element, eventName){
        function executor(resolve){
            function eventSetting(event){
                element.removeEventListener(eventName,eventSetting)
                resolve(event)
            }
            return element.addEventListener(eventName, eventSetting)
        }
        return new Promise(executor)
    }
    async function pedestrianTrafficLight(){
        const greenDiv = document.createElement('div')
        const redDiv = document.createElement('div')
        greenDiv.innerText = 'GO'
        redDiv.innerText = 'STOP'
        document.body.append(greenDiv)
        document.body.append(redDiv)
        const button = document.createElement('button')
        button.innerText = 'CHANGE'
        document.body.append(button)
        
        while(true){
            let greenPromise = () => {
                greenDiv.style = 'background-color: green; height: 100px'
                redDiv.style = 'background-color: transparent; height: 100px'
            }
            let redPromise = () => {
                greenDiv.style = 'background-color: transparent; height:100px'
                redDiv.style = 'background-color: red; height: 100px'
            }
            const changePromise = domEventPromise(button, 'click')
            await Promise.race([changePromise, delay(4000)])
        }
    }
    pedestrianTrafficLight()
}

function jwtDecode(token){ 
    try{
        let tokenParts = token.split('.')
        let tokenSecondPart = tokenParts[1]
        let tokenJSON = atob(tokenSecondPart)
        let normalToken = JSON.parse(tokenJSON)
        return normalToken
    }
    catch(e){
        return undefined
    }
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 
