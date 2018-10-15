var express = require('express');
var body = require('body-parser');
var admin = require('firebase-admin');
var router = express.Router();
var db = admin.database();
var ref = db.ref("database");
var gr= ref.child('Groups');

router.post('/create_group', function (req, res) {
    var group = req.body.group;
    var members = req.body.members;
    gr.push({
        group : group,
        timecreated : Date.now(),
            members : members
        });
    res.json({
            status: 'msg sent'
        }
    );



});

const newLocal = module.exports = router;
