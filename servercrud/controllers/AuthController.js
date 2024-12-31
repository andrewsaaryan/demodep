const users=require('../models/users')
const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')

const register = async(req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) {
            return res.json({
                error: "name is required"
            })
        }
       
        if (!password||password.length<6) {
            return res.json({
                error: "password is required and length should be greater then 6"
            })
        }
        const exist= await users.findOne({email})
        if (exist) {
            return res.json({
                error: "email is taken"
            })
        }
        const salt=await bcrypt.genSalt(10)
     const hashpassword= await bcrypt.hash(password,salt)
       const user= await users.create({name,email,password:hashpassword})
       return res.json(user)

    } catch (error) {
        res.json(error)
    }

}

const login = async(req, res) => {

const {email,password}=req.body
try {
    const user=await users.findOne({email})
    if(!user)
        {
           return res.json({
            error:"user not found"
           })
        }
        const match =await bcrypt.compare(password,user.password)
        if(match)
            {
                jwt.sign({email:user.email,id:user._id,name:user.name},'321456789',{},(err,token)=>{
                    if(err)throw err;
                    res.cookie('token',token).json(user)
                })
                
            }

    else{
        return res.json({
            error:"check your passwiord"
           })
    }
            
            
} catch (error) {
    res.json(error)
}



}

module.exports = { register, login }