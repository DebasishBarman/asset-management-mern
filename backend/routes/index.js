var express = require('express');
var router = express.Router();

//controllers
const {register,login}=require('../controller/userController')
const {addCategory}=require('../controller/categoryController')
const {serviceController}=require('../controller/serviceUserController')
const {addAssetDetailController}=require('../controller/assetController')
//third-party 
const {body}=require('express-validator');

//authentication middleware
const protected=require('../middleware/protected');


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

//store Info of assetLogs
router.post('/add',[
  body('category').notEmpty().trim().escape(),
  body('assignmentDate').notEmpty().trim(),
  body('status').notEmpty().trim().escape(),
  body('assignedTo').notEmpty().trim().escape(),
  body('assetId').notEmpty().trim().escape(),
]
  ,protected,addAssetDetailController);

module.exports = router;
