const jwt=require('jsonwebtoken');
const generateToken=(id)=>{
    return jwt.sign({id},'secretKey',{
        expiresIn:'1d'
    })
}
module.exports=generateToken