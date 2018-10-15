var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var ref=db.ref("database");
const router=express.Router();



var userRef= ref.child("User");



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
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });

writeUserData(uid,uname,mail,pword);

})

function writeUserData(uid,uname, mail, pword){
  ref('users/'+uid).set({
      email: mail,
      password: pword,
      user_name: uname
  })
}


// user registration




//user retreival
admin.auth().getUserByEmail(email)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });

//user deletion
admin.auth().deleteUser(uid)
  .then(function() {
    console.log("Successfully deleted user");
  })
  .catch(function(error) {
    console.log("Error deleting user:", error);
  });

  module.exports=router;




