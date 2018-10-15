var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var ref=db.ref("chat-system");

const router=express.Router();

var userRef= ref.child("/User");



router.post('/register',function(req,res){

  var uname = req.body.user_name;

  var email=req.body.email;
  var password=req.body.password;



  admin.auth().createUserWithEmailAndPassword(email, password)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);

    writeUserData(uname,email);

  })
  .catch(function(error) {
    
    var errorCode = error.code;
    var errorMessage = error.message;
   
  });

  
    res.json({
        status:"success"
    });

})

function writeUserData(uname, mail){
  userRef.push().set({
      email: mail,
      user_name: uname,
});
  
}




// Login Form
router.get('/login', function(req, res){
  res.render('login');
});

// Login Process
router.post('/login', function(req, res, next){
  var email= req.body.email;
  var password=req.body.password;
  admin.auth().signInWithEmailAndPassword(email, password)
  .then(function(){
    console.log("Login Successfully")
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  res.json({
    status:"success"
});
 
});




  const newLocal = module.exports = router;




