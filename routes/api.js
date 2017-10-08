const express = require('express');
const router = express.Router();
const User = require('../models/users');

//get list of users

router.get('/users', function(req,res){
	res.send({type:'GET'});
});

//add new user
router.post('/users',function(req,res){
	User.create(req.body).then(function(user){
	res.send(user);	
	});	
});

//update user 
router.put('/users/:id', function(req,res){
	res.send({type:'PUT',});
});

//delete user

router.delete('/users/:id', function(req,res){
	res.send({type:'DELETE'});
});

//enable a file to be used in other module
module.exports = router;