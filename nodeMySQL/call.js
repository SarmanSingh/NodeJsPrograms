// function fetchdata(callback){
//     setTimeout(() => {
//         const data="Hello World"
//         callback(null,data)
//     }, 1000);
// }

// fetchdata((error,data)=>{
//     if(error){
//         console.error(error)
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log("Hello From the main program")

// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const data="Hello WOrld"
//             resolve(data)
//         }, 1000);
//     })
// }

// fetchdata()
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })
// console.log("Main Program")

// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const data="Hello World"
//             resolve(data);
//         }, 1000);
//     })
// }
// async function main(){
//     try{
//     const data=await fetchdata()
//     console.log(data)
// }
// catch(error){
//     console.log(error)
// }
// }

// main()
// console.log("Main Hello")

// //Even Driven program

// const EventEmitter=require('events')
// const MyEvent=new EventEmitter()

// MyEvent.on("greet",(name)=>{
//     console.log("Hello",name)
// })

// MyEvent.on("bye",()=>{
//     console.log("Bye bye")
// })

// MyEvent.emit("greet","Sarman")
// MyEvent.emit("bye")


// const express=require('express')

// const app=express()

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// app.listen(3000,()=>{
//     console.log("Server is listening port 3000")
// })

// const express = require('express');
// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Error connecting to MongoDB:', error));

// // Create a Mongoose schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number
// });

// // Create a Mongoose model
// const User = mongoose.model('User', userSchema);

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Retrieve all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Create a new user
// app.post('/users', async (req, res) => {
//   try {
//     const user = req.body;
//     const newUser = await User.create(user);
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Update an existing user
// app.put('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = req.body;
//     const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
//     if (updatedUser) {
//       res.json(updatedUser);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Delete a user
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (deletedUser) {
//       res.json({ message: 'User deleted successfully' });
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// function fact(n){
//     if(n===1 || n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }

// const n=5
// const ans=fact(n)
// console.log(ans)

// function fibo(n,memo={}){
//     if(n==1 || n==0){
//         return n
//     }
//     if(memo[n]){
//         return memo[n]
//     }
//     memo[n]= fibo(n-1,memo)+fibo(n-2,memo)
//     return memo[n]
// }

// for(let i=0;i<=50;i++){
//     const ans=fibo(i)
//     console.log(ans)    
// }

const fs = require('fs');

// Read file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Write file asynchronously
  fs.writeFile('output.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File has been written successfully.');
  });
});
console.log("We are outside reading and writing")
