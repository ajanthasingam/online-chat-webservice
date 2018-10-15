var express = require('express');
var body = require('body-parser');
var admin = require('firebase-admin');
var router = express.Router();
var db = admin.database();
var ref = db.ref("database");
var gr= ref.child('Group');

router.post('/create_group', function (req, res) {
    var group = req.body.group;
    var members = req.body.members;
    var group_ref = gr.child(group);
    var user = user_ref.o



});

const newLocal = module.exports = router;
