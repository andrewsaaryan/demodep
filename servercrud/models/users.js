const mongoose=require('mongoose')

const {Schema}=mongoose


const userschema=new Schema({
    name:String,
    email:{
        type:String,unique:true
    },
    password:{
        type:String
    }
})

const user=mongoose.model('users',userschema)
module.exports=user