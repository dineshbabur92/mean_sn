var user = require("../datasets/users");

module.exports.signup = function(req, res){
    
    console.log("inside signup");
    var u = new user(req.body);
    u.save();
    
    res.send(req.body);
     
    
};

module.exports.login = function(req, res){
    
    console.log("server login initiated");
    user.find(req.body, function(err, results){
        
        if(err){
            
            console.log(err);
            
        }
        if(results && results.length>0){
            
            res.send(req.body.email);
            console.log("sent email");
            
        }
        
    });
    
};