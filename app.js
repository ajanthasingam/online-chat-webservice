var express = require ('express');
const bodyParser = require('body-parser');

var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//firebase
var admin = require('firebase-admin');
var firebase = require('firebase');

var config = {
    apiKey:  "AIzaSyAeHhd3zemmXXmxpAU6j1Kzc8MOQ-6rtqQ ",
    authDomain: "chat-service-007.firebaseapp.com",
    databaseURL: "https://chat-service-007.firebaseio.com/",
    storageBucket: "gs://chat-service-007.appspot.com",
};
firebase.initializeApp(config);

var serviceAccount = require('./chat-service-007.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://chat-service-007.firebaseio.com/'

});


let api_auth=require('./api_auth');
app.use('/api_user',api_auth);
let api_user=require('./api_user');
app.use('/api_user',api_user);
let user=require('./user');
app.use('/user',user);
var private_message = require('./private_msg');
app.use('/message',private_message);
var group_message = require('./group_msg');
app.use('/message',group_message);
var create_group = require('./create_group');
app.use('/user',create_group);
//rest methods
app.get('/', function(req,res){
    console.log("Get Request");
    res.send("Get Request");
});

app.put('/', function (req, res) {
    console.log("HTTP Put Request");
    res.send("HTTP PUT Request");
});
  
app.post('/', function (req, res) {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
    console.log("HTTP DELETE Request");
    res.send("HTTP DELETE Request");
});




//Server initialization
var server =app.listen(3000, function(){
    var host =server.address().address;
    var port =server.address().port;

    console.log ("Server listening at http://%s:%s",host,port);
    
});



