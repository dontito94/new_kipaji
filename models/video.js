const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const Post = require('../models/post');
const Category = require('../models/category')

//create a postaSchema
const VideoSchema = new Schema({
	
 name:{ 
 	type:String,
 	required:[true,'proffesion field required']
 },
 size:{
 	type:String,
 	required:[true,'country field required']

 },

 created_at:{
 	type:String,
 	required:[true,'city required']
 },
 path:{
 	type:String,
 	required:true
 },
post_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'Post'
 },
  category_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'Category'
 },
 
});

//model creation
const Video = mangoose.model('videos',VideoSchema);				
module.exports=Video;




 


