var express = require ('express');

var app =express();

//firebase
var firebase = require('firebase');
var config = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  databaseURL: "TESTURL",
  projectId: "PROJECTID",
  storageBucket: "PROJECTBUCKET",
  messagingSenderId: "ID"
};
firebase.initializeApp(config);


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