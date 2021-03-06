var express = require('express');
var router = express.Router();

//controllers
const {register,login}=require('../controller/userController')
const {addCategory,allCategory}=require('../controller/categoryController')
const {serviceController,serviceUsers}=require('../controller/serviceUserController')
const {addAssetDetailController,displayList}=require('../controller/assetController')
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

router.get('/categories',protected,allCategory)


//Add Service Users
router.post('/addServiceUser',[
  body('username').notEmpty().trim().escape(),
  body('email').notEmpty().isEmail().normalizeEmail().trim()]
  ,protected,serviceController);

//service Users
router.get('/serviceUsers',protected,serviceUsers)


//store Info of assetLogs
router.post('/addAssetInfo',[
  body('category').notEmpty().trim().escape(),
  body('assignmentDate').notEmpty().trim(),
  body('status').notEmpty().trim().escape(),
  body('assignedTo').notEmpty().trim().escape(),
  body('assetId').notEmpty().trim().escape(),
]
  ,protected,addAssetDetailController);

//display all asset of a particular admin
router.get('/displayLogs',protected,displayList);

module.exports = router;
