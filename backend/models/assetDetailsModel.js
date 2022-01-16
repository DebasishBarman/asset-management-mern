const mongoose=require('mongoose');
const assetSchema=new mongoose.Schema({
    assignedTo:{
        type:String,
        required:true,
    },
    assetName:{
        type:String,
        required:true,
        // max:50
    },
    assetId:{
        type:String,
        required:true,
    },
    assignedOn:{
        type:String,
        required:true
    },
    assignedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
        },
    assetStatus:{
        type:String,
        required:true
    }
})
const AssetDetail=new mongoose.model('AssetLog',assetSchema);
module.exports=AssetDetail;


