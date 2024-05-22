const http = require ("http");
const url = require("url");
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: New request received`
    fs.appendFile('log.book',log,(err,data)=>{
        if(req.url == "/about"){
            res.end ("its a about page")
        }
        else if(req.url == "/contact"){
            res.end("its a contact page")
        }
        else{
            res.end("404 NOT FOUND")
        }
    })
});

myserver.listen(8000,()=> console.log('server started'));