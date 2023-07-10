const { error } = require("console");

function fetchdata(callback){
        setTimeout(() => {
            const data="Hello World !"
            callback(null ,data);
        }, 1000);
}

fetchdata((error,data)=>{
    if(error){
        console.error("Error:",error)
    }
    else{
        console.log("Data:",data)
    }
});
// function addNumbers(a, b, callback) {
//     const sum = a + b;
//     callback(null, sum); // Pass the result to the callback
//   }
  
//   function multiplyNumbers(a, b, callback) {
//     const product = a * b;
//     callback(null, product); // Pass the result to the callback
//   }
  
//   // Usage
//   addNumbers(5, 10, (error, sum) => {
//     if (error) {
//       console.error('Error:', error);
//     } else {
//       console.log('Sum:', sum);
//       multiplyNumbers(sum, 2, (error, product) => {
//         if (error) {
//           console.error('Error:', error);
//         } else {
//           console.log('Product:', product);
//         }
//       });
//     }
//   });
  