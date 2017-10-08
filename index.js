const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//import an api module
const routes = require('./routes/api');

//set up an app 
const app = express();
//connection to mongodb
 mongoose.connect('mongodb://localhost/kipajiApi');
 mongoose.Promise = global.Promise;




app.use(bodyParser.json());
//enable express to use routes
app.use('/api',routes);

//listen port 
app.listen(process.env.port || 4000, function(){

console.log('Now it listen');
});