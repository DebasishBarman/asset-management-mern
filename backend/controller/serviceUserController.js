const ServiceUser=require('../models/serviceUserModel')

const serviceController=async(req,res)=>{
    const{username,email}=req.body
    const user=req.user._id
    try{
       
        const serviceUser=new ServiceUser({
            email,
            userName:username,
            createdBy:user
        })
        
        const createdServiceUser=await serviceUser.save();
        if(createdServiceUser){
            res.status(200).json({
                user:createdServiceUser,
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

const serviceUsers=async(req,res)=>{
    const user=req.user._id;
    const users=await ServiceUser.find({createdBy:user});
    res.json(users);
}

module.exports={serviceController,serviceUsers}