import React,{useEffect,useState} from 'react'
import axios from 'axios'
function login({setview,setdata}) {
    let password=""
    let email=''
    const verif= (password,email)=>{
      try {
         axios.get(`http://localhost:3000/getone/users/${email}/${password}`).then((res)=>{
          if(res.data.length===0){
            alert('your passsword or email is wrong ');
            setview("Signup")
            
          }
          else{
            setdata(res.data)
            setview("nice")
          }
  
        })
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='thetitle'>    
  <h1 >Welcome to your Memories</h1>    
    <div id="login-form-wrap">
    <h1>Save Your Memories in a safe space</h1>
      <div id="login-form">
      <input id="username" placeholder='Email' onChange={(e)=>{
        email=e.target.value
      }}></input>
      <input placeholder='Password' id="email" type='password' onChange={(e)=>{
        password=e.target.value
      }}></input>
      <button id="login" onClick={()=>{verif(password,email)}}> log in</button>
      </div>
    </div>
    </div>

  )
}

export default login