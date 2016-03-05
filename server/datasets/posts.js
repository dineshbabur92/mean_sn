var mongoose = require("mongoose");

module.exports = mongoose.model("Post", {
    userid: String,
    name: String,
    image: String,
    content: String,
    timestamp: {type: Date, default: Date.now}
})