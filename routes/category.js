const express = require('express');
const router = express.Router();
const Category = require('../models/category');

//get list of users

router.get('/category', function(req,res){
	   Category.find(function (err, categories) {
        if (err) {
            res.send(err);
        }
        res.send(categories);
    });
});

//add new user
router.post('/category',function(req,res){
	Category.create(req.body).then(function(category){
	res.send(category);	
	});	
});

//update user 
router.put('/categories/:categories_id', function(req,res){
 Category.findById(req.params.detail_id, function (err, category) {
        if (err) {
            res.send(err);
        }
        category.name = req.body.name;
        category.category_id = req.body.category_id;
        category.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'comment updated!' });
        });

    });
});

//delete user

router.delete('/categories/:category_id', function(req,res){
	    Category.remove(req.param.category_id , function (err, category) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});

//enable a file to be used in other module
module.exports = router;

