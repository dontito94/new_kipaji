const express = require('express');
const router = express.Router();
const Detail = require('../models/details');

//get list of users

router.get('/details', function(req,res){
	Detail.find(function (err, details) {
        if (err) {
            res.send(err);
        }
        res.send(details);
    });
});

//add new user
router.post('/details',function(req,res){
	Detail.create(req.body).then(function(detail){
	res.send(detail);	
	});	
});

//update user 
router.put('/details/:detail_id', function(req,res){
 Detail.findById(req.params.detail_id, function (err, detail) {
        if (err) {
            res.send(err);
        }
        detail.proffesion = req.body.type;
        detail.country = req.body.like;
        detail.city = req.body.city;
        detail.area = req.body.area;
        detail.description = req.body.description;
        detail.user_id = req.body.user_id;
        detail .save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'detail updated!' });
        });

    });
});

//delete user

router.delete('/details/:detail_id', function(req,res){
	    Post.remove(req.param.detail_id , function (err, detail) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

