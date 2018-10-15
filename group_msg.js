var express = require('express');
var body = require('body-parser');
var admin = require('firebase-admin');
var router = express.Router();
var db = admin.database();
var ref = db.ref("database");
var user_ref= ref.child('Group');

router.post('/send_group_msg', function (req, res) {
    var message = req.body.message;
    var group= req.body.group;
    var sender_uname = req.body.sender;
    var user = user_ref.orderByChild('user_name').equalTo(receiver);
    user.once("value",function(snapshot,err) {
        snapshot.forEach(function(data) {
            var key = data.key;
            user_ref.child(key+'/private_message').push({
                sender:sender_uname,
                message:message
            } );
        });



        res.json({
                status: 'msg sent'
            }
        );
    })

})

const newLocal = module.exports = router;
