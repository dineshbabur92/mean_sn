var User = require("../datasets/users");
//var fs = require("fs");
var mv = require("mv");
var path = require("path");

module.exports.upload_photo = function(req, res){
    
    var file = req.files.file;
    var userid = req.body.userid;
    
//    console.log("going to log file and userid");
//    console.log(req);
//    console.log("file================",file);
//    console.log("req.body============",req.body);
//    console.log(userid);
    
    var currTS = new Date().getTime().toString();
    var target = path.join(__dirname+"\\..\\..\\uploads\\"+currTS+"_"+file.originalFilename);
    var relImageUrl = "/uploads/"+currTS+"_"+file.originalFilename;
    
//    console.log(target);
    
//    fs.rename
    mv(file.path, target, function(err){
        
        if(err){console.log(err);}
        else{
            console.log("upload successful");
        }
        
    });
    
    User.findById(userid, function(err, result){
        
       
//        console.log(results);
        result.image = relImageUrl;
        result.save(function(err){
                if(err){
                    console.log(err);
                    res.json({status: 500});
                }
                else {
                    console.log("update successful");
                    res.json({status: 200});
                }
        });
        
    });
    
    
};


module.exports.upload_info = function(req, res){
    
    var userid = req.body.userid;
    var name = req.body.name;
    var bio = req.body.bio;
    
//    console.log(name);
//    console.log(bio);
    
    User.findById(userid, function(err, result){
        
        result.name = name;
        result.bio = bio;
        
        result.save(function(err){
            
            if(err){
                console.log(err);
                res.json({status: 500});
            }
            else{
                
                console.log("update successful");
                res.json({status: 200});
            }
            
        });
        
    });
    
};