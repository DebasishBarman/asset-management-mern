const AssetDetail=require('../models/assetDetailsModel');
const addAssetDetailController=async(req,res)=>{
    const{category,assignmentDate,status,assignedTo,assetId}=req.body
    const user=req.user._id
    console.log("I am AssetController");
    try{
        
        const duplicate=await AssetDetail.findOne({
            assignedTo,
            assetName:category,
            assetId,
            assignedOn:assignmentDate,
            assignedBy:user,
            assetStatus:status
        })

       
        if(duplicate){
            res.status(401).json({
                'message': 'Exists'
            })
        }else{
            const assetDetail=new AssetDetail({
                assignedTo,
                assetName:category,
                assetId,
                assignedOn:assignmentDate,
                assignedBy:user,
                assetStatus:status
            })
            
            const detail=await assetDetail.save();
            if(detail){
                res.status(200).json({
                    assetDetail:detail,
                    "message":'success'
                });
            }
        }
    }catch(err){
        res.status(401).json({
            'message': 'Exists'
        })
    }
    
}

const displayList=async(req,res)=>{
    const user=req.user._id;
    const assets=await AssetDetail.find({assignedBy:user})
    res.json(assets)
}
module.exports={addAssetDetailController,displayList}