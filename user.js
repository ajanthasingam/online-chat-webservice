var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var ref=db.ref("chat-system");

const router=express.Router();

var userRef= ref.child("/User");



router.post('/register',function(req,res){
<<<<<<< HEAD
  console.log("1");
  var uname = req.body["user_name"];
=======
  var uname = req.body.user_name;
>>>>>>> b3514124e6f7521daf0f05642e45ed86db0402bd
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
<<<<<<< HEAD
    console.log(userRecord.user_name);
    writeUserData(userRecord.user_name,userRecord.email);
    
=======
    writeUserData(uname,mail);
>>>>>>> b3514124e6f7521daf0f05642e45ed86db0402bd
  })
  .catch(function(error) {
    console.log("Email already exists:", error);
      status:error;

  });
    res.json({
        status:"success"
    });

})

<<<<<<< HEAD
function writeUserData( uname, mail){
    
  console.log(uname);
  console.log(mail);
  userRef.push().set({
    author: [uname],
    title: [mail]
  });
  
=======
function writeUserData(uname, mail){
  userRef.push().set({
      email: mail,
      user_name: uname,
});
>>>>>>> b3514124e6f7521daf0f05642e45ed86db0402bd
  
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




