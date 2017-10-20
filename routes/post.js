const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//get list of users

router.get('/posts', function(req,res){
	Post.find(function (err, posts) {
        if (err) {
            res.send(err);
        }
        res.send(posts);
    });
});

//add new user
router.post('/posts',function(req,res){
	Post.create(req.body).then(function(post){
	res.send(post);	
	});	
});

//update user 
router.put('/posts/:post_id', function(req,res){
 Post.findById(req.params.post_id, function (err, post) {
        if (err) {
            res.send(err);
        }
        post.type = req.body.type;
        post.like = req.body.like;
        post.description = req.body.description;
        post.user_id = req.body.user_id;
        post.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'post updated!' });
        });

    });
});

//delete user

router.delete('/posts/:post_id', function(req,res){
	    Post.remove(req.param.user_id , function (err, post) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

