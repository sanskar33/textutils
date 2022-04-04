import React ,{useState} from "react";
function Textform(props) {
const[text,setText] = useState('');


// text = "new text" // wrong way to change state 
// setText("new text") // right way to change state
const handleUpClick = ()=>{
console.log("Uppercase was clicked !")
let newText = text.toUpperCase();
setText(newText)  // here state is getting changed 
props.showAlert("Converted to Uppercase","success");
}
const handleLowClick = ()=>{
console.log("Lowercase was clicked !")
let newText = text.toLowerCase();
setText(newText)
props.showAlert("Converted to Lowercase","success");
}
const handleClearClick = ()=>{
console.log("Clear Text was Clicked !")
let newText = ('');
setText(newText)
props.showAlert("Text has been Cleared","success");
}


const handleOnChange = (event)=>{
// console.log("On Change")
setText(event.target.value)}

const handleCopy = () => {
console.log("I am a copy");
var text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Text has been Copied","success");
//  navigator.clipboard.writeText(text.value)
}


  return (
    <>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="8"></textarea>
      </div>
  <button className="btn btn-primary"onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-primary mx-2"onClick={handleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-primary mx-2"onClick={handleClearClick} >Clear Text</button>
  <button className="btn btn-primary mx-2"onClick={handleCopy} >Copy Text</button>
   </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your text Summary</h2>
<p><b>{text.split(" ").length} words | {text.length} characters </b></p>
<p>{0.008 *text.split(" ").length} Avg Time (in mins) to read </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter text in textbox area to preview it here!"}</p>

</div>
 </>
  );
}

export default Textform;