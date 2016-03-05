var Post = require("../datasets/posts");
var User = require("../datasets/users");

module.exports.postIt = function(req, res){
    
    var post = {};
    post.userid = req.body.userid;
    post.content = req.body.post;
    
    User.findById(post.userid, function(err, result){
        
        if(err){ console.log(err);}
        else{
            
            console.log(result);
            post.name = result.name;
            post.image = result.image;
            
            new Post(post).save(function(err){
                
                if(err){
                    
                    console.log(err);
                }
                else{
                    //console.log("post successful");
                    Post.find({})
                        .sort({ timestamp: -1})
                        .exec(function(err, results){
                        
                        //console.log(results);
                        //console.log(res);
                        res.json(results);
                        
                    });
                }
                
            });
            
        }
        
    });
    
    
};

module.exports.getPosts = function(req, res){
    
    Post.find({})
        .sort({timestamp: -1})
        .exec(function(err, posts){
        if(err){
            
            console.log(err);
            
        }
        res.json(posts);
        
    });
    
    
}; 