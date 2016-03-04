var User = require("../datasets/users");


module.exports.upload_photo = function(req, res){
    
    var file = req.body.file;
    var userid = req.body.userid;
    
    console.log(file);
    console.log(userid);
    
    //insert fs operations here
    
    user.find({"userid": userid}, function(err, results){
        
      //update image url  
        
    })
    
    
};


module.exports.upload_info = function(req, res){
    
    var name = req.body.name;
    var bio = req.body.bio;
    
    console.log(name);
    console.log(bio);
    
    user.find({"userid": userid}, function(err, results){
        
      //update name and bio  
        
    })
    
};