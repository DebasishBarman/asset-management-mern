const mongoose=require('mongoose')
// const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:4,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=new mongoose.model('User',userSchema)
module.exports=User
