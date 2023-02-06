import React from 'react'

function HomePage({setview}) {
  return (
    <div className='homepa'>
      <img className='logoHome' src="../logo.png" alt="" srcset="" />
       <h1 className='mainPT'>
        Welcome To Your <span>Memories</span> 
      </h1>

      <button className='logingb' onClick={()=>{
        setview("Login")
      }}>Login</button>
      <button className='singinb' onClick={()=>{
        setview("Signup")
      }}>Sign in</button>
       </div>
  )
}

export default HomePage