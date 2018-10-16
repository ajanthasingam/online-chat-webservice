var express=require('express');
var admin= require('firebase-admin');
var db=admin.database();
var firebase = require('firebase');
var ref=db.ref("database");

const router=express.Router();
router.post('/api_auth', function (req, res) {
    var api_key = req.body.api_key;

    var user = ref.orderByChild('api_key').equalTo(api_key);
    user.once("value",function(snapshot,err) {
        snapshot.forEach(function(data) {
            var key = data;
            return api_key;
        });



        res.json({
                status: 'msg sent'
            }
        );
    })

});
const newLocal = module.exports = router;
