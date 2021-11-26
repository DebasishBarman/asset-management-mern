const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const User=require('../models/UserModel');


const register=(req,res,next)=>{
    const {username,password,email}=req.body
    bcrypt.hash(password,10,(err,hashedPassword)=>{
        if(err){
            res.status(401).json({
                'err':err
            })
        }
    })

    const user=new User({
        username,password,
        password:hashedPassword
    })

    user.save().then((data)=>{
        res.status(200).json({
            message:'Registration Successfull'
        })
    }).catch((err)=>{
        res.json({
            'err':err
        })
    })

}

// module.exports=register