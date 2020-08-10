const  mangoose = require('mongoose');
const Schema = mangoose.Schema;
const User = require('../models/users');

//create a postaSchema
const PhoneNumberSchema = new Schema({
	
 Number:{
 	type:String,
 	required:[true,'description required']
 },

 user_Id:{
 	type:Schema.Types.ObjectId,
 	ref:'User'
 },
 
});

//model creation
const PhoneNumber = mangoose.model('PhoneNumber',PhoneNumberSchema);				
module.exports=PhoneNumber;




 


