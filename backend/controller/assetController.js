const AssetDetail=require('../models/assetDetailsModel')
const addAssetDetailController=async(req,res)=>{
    const{category,assignmentDate,status,assignedTo,assetId}=req.body
    const user=req.user._id
    try{
       
        const asset=new AssetDetail({
            assignedTo,
            assetName:category,
            assetId,
            assignedOn:assignmentDate,
            assignedBy:user,
            assetStatus:status
        })
        
        const createdAssetDetail=await asset.save();
        if(createdAssetDetail){
            res.status(200).json({
                asset:createdAsset,
                "message":'success'
            });
        }else{
            res.status(401).json({
                'message': 'er'
            })
        }
    }catch(err){
        res.status(401).json({
            'message': 'Exists'
        })
    }
    
}
module.exports={addAssetDetailController}