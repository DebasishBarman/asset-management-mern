var express = require('express');
var router = express.Router();
const registerUser=require('../controller/registerUser')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/register',registerUser.register)
router.post('/register',async(req,res)=>{
  res.send('Register')
})
module.exports = router;
