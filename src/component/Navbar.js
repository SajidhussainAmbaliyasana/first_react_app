import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {


  function setBackground(event) {
     const class_name = event.target.className;
    //  console.log(`navbar ${class_name}`)
     if (class_name === "colour-red") {
        props.toggleColour("#e31f1f");
    }else if(class_name === "colour-cayan"){
      props.toggleColour("cyan");
    }else if(class_name === "colour-orange"){
      props.toggleColour("#ff9200");
    }else if(class_name === "colour-black"){
      props.toggleColour("black")
    }else if(class_name === "colour-white"){
      props.toggleColour("white");
    }else{
      props.toggleColour("white");
    }
  }

  return (
    <div className="navbar">
      <div className="nav-box2">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="nav-color">
        <div className="colour-red" onClick={setBackground}></div>
        <div className="colour-cayan" onClick={setBackground}></div>
        <div className="colour-orange" onClick={setBackground}></div>
        <div className="colour-black" onClick={setBackground}></div>
        <div className="colour-white" onClick={setBackground}></div>
      </div>
    </div>
  );
}

export default Navbar;
