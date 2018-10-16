var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var firebase = require('firebase');
var ref=db.ref("database");

const router=express.Router();


router.post('/api_register',function(req,res){

    var uname = req.body.user_name;

    var email=req.body.email;
    var password=req.body.password;



    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userRecord) {

            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new admin:", userRecord.uid);
            // For the JS SDK
            firebase.auth().onAuthStateChanged( user => {

                if (user) {
                    writeUserData(uname, email, user.uid);
                    console.log(user.uid);
                    res.json({
                        api_key: user.uid
                    });
                }
            });


        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

        });




})

function writeUserData(uname, mail,api_key){
    ref.push().set({
        api_key: api_key,
        email: mail,
        user_name: uname,
    });

}




// Login Form
router.get('/api_login', function(req, res){
    res.render('api_login');
});

// Login Process
router.post('/api_login', function(req, res, next){
    var email= req.body.email;
    var password=req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
            console.log("Login Successfully");
            res.json({
                status:"success"
            });
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });


});




const newLocal = module.exports = router;




