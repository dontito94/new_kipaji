const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

//get list of users

router.get('/comments', function(req,res){
	   Comment.find(function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.send(comments);
    });
});

//add new user
router.post('/comments',function(req,res){
	Comment.create(req.body).then(function(comment){
	res.send(comment);	
	});	
});

//update user 
router.put('/comments/:comment_id', function(req,res){
 Comment.findById(req.params.comment_id, function (err, comment) {
        if (err) {
            res.send(err);
        }
        comment.comments = req.body.comments;
        comment.create_time = req.body.create_time;
        comment.post_id = req.body.post_id;
        comment .save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'comment updated!' });
        });

    });
});

//delete user

router.delete('/comments/:comment_id', function(req,res){
	    Comment.remove(req.param.comment_id , function (err, comment) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

