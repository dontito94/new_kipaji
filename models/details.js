const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const User = require('../models/users');

//create a postaSchema
const DetailsSchema = new Schema({
	
 proffesion:{ 
 	type:String,
 	required:[true,'proffesion field required']
 },
 country:{
 	type:String,
 	required:[true,'country field required']

 },

 city:{
 	type:String,
 	required:[true,'city required']
 },
 area:{
 	type:String,
 	required:true
 },
 description:{
 	type:String,
 	required:true
 },

 user_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'User'
 },
 
});

//model creation
const Detail = mangoose.model('details',DetailsSchema);				
module.exports=Detail;




 


