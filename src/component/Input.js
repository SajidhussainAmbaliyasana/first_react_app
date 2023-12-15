import "./style.css";
import { useState } from "react";

function Input(props) {
  const [text, setText] = useState(" ");
  let font_colour = "black";

  if(props.mode === "#e31f1f" || props.mode === "#ff9200" || props.mode === "black"){
    font_colour = "white";
  }else{
    font_colour = "black"
  }
  function changeToUpper() {
    let new_text = text.toUpperCase();
    setText(new_text);
    props.setalert("success","Changed The Text To Uppercase");
  }

  function changeToLower() {
    let new_text = text.toLowerCase();
    setText(new_text);
    props.setalert("success","Changed The Text To Lowercase");
  }

  function trimText() {
    let new_text = text.replace(/ +/g, " ");
    setText(new_text);
    props.setalert("success","Removed Extra Space");
  }
  

  function clearText(){
    let new_text = "";
    setText(new_text);
    props.setalert("success","Removed Text");
  }

  function copyText(){
    let copy_text = text;
    navigator.clipboard.writeText(copy_text);
    props.setalert("success","Text Copied");
   
  }


  function handleChange(events) {
    setText(events.target.value);
  }



  return (
    <div className={`input-container-light`}>
      <div className="input-activity">
        <p>Enter Text In The Below Textarea</p>
        <textarea
          id="text-area"
          rows="20"
          cols="130"
          value={text}
          onChange={handleChange}
          placeholder="Enter Your text Here"
          className={`text-area-light`}
        ></textarea>
        <button className="btn" onClick={changeToUpper}>
          To Upper Case
        </button>
        <button className="btn" onClick={changeToLower}>
          To Lower Case
        </button>
        <button className="btn" onClick={trimText}>
          Remove extra White Space
        </button>
        <button className="btn" onClick={clearText}>
          Clear Textarea
        </button>
        <button className="btn" onClick={copyText}>
          Copy Text
        </button>
      
      </div>
      <div className="input-activity">
        <h2 style={{color: font_colour === "black"? "black" : "white"}}>Text Box Details</h2>
        <p>Number Of character :- {text.length}</p>
        <p>Number Of Words :- {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
      </div>
      <div className="input-activity">
        <h2 style={{color: font_colour === "black"? "black" : "white"}} >Text Preview</h2>
        <p>{text}</p>
      </div>
     
    </div>
  );
}

export default Input;
