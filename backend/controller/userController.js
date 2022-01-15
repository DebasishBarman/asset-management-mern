const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const User=require('../models/UserModel');
const {validationResult}=require('express-validator')


const register=async(req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: "err"});
    }

    const {username,password,email}=req.body
    bcrypt.hash(password,10,(err,hashedPassword)=>{
        if(err){
            res.status(401).json({
                'err':err
            })
        }else{
            const user=new User({
                username,email,
                password:hashedPassword
            })
            user.save().then((data)=>{
                res.status(200).json({
                    user:data,
                    message:'Registration Successfull'
                })
            }).catch((err)=>{
                res.json({
                    'err':err
                })
            })
        }
    })
}

module.exports={register}