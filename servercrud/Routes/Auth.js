const express=require('express')
const router=express.Router()
const cors=require('cors')
router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
    
))

const {register,login}=require('../controllers/AuthController')

router.post('/register',register)
router.post('/login',login )

module.exports=router