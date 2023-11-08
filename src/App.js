import React, { useState} from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
     }, 1500);
    
  }
  let classrem=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');

  }
const toogleMode=(cls)=>{
  classrem();
  console.log(cls);
  document.body.classList.add('bg-'+cls);
  if(mode==='dark'){
    console.log('dark mode clicked')
    setmode('light');
    showAlert("light mode enabled","success");
    document.body.style.backgroundColor='white';
  }
  else{
    setmode('dark');
    showAlert("dark Mode enabled","success");
    document.body.style.backgroundColor='#0a2137';
  }


}



  return (
   <>
    <Router>
   <Navbar  mode={mode}  toogleMode={toogleMode}/>
   <Alert alert={alert}/>
  
      <div className="container my-4">
      <Routes>
      <Route  path="/" element={<div>Home Page</div>}/>
          <Route  path="/about" element={  <About mode={mode}/>}/>
        
          <Route   path="/textform" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}>
          
          </Route>
          <Route path="/*" element={ <Error/>}/>
        </Routes>
   
    </div>
    </Router>
    
    </>
 
  );
}

export default App;
