// models/post.js

var mongoose		= require('mongoose');
var Schema			= mongoose.Schema;

var PostSchema		= new Schema({
	userName: String,
	date: String,
	blogPost: String
});

module.exports = mongoose.model('Post', PostSchema);
