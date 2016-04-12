var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller') 

mongoose.connect('mongodb://localhost:27017/paradox');

app.use(bodyParser.json());
app.use('/webApp',express.static(__dirname + '/webApp'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
	res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);

app.listen('3000',function(){
	console.log('Listening for local host 3000');
});