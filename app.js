var express = require ('express');
const bodyParser = require('body-parser');


var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//firebase
var admin = require('firebase-admin');

var serviceAccount = require('./chat-service-007.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://chat-service-007.firebaseio.com/'

});



let user=require('./user');
app.use('/user',user);
var private_message = require('./private_msg');
app.use('/message',private_message);

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



