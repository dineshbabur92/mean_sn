var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var multipart = require("connect-multiparty");
var multipartMid = multipart();
var fs = require("fs");
var app = express();
var authController = require("./server/controllers/authController");
var editController = require("./server/controllers/editController");
var postController = require("./server/controllers/postController");
mongoose.connect("mongodb://localhost:27017/social_network");

app.use(bodyParser.json());
app.use("/app", express.static(__dirname + "/app"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/uploads", express.static(__dirname + "/uploads"));


app.get("/",function(req, res){
    
    res.sendfile("index.html");
    
});
app.get("/posts", postController.getPosts);

app.post("/signup", authController.signup);
app.post("/login", authController.login); //function(req, res){console.log("login received");});
app.post("/edit/upload_photo", multipartMid, editController.upload_photo);
app.post("/edit/upload_info", editController.upload_info);
app.post("/post", postController.postIt);

app.listen(3000, function(){
    
    console.log("listening in port 3000");
    
});