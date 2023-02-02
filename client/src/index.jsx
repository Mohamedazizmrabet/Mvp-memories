import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Singup from "./components/Singup.jsx";
import Memories from "./components/Memories.jsx";
import Allthedeal from "./components/Allthedeal.jsx";
import Add from "./components/Add.jsx";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Favourite from "./components/Favourite.jsx";
const App = () => {
  const [data, setdata] = useState([]);
  const [view, setview] = useState("Login");
  const [thewonteddata, setthewonteddata] = useState([]);
  console.log(thewonteddata);
  console.log(data);
  const renderView = () => {
    if (view === "Login") {
      return <Login setdata={setdata} setview={setview} />;
    } else if (view === "Signup") {
      return <Singup setdata={setdata} setview={setview} />;
    } else if (view === "Allthedeal") {
      return <Allthedeal data={data} setview={setview} thewonteddata={thewonteddata} />;

    }else if(view==='Add'){
      return(
        <Add data={data} setview={setview} />
      )

    }
    else if(view==='Favourite'){
      return (
        <Favourite setview={setview} data={data}  />
      )
    } 
    else {
      return (
        <Memories
          setview={setview}
          setthewonteddata={setthewonteddata}
          data={data}
        />
      );
    }
  };

  return (
    <div>
      <div>{renderView()} </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
