import axios from 'axios'
import React, { useState,useEffect } from 'react'
import FavEl from './FavEl.jsx'
function Favourite({data,setview}) {
    console.log(setview)
    const [fav, setfav] = useState([])
    console.log(data)
    useEffect(()=>{
        axios.get(`http://localhost:3000/getUserPost/${data[0].id}`).then((res)=>{
            setfav(res.data)
            console.log(res.data)
        })
    },[])
    let favData=fav.filter((e,i)=>(
        e.favioret===1    
    ))
  return (
    <>
    <h1>Your favioret Memories:</h1>
    <button onClick={()=>{
        setview("nice")
    }}>Go back</button>
    <div className='memories'>{favData.map((e,i)=>(
        <FavEl el={e} key={i} />
    ))}</div>
    </>
  )
}

export default Favourite