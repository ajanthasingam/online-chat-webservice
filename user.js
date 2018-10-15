var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var ref=db.ref("database");
const bodyParser = require('body-parser');
const router=express.Router();

var userRef= ref.child("/User");



router.post('/register',function(req,res){
  var uname = req.body.user_name;
  var mail=req.body.email;
  var pword=req.body.password;

  admin.auth().createUser({
    email: mail,
    password: pword,
    user_name: uname,

})
.then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
    writeUserData(uname,mail);
  })
  .catch(function(error) {
    console.log("Email already exists:", error);
      status:error;

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


// user registration




//user retreival
// admin.auth().getUserByEmail(email)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });

// //user deletion
// admin.auth().deleteUser(uid)
//   .then(function() {
//     console.log("Successfully deleted user");
//   })
//   .catch(function(error) {
//     console.log("Error deleting user:", error);
//   });

  const newLocal = module.exports = router;




