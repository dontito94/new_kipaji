const express = require('express');
const router = express.Router();
const Video = require('../models/video');

//get list of users

router.get('/videos', function(req,res){
	   Video.find(function (err, videos) {
        if (err) {
            res.send(err);
        }
        res.send(videos);
    });
});

//add new user
router.post('/videos',function(req,res){
	Video.create(req.body).then(function(video){
	res.send(video);	
	});	
});

//update user 
router.put('/videos/:video_id', function(req,res){
 Video.findById(req.params.video_id, function (err, video) {
        if (err) {
            res.send(err);
        }
        video.name = req.body.name;
        video.size = req.body.size;
        video.path = req.body.path;
        video.create_at= req.body.at;
        video.post_id = req.body.post_id;
        video.category_id = req.body.category_id;
        video.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'video updated!' });
        });

    });
});

//delete user

router.delete('/videos/:video_id', function(req,res){
	    Comment.remove(req.param.comment_id , function (err, video) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

