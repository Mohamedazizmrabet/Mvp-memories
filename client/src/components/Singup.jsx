import React from 'react'
import axios from 'axios'
import Memories from './Memories.jsx'
function Singup({setview,setdata}) {
  let email=''
  let username=""
  let password=""
  return (
    <>
    <h1 className='thetitle'>Welcome to your Memories</h1>
    <div id="login-form-wrap">
    <h1>Save Your Memories in a safe space</h1>
      <div id="login-form">
       <input  placeholder='username' id="username" type='text' onChange={(e)=>{
        Username=e.target.value
      }}></input>
      <input placeholder='Email' id="email" type='email' onChange={(e)=>{
        email=e.target.value
      }}></input>
      <input placeholder='Password' id="password" type='password' onChange={(e)=>{
        password=e.target.value
      }}></input>
      <button onClick={()=>{
        axios.post(`http://localhost:3000/addUser`,{
          username:username,
          password:password,
          email:email,
        }).then((res)=>{
          setdata(res.data)
          setview("Login")
        })

      }} >Sign In</button>
    </div>
    </div>
    </>
  )
}

export default Singup