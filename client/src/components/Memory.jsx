import React, { useState } from "react";
import Allthedeal from "./Allthedeal.jsx";
import { BiBookmark } from "react-icons/bi";
import axios from "axios";
import moment from "moment/moment.js";
function Memory({ data, el, setview, setthewonteddata }) {
  return (
    <div>
      <h1> {el.username}</h1>
      <h1 className="title"> {el.title}</h1>
      <h3> it has been created {moment(el.update_time).fromNow()} </h3>
      <img
        src={el.images}
        alt=""
        srcset=""
        onClick={() => {
          setthewonteddata(el);
          setview("Allthedeal");
        }}
      />
      <BiBookmark
        id="mark"
        onClick={() => {
          axios
            .put(`http://localhost:3000/fav/${el.idpo}/${data[0].id}`)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />
    </div>
  );
}

export default Memory;
