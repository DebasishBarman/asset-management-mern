const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    assetName:{
        type:String,
        unique:true,
        required:true,
        max:50

    },
    assetId:{
        type:String,
        unique:true,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})
const Category=new mongoose.model('Category',categorySchema);
module.exports=Category;


