var Category=require('../models/CategoryModel')

const addCategory=async(req,res)=>{
    const{name}=req.body
    const user=req.user
    console.log(user);
}
module.exports={addCategory}