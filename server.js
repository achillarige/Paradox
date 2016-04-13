
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart(); 

var app = express();
var authenticationController = require('./server/controllers/authentication-controller') 
var profileController = require('./server/controllers/profile-controller') 

mongoose.connect('mongodb://localhost:27017/paradox');

//middleware
app.use(multipartMiddleware);
app.use(bodyParser.json());
app.use('/webApp',express.static(__dirname + '/webApp'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
	res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);

//Profile
app.post('/api/profile/editPhoto',multipartMiddleware,profileController.updatePhoto);
app.post('/api/profile/updateUsername',profileController.updateUserName);
app.post('/api/profile/updateBio',profileController.updateBio);

app.listen('3000',function(){
	console.log('Listening for local host 3000');
});