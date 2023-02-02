import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Memory from './Memory.jsx'
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
function Memories({data,setthewonteddata,setview,rerender}) {
    const [newdata, setnewdata] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/getUserPost/${data[0].id}`).then((res)=>{
            setnewdata(res.data)
        })
    },[rerender])
  return (<> 
  < AiOutlineFileAdd className='add' onClick={()=>{
    setview('Add')

  }}/>  
  < BiBookmark className='fav' onClick={()=>{
    setview('Favourite')
  }} /> 
  <h1>Welcome Back {data[0].username}</h1>
    <div  className='memories'>
       
        {newdata.map((el,i)=>{
        console.log(el)
       return  <Memory  setview={setview} setthewonteddata={setthewonteddata} data={data} el={el} key={i} />
    })}</div>
    </>

  )
}

export default Memories