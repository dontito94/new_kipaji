const mangoose = require('mongoose');
const Schema = mangoose.Schema;
// create user schema
const UserSchema = new Schema({
 username:{
 	type:String,
 	required:[true,'username name field required']
 },
 email:{
 	type:String,
 	required:[true,'email field required']

 },

 firstname:{
 	type:String,
 	required:[true,'firstname required']
 },
 lastname:{
 	type:String,
 	required:[true,'lastname is required']
 }
 
})
//creation of model

const User = mangoose.model('user',UserSchema);
module.exports = User;