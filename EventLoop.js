//Event Loop

const bar=()=>console.log("Bar")
const baz=()=> console.log("Baz")
/* const foo=()=>{
    console.log("fooooo")
    bar()
    baz()
}
foo()
*/
//Event loop continuosly checks call stack and maintains the orderr
//OUTPUT= foooo,Bar,Bar
// All the functions causing delay will run at the end. To solve this problem we have promises and callbacks

const loo=()=>{
    bar()
    setTimeout(bar,1000)
    baz()
}
loo()
//OUTPUT will be  Bar Baz and then Bar
