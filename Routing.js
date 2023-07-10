//Performing tasks on a particular path is called routing
//if(req.url="example/path/her")
//response()
/*
const http=require("http")

function index(request,response){
    response.writeHead(200)
    response.end("Node Routing")
}

function aboutUs(request,response){
    response.writeHead(200)
    response.end("About Us Page")
}
http.createServer(function(req,res){
    if(req.url=='/'){
        return index(req,res)
    }
    if(req.url=='/aboutUs'){
        return aboutUs(req,res)
    }
}).listen(8080)
*/
const http=require("http")
const { url } = require("inspector")
const route={
    '/':function index(request,response){
        response.writeHead(200)
        response.end("Node Routing")},
    '/aboutUs':function aboutUs(request,response){
        response.writeHead(200)
        response.end("About Us Page")
    }


}
http.createServer(function(req,res){
    if(req.url in route){
        return route[req.url](req,res)
    }

}).listen(8080)
