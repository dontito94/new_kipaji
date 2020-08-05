const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const Post = require('../models/post');

//create a postaSchema
const CommentSchema = new Schema({
	
 comments:{ 
 	type:String,
 },
 create_time:{
 	type:Date,
 	required:[true,'country field required']

 },
 post_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'Post'
 },
 
});

//model creation
const Comment = mangoose.model('comments',CommentSchema);				
module.exports=Comment;




 


