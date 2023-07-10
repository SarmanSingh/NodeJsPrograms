const os=require("os")
console.log(os.type())
console.log(os.platform())

const car=require("./ownModule.js")
//console.log(car)-> For accessing using module.exports
console.log(car.car.brand)   //For accessing without module keyword