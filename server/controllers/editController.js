var User = require("../datasets/users");
//var fs = require("fs");
var mv = require("mv");
var path = require("path");

module.exports.upload_photo = function(req, res){
    
    var file = req.files.file;
    var userid = req.body.userid;
    console.log("going to log file and userid");
    console.log(req);
    console.log("file================",file);
    console.log("req.body============",req.body);
    console.log(userid);
    
    var target = path.join(__dirname+"\\..\\uploads\\"+new Date().getTime().toString()+"_"+file.originalFilename);
    console.log(target);
    //insert fs operations here
//    fs.rename
    mv(file.path, target, function(err){
        
        if(err){console.log(err);}
        else{
            console.log("upload successful");
        }
        
    });
    
    User.findById(userid, function(err, results){
        
      //update image url 
        console.log(results);
        results.image = target;
        results.save(function(err){
                if(err){console.log(err);}
                else {console.log("update successful");}
        });
       // if(results && results.length )
        
    });
    
    
};


module.exports.upload_info = function(req, res){
    
    var name = req.body.name;
    var bio = req.body.bio;
    
    console.log(name);
    console.log(bio);
    
    user.find({"userid": userid}, function(err, results){
        
      //update name and bio  
        
    });
    
};