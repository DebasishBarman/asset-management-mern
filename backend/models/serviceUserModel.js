const mongoose=require('mongoose');
const serviceSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        max:50

    },
    userName:{
        type:String,
        required:true,
        
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})
const ServiceUser=new mongoose.model('ServiceUser',serviceSchema);
module.exports=ServiceUser;


