import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const register = () => {
  const [data,setdata]=useState({
    name:'',password:'',email:''
  })
const Navigate=useNavigate()

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const {name,email,password}=data
    try {
      const {data}=await axios.post('/register', {name,email,password})
      if(data.error)
        {
          toast.error(data.error)
        }
        else
        {
          
          toast.success('login success welcome')
          setdata({ name: '', email: '', password: '' })
          Navigate('/login')
          
        }
    
    
    } catch (error) {
      
      console.log(error)
    }
   


  }
  return (
    <form onSubmit={(e)=>handlesubmit(e)}>
       <label>
        Name
        </label>
        <input type='text' value={data.name}  onChange={(e)=>setdata({...data,name:e.target.value})}/>
        <br></br>
        <label>
        Email
        </label>
        <input type='text'  value={data.email}  onChange={(e)=>setdata({...data,email:e.target.value})}/>
        <br></br>
        <label>
            Password
        </label>
        <input type='password'  value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})}/>
        <br></br>
        <button type='submit'>Register</button>
      </form>
  )
}

export default register
