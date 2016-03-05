var User = require("../datasets/users");

module.exports.getUsers = function(req, res){
    
    User.find({}, function(err, users){
        
        if(err){
            
            console.log(err);
            
        }
        else{
            
            res.json(users);
            
        }
        
    });
    
};