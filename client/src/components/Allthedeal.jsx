import axios from "axios";
import React, { useState } from "react";

function Allthedeal({ thewonteddata, setview, data }) {
  const [mod, setmod] = useState(false);
  let title = "";
  let describe = "";
  return (
    <>
      {!mod && (
        <div className="singleM">
          <h1
            onClick={() => {
              setview("nice");
            }}
          >
            {thewonteddata.title}{" "}
          </h1>
          <img className="oneP" src={thewonteddata.images} alt="" srcset="" />
          <h2 id="des">{thewonteddata.description}</h2>
          <button
            onClick={() => {
              axios
                .delete(
                  `http://localhost:3000/addDeleteP/${thewonteddata.idpo}/${data[0].id}`,
                )
                .then((res) => {
                  console.log(res);
                  setview("nice");
                });
            }}
          >
            {" "}
            delete
          </button>
          <button
            onClick={() => {
              setmod(!mod);
            }}
          >
            Modify
          </button>
        </div>
      )}

      {mod && (
        <div id="login-form-wrap">
          <h1>Add a Memory :</h1>
          <div id="login-form">
            <h2>tilte:</h2>
            <input
              type="text"
              onChange={(e) => {
                title = e.target.value;
              }}
            />
            <h2>describe:</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                describe = e.target.value;
              }}
            ></textarea>
            <button
              onClick={() => {
                axios
                  .put(
                    `http://localhost:3000/updateP/${thewonteddata.idpo}/${data[0].id}`,
                    {
                      title: title,
                      description: describe,
                    },
                  )
                  .then((res) => {
                    console.log(res);
                    setview("nice")
                  });
              }}
            >
              Submite
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Allthedeal;
