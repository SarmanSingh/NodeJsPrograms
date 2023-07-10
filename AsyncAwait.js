//Higher level of promises
//Promises were tough and complex
/*
function clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Hello")
        },2000)
    })
}
function msg(){
    const msg=clown()
    console.log("Message",msg)
}
msg()
//OUTPUT:Message Promise { <pending> } Which we dont want
*/
/*
function clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Hello")
        },2000)
    })
}
async function msg(){
    const msg=await clown()
    console.log("Message",msg)
}
msg()
//We will get our output after 2 seconds as Message:Hello
function getAfter(){
    console.log("Get After")
}
getAfter()
//Output will be Get After and after senconds Message:Hello
*/
function clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Hello")
        },2000)
    })
}
async function msg(callback){
    const msg=await clown()
    console.log("Message",msg)
    callback()
}
function getAfter(){
    console.log("Get After")
}
msg(getAfter)

