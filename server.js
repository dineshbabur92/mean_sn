var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
var authController = require(controllers/authController);

mongoose.connect("mongodb://localhost:27017/social_network");


app.use("/app", express.static(__dirname + "/app"));
//app.use("/node_modules", express.static(__dirname + "/node_modules"));


app.get("/",function(req, res){
    
    res.sendfile("index.html");
    
});

app.post("/signup", authenticationController.signup);

app.listen(3000, function(){
    
    console.log("listening in port 3000");
    
});