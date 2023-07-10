//Callback: TO make the program asynchronous
//Call back is a function that passes into another function as an argument
//Call backs are used in two ways: Synchronous functions and asynchronous functions
//Synchronous Functions using CallBAck
/*
function getMessage(){
    setTimeout(()=>{
        console.log("Get Message")
    },1000)
}

function displayMessage(){
    console.log("Display  Message")
}
displayMessage()
getMessage()
//Output:Display Message and then Get Message
*/

//Callback 

function getMessage(msg,callback){
    setTimeout(()=>{
        console.log(msg)
        callback()
    },1000)
}

function displayMessage(){
    console.log("Display  Message")
}
getMessage("Get Message",displayMessage)
//OUTPUT:Get Mesasge and then Display Message because here we have passed displayMessage function as call back
getMessage("Get message",()=>console.log("Display Message")) // WE can also pass arrow function in callback
