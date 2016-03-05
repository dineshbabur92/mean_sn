var mongoose = require('mongoose');
module.exports = mongoose.model('User',{
    
    email: String,
    password: String,
    image: String,
    name: String,
    bio: String,
    following: [{userid: String}],
    followers: [{userid: String}]
    
});