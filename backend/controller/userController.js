const bcrypt=require('bcryptjs')
const User=require('../models/UserModel');
const {validationResult}=require('express-validator')
const generateToken=require('../utils/generateToken');


const register=async(req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: "err"});
    }

    const {username,password,email}=req.body;
    try{
        bcrypt.hash(password,10,(err,hashedPassword)=>{
            if(err){
                res.status(401).json({
                    'err':err
                });
            }else{
                const user=new User({
                    username,email,
                    password:hashedPassword
                });
                user.save().then((data)=>{
                    res.status(200).json({
                        user:data,
                        message:'Registration Successfull'
                    });
                }).catch((err)=>{
                    res.json({
                        'err':err
                    });
                })
            }
        })
    }catch(err){
        res.json({
            'err':err
        });
    }
    
}



const login=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors});
    }

    const {username,password}=req.body;
    try {
        const user=await User.findOne({username});
        console.log(user)
        if(user!=null){
            const isValidPass=await bcrypt.compare(password,user.password);
            if(isValidPass){
                console.log(generateToken);
                res.status(200).json({
                    token:generateToken(username),
                    login:'success',

                })
            }else{
                res.json({
                    'errs':err
                });
            }
        }
        // res.send("Not Found");
        
    } catch (err) {
        res.json({
            'errs':err
        });
    }
}

module.exports={register,login}