import React from 'react'
import axios from 'axios'
function Add({data,setview}) {
    let title=''
    let imga=''
    let describe=""
    console.log(data)
  return (
    <div id="login-form-wrap">
      <h1>Add a Memory :</h1>
      <div id="login-form">
        <h2>tilte:</h2>
        <input type="text" onChange={(e)=>{
          title=e.target.value
        }}/>
        <h2>image:</h2>
        <input type="text" onChange={(e)=>{
          imga=e.target.value
        }} />
        <h2>describe:</h2>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{
          describe=e.target.value
        }}></textarea>
        <button onClick={()=>{
          console.log(data)
            axios.post(`http://localhost:3000/addPost/${data[0].id}`,{
                title:title,
                id:data[0].id,
                description:describe,
                images:imga,
            }).then((res)=>{
              setview("nice")
              console.log(res);
            })
        }}>Submite</button>
        </div>
    </div>
  )
}

export default Add