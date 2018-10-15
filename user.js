var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var ref=db.ref("chat-system");

const router=express.Router();



var userRef= ref.child("/User");



router.post('/register',function(req,res){
  console.log("1");
  var uname = req.body["user_name"];
  var mail=req.body.email;
  var pword=req.body.password;

  console.log(uname);
  console.log(req.body.user_name);

  admin.auth().createUser({
    email: mail,
    password: pword,
    user_name: uname,

})
.then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
    console.log(userRecord.user_name);
    writeUserData(userRecord.user_name,userRecord.email);
    
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });

})

function writeUserData( uname, mail){
    
  console.log(uname);
  console.log(mail);
  userRef.push().set({
    author: [uname],
    title: [mail]
  });
  
  
  console.log("3");
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




