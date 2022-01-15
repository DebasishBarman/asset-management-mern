const jwt=require('jsonwebtoken');
const User=require('../models/UserModel');

const protected=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const {authorization}=req.headers;
        try {
            token=authorization.split(' ')[1];
            const decoded=jwt.verify(token,'secretKey');
            req.user=await User.findOne(decoded.id).select('-password')
            next();
        } catch (err) {
            res.status(401).json({
                'message': error
            })
        }
    }
}
module.exports = protected