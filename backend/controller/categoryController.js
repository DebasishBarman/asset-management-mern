const Category=require('../models/CategoryModel')
const randomstring = require("randomstring");
const mongoose =require('mongoose')
const addCategory=async(req,res)=>{
    const{name}=req.body
    console.log(name);
    const user=req.user._id
    console.log(user);
    try{
        const id='ASD'+randomstring.generate({length:6,charset:'numeric'});
        const asset=new Category({
            user,
            assetName:name,
            assetId:id
        })
        console.log(asset);
        const createdAsset=await asset.save();
        if(createdAsset){
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
        console.log(err);
        res.status(401).json({
            'message': 'Exists'
        })
    }
    
}

const allCategory=async(req,res)=>{
    const user=req.user._id;
    const asset=await Category.find({user});
    console.log(asset);
    res.json(asset);
}



module.exports={addCategory,allCategory}