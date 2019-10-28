let express = require('express');
let router = express.Router();
let async  = require('express-async-await');
let fetch = require('node-fetch');
/* GET home page. */
function getUsers(res){
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(function (err) {
            console.log(err);
            return err;
        });
}
router.get('/',function (req, res) {
    getUsers(res);
});


router.post('/',function (req, res) {
    getUsers(res);
});


module.exports = router;
