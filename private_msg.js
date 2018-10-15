var express = require('express');
var body = require('body-parser');
var admin = require('firebase-admin');
var router = express.Router();
var db = admin.database();
var ref = db.ref("/");
var user_ref= ref.child('User');

router.post('/send_private_msg', function (req, res) {
    var message = req.body.private_msg;
    var receiver_uname = req.body.receiver_uname;
    var sender_uname = req.body.sender_uname;
    var user = user_ref.orderByChild(user_name).equalTo(receiver_uname)





})

module.exports = router;