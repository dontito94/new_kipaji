const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const Post = require('../models/post');

//create a postaSchema
const CategorySchema = new Schema({
	
 name:{ 
 	type:String,
 	required:true
 },

 post_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'Post'
 },
 
});

//model creation
const Category = mangoose.model('categorie',CategorySchema);				
module.exports=Category;




 


