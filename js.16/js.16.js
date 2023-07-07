function jsonPost(url,data){
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(result => result.json())
}

const mainDiv = document.createElement('div')
const textArea = document.createElement('textarea')
const sendButton = document.createElement('button')
sendButton.innerText = 'Відправити'
textArea.placeholder = 'Напишіть повідомлення'

async function sendMessage(nick, message){
    try{
        const response = await jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: nick, message: message})
    }catch(e){
        alert("Помилка при висиланні повідомлення", e)
    }
}
document.body.append(mainDiv)
mainDiv.append(textArea)
mainDiv.append(sendButton)
let nextMessageId = 0;

async function getMessages() {
    try{
    const messages = await jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId: nextMessageId })
    const { data, nextMessageId: newNextMessageId } = messages
    const messageDiv = document.createElement('div')
    messageDiv.innerHTML = ''
    for (const elements of data) {
        const { nick, message, timestamp } = elements
        messageDiv.style = 'border: 1px solid black'
        const nickText = document.createElement('p')
        nickText.style = 'font-weight: bold'
        nickText.innerText = "nick:" + " " + nick
        const messageText = document.createElement('p')
        const time = new Date(timestamp)
        messageText.innerText = message + " " + time.toString()
        messageDiv.append(nickText)
        messageDiv.append(messageText)
        document.body.append(messageDiv)
    }
    if(nextMessageId === 0){
        messageDiv.innerHTML = ''
    }
    nextMessageId = newNextMessageId;
    }catch(e){
        alert("Помилка при завантажені нових повідомлень" + e)
    }
}
async function sendAndCheck(){
    const nick = "Danya"
    const message = textArea.value
    await sendMessage(nick, message)
    await getMessages()
}

function delay(ms){
    function executor(fulfill, reject){ 
        setTimeout(() => fulfill(ms), ms)
    }
    return new Promise(executor)
}
async function checkLoop(){
    while(true){
        await getMessages()
        await delay(2000)
    }
}
sendButton.onclick = () => {
    sendAndCheck()
    textArea.value = ''
}
checkLoop()


function swapiLinks(url){
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const promises = []
            for(value of Object.values(data)){
                if(Array.isArray(value)){
                    value.forEach(element => {
                        let promise = fetch(element,{
                            method: 'GET',
                            headers: {
                                "Content-type": 'application/json'
                            }
                        })
                        .then(res => res.json())
                        promises.push(promise)
                    })   
                }else if(typeof value === 'string' && value.includes('https')){
                    let promise = fetch(url,{
                        method: 'GET',
                        headers: {
                            "Content-type": 'application/json'
                        }
                    })
                    .then(res => res.json())
                    promises.push(promise)
                }
        }
        return Promise.all(promises)
        .then(res => {
            Object.values(data).forEach((value, index) => {
                if(Array.isArray(value)){
                    value.forEach((_, i)=>{
                        data[Object.keys(data)[index]][i] = res.shift()
                    })
                }else if(typeof value === 'string' && value.includes('https')){
                    data[Object.keys(data)[index]] = res.shift()
                }
            })
            return data
        })
    })
}
const adress =  "https://swapi.dev/api/people/20"
swapiLinks(adress).then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))


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
let knopka = document.createElement('button')
knopka.innerText = 'click'
document.body.append(knopka)

domEventPromise(knopka, 'click').then( e => console.log('event click happens', e))