//Creating promises
/*let promise=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Run before"),1000)
})
promise.then(
    result=>{
        console.log(result)
    },
    error=>console.log(error)
)
*/
/*
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("Whoops")),1000)
})
promise.then(
    result=>{
        console.log(result)
    },
    error=>console.log(error)
)
*/
/*
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Run before"),1000)
})
promise.then(
    result=>{
        console.log(result)
    },
    error=>console.log(error)
)
function getAfter(){
    console.log("Get After")
}
getAfter()
//Output:Get After and then run before
*/

let promise=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Run before"),1000)
})
promise.then(
    result=>{
        console.log(result)
        getAfter()
    },
    error=>console.log(error)
)
function getAfter(){
    console.log("Get After")
}
//Output: Run Before and then Get after: This is how we resolve async case with promises
