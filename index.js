const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//import an api module
const users = require('./routes/users');
const post = require('./routes/post');
const phone_number  = require('./routes/phone_number');
const details = require ('./routes/details');
const comments = require('./routes/comment');
const category = require('./routes/category');
const videos = require('./routes/video');
const images = require('./routes/image');


//set up an app 
const app = express();
//connection to mongodb
 mongoose.connect('mongodb://localhost/kipajiApi');
 mongoose.Promise = global.Promise;


app.use(express.static('public'));

app.use(bodyParser.json());
//enable express to use routes
app.use('/api',users);
app.use('/api',post);
app.use('/api',phone_number);
app.use('/api',details); 
app.use('/api',comments);
app.use('/api',category);
app.use('/api',videos);
app.use('/api',images);
//listen port 
app.listen(process.env.port || 4000, function(){

console.log('Now it listen');
});