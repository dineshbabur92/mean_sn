var Post = require("../datasets/posts");
var User = require("../datasets/users");

module.exports.postIt = function(req, res){
    
    var post = {};
    post.userid = req.body.userid;
    post.content = req.body.post;
    
    User.findById(post.userid, function(err, result){
        
        if(err){ console.log(err);}
        else{
            
           // console.log(result);
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
    //console.log("getposts request body===============",req.query);
    var ids = [];
    if(req.query.userid){
        User.findById(req.query.userid, function(err, user){
            if(err){

                console.log(err);

            }
            //console.log("following==========", user.following);
            for(var i =0; i< user.following.length;i++){

                ids.push(user.following[i]._id);

            }
             ids.push(req.query.userid);
            //console.log("after===========", ids);

        }).then(function(resp){

                Post.find({userid: { $in: ids}})
                    .sort({timestamp: -1})
                    .exec(function(err, results){

                   res.json(results); 

                });

        });
    }
    else{
        
        Post.find({})
            .sort({timestamp: -1})
            .exec(function(err, results){

                   res.json(results); 

                });
        
    }
    
}; 