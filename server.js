var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var multipart = require("./manual/multipart");
var multipartMid = multipart();
//var fs = require("fs");
var app = express();
var authController = require("./server/controllers/authController");
var editController = require("./serever/controllers/editContrller");
mongoose.connect("mongodb://localhost:27017/social_network");


app.use("/app", express.static(__dirname + "/app"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

app.get("/",function(req, res){
    
    res.sendfile("index.html");
    
});

app.post("/signup", authController.signup);
app.post("/login", authController.login); //function(req, res){console.log("login received");});
app.post("/edit/upload_photo", multipartMid, editController.upload_photo);

app.post("edit/upload_info", editController.update_info);

app.listen(3000, function(){
    
    console.log("listening in port 3000");
    
});;''