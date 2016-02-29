var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

app.get("/",function(req, res){
    
    res.sendFile("../index.html");
    
});

app.listen(3000, function(){
    
    console.log("listening in port 3000");
    
});