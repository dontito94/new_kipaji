const express = require('express');
const router = express.Router();
const PhoneNumber = require('../models/phone_number');

//get list of users

router.get('/phone_number', function(req,res){
	PhoneNumber.find(function (err, phone_numbers) {
        if (err) {
            res.send(err);
        }
        res.send(phone_numbers);
    });
});

//add new user
router.post('/phone_number',function(req,res){
	PhoneNumber.create(req.body).then(function(phone_number){
	res.send(phone_number);	
	});	
});

//update user 
router.put('/phone_number/:phone_number_id', function(req,res){
 PhoneNumber.findById(req.params.phone_number_id, function (err, phone_number) {
        if (err) {
            res.send(err);
        }
        phone_number.number = req.body.type;
        phone_number.user_id = req.body.user_id;
        phone_number.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'phone_number updated!' });
        });

    });
});

//delete user

router.delete('/phone_number/:phone_number_id', function(req,res){
	    PhoneNumber.remove(req.param.phone_number_id , function (err, phone_number) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

