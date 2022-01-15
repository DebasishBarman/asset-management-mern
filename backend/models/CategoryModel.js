const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    Name:{
        type:String,
        unique:true,
        required:true,
        max:50

    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})
const Category=new mongoose.Model('Category',categorySchema);
module.exports=Category;


