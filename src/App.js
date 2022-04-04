import "./App.css";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router,
 Routes,
 Route} from "react-router-dom";



function App() {

const [mode, setMode] = useState('light'); // weather dark mode is enabled 
const [alert, setAlert] = useState(null);
const showAlert = (message,type)=>{
setAlert({
msg: message,
type: type
})
setTimeout(() => {
setAlert(null);

},1500);
}
const toggleMode = ()=>{
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode enabled","success")
}
else
{
  setMode('light');
 document.body.style.backgroundColor='white';
 showAlert("light mode enabled","success")
}
}

 return (
  <>
    {/* <Router> */}
    <Navbar title= 'Text Utility' mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode}/>}>
          </Route>
        </Routes>  */}
        <Textform showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode}/>
    </div>
   {/* </Router> */}
  </>
 );
}

export default App;



