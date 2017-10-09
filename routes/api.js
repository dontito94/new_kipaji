const express = require('express');
const router = express.Router();
const User = require('../models/users');

//get list of users

router.get('/users', function(req,res){
	User.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.send(users);
    });
});

//add new user
router.post('/users',function(req,res){
	User.create(req.body).then(function(user){
	res.send(user);	
	});	
});

//update user 
router.put('/users/:user_id', function(req,res){
 User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err);
        }
        user.username = req.body.username;
        user.email = req.body.email;
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'User updated!' });
        });

    });
});

//delete user

router.delete('/users/:user_id', function(req,res){
	    User.remove(req.param.user_id , function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;