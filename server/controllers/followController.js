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

module.exports.followUser = function(req, res){
    
    var following = req.body.following;
    var follower = req.body.follower;
    
    User.findById(follower, function(err, user){
        
        user.following.push(following);
        user.save();
        
    });
    
    User.findById(following, function(err, user){
        
        user.followers.push(follower);
        user.save();
        res.json({status: 200});
        
    });
    
    
    
};