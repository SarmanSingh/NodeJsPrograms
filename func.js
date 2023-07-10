/* function helloWorld(){
	console.log("Hello World");
}
helloWorld();
*/

const sayHello = 
function(name) {
	console.log('Hello,$ {name}');
}

sayHello("John");


const multiply=(x,y)=> { 
	return x*y;
}
console.log(multiply(5,3));

/*

async function getData() {
	const data=await("https://some-api.com/data");
	console.log(data);
}
getData();


function getData(callback){
	//some async operations
	callback(data)
}
getData(function(data)){
	console.log(data);
}


*/