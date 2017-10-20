const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const User = require('../models/users');

//create a postaSchema
const PostSchema = new Schema({
	
 type:{ 
 	type:String,
 	required:[true,'type field required']
 },
 like:{
 	type:String,
 	required:[true,'like field required']

 },

 description:{
 	type:String,
 	required:[true,'description required']
 },

 user_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'User'
 },
 
});

//model creation
const Post = mangoose.model('post',PostSchema);				
module.exports=Post;




 


