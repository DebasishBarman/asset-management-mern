const AssetDetail=require('../models/assetDetailsModel');
const addAssetDetailController=async(req,res)=>{
    const{category,assignmentDate,status,assignedTo,assetId}=req.body
    const user=req.user._id
    console.log("I am AssetController");
    try{
        
        console.log(AssetDetail);
        const assetDetail=new AssetDetail({
            assignedTo,
            assetName:category,
            assetId,
            assignedOn:assignmentDate,
            assignedBy:user,
            assetStatus:status
        })
        
        const createdAssetDetail=await assetDetail.save();
        if(createdAssetDetail){
            res.status(200).json({
                asset:createdAssetDetail,
                "message":'success'
            });
        }else{
            res.status(401).json({
                'message': 'er'
            })
        }
    }catch(err){
        console.log(err);
        res.status(401).json({
            'message': 'Exists'
        })
    }
    
}
module.exports={addAssetDetailController}