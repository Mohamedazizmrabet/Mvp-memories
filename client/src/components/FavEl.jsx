import React from 'react'

function FavEl({el}) {
  return (
    
    <div >
        <h1> {el.title}</h1>
      <img src={el.images} alt="" srcset="" />
      <h2>{el.description} </h2>
    
    </div>
  )
}

export default FavEl