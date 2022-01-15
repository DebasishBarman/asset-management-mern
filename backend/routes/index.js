var express = require('express');
var router = express.Router();
const {register}=require('../controller/userController')
const {body,validationResult}=require('express-validator');
/* GET home page. */

//Register User

router.post('/register',[
  body('username').notEmpty().trim().escape(),
  body('email').notEmpty().isEmail().normalizeEmail().trim(),
  body('password').notEmpty().trim()
],register);


router.post('/login',[
  body('email').notEmpty().isEmail().normalizeEmail().trim(),
  body('password').notEmpty().trim()
]) 



module.exports = router;
