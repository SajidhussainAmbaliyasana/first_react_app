import "./App.css";
import Alert from "./component/Alert";
import Heading from "./component/Heading_component";
import Input from "./component/Input";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
//import { useEffect } from "react";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const toggleColour = (color) => {
    setMode(color);
    document.body.style.backgroundColor = color;
  };
  if(mode === "#e31f1f" || mode === "#ff9200" || mode === "black"){
    document.body.style.color = "white";
  }else{
    document.body.style.color = "black";
  }

  const showAlert = (typ, message) => {
    setAlert({
      type: typ,
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

 
  
 

  return (
    <>
      <BrowserRouter>
        <Navbar  mode={mode}  toggleColour={toggleColour} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heading title="This is text Util" mode={mode} /> 
                <Input  mode={mode} setalert={showAlert} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
