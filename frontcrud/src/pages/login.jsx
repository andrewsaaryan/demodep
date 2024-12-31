import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const login = () => {
    const [data,setdata]=useState({
        password:'',email:''
      })
const navigate=useNavigate()
      const handlesubmit=async(e)=>{
   e.preventDefault();
   const {email,password}=data
   try {
    
    const {data}=await axios.post('/login',{email,password})
    if(data.error)
      {
        toast.error(data.error)
      }
      else
      {
        navigate('/')
     setdata({})
    

      }

   } catch (error) {
  console.log(error)
   }
      }
  return (
    <div>
      <form onSubmit={(e)=>handlesubmit(e)}>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default login
