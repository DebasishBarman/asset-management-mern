var express = require('express');
var router = express.Router();
const {register,login}=require('../controller/userController')
const {addCategory}=require('../controller/categoryController')
const {serviceController}=require('../controller/serviceUserController')
const {body}=require('express-validator');
const protected=require('../middleware/protected');
/* GET home page. */

//Register User

router.post('/register',[
  body('username').notEmpty().trim().escape(),
  body('email').notEmpty().isEmail().normalizeEmail().trim(),
  body('password').notEmpty().trim()
],register);


//user Login
router.post('/login',[
  body('username').notEmpty().trim().escape(),
  body('password').notEmpty().trim()
],login) 


//add category
router.post('/addCategory',[body('name').notEmpty().trim().escape()
],protected,addCategory)

//Add Service Users
router.post('/addServiceUser',[
  body('username').notEmpty().trim().escape(),
  body('email').notEmpty().isEmail().normalizeEmail().trim()]
  ,protected,serviceController);



module.exports = router;
