const express = require('express');
const router = express.Router();
const Image = require('../models/image');

//get list of users

router.get('/images', function(req,res){
	   Image.find(function (err, images) {
        if (err) {
            res.send(err);
        }
        res.send(images);
    });
});

//add new user
router.post('/images',function(req,res){
	Image.create(req.body).then(function(image){
	res.send(image);	
	});	
});

//update user 
router.put('/images/:image_id', function(req,res){
 Image.findById(req.params.image_id, function (err, image) {
        if (err) {
            res.send(err);
        }
        image.name = req.body.name;
        image.size = req.body.size;
        image.path = req.body.path;
        image.create_at= req.body.at;
        image.post_id = req.body.post_id;
        image.category_id = req.body.category_id;
        image.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'comment updated!' });
        });

    });
});

//delete user

router.delete('/images/:image_id', function(req,res){
	    Image.remove(req.param.comment_id , function (err, image) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

