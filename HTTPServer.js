/*
const http=require("http")
const hostname="127.0.0.1"
const port="8080"
const server=http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader("Content-Type","text/plain")
	res.end("WELCOME TO HTTP SERVER")
})
server.listen(port,hostname,()=>{
	console.log('Server Running at http://$(hostname):$(port)/')
})

*/
const http=require("http")
const hostname="127.0.0.1"
const port="8080"
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"plain/text"})
	res.write("WELCOME TO HTTP SERVER")
	res.end("WELCOME TO HTTP SERVER")
}).listen(port,hostname,()=>{
	console.log('Server Running at http://$(hostname):$(port)/')
})