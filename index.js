const http = require('http')

const port = 8000;
const fs = require('fs')

http.createServer((req,res) => {
    let fileName = "";
    switch(req.url){

        case "/":
            fileName = "home.html";
            break;

        case "/about":
            fileName = "about.html";
            break;

        case "/contact":
            fileName = "contact.html";
            break;

        case "/product":
            fileName = "product.html";
            break;
    }
    fs.readFile(fileName,(err,result) => {
        if(err){
            console.log("File not found");
            return false;
        }
        res.end(result);
    })
}).listen(port)