// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not
 const [alert, setAlert] = useState(null);
 

 const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 }
 
 const toggleMode = ()=>{
      if(mode === 'light'){
             setMode ('dark');
             document.body.style.backgroundColor='#042743';
             showAlert(" Dark mode has been enabled","success")
             document.title='TextUtils - DarkMode';
               // setInterval(() => {
               //   document.title='TextUtils -smething';
               // }, 1000);
         }else{
            setMode ( 'light');
            document.body.style.backgroundColor='white';
            showAlert(" Light mode has been enabled","success")
            document.title='TextUtils -LightMode';
          }
 }
 
 
 
 
  return (
    <>
      {/* <Router> */}
           <Navbar title="TextUtils" aboutText="About TextUtils " mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
         <div className="container my-3">

       {/* <Switch>
          <Route exact  path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="enter the text to analyse below" mode={mode}/>
           
          </Route>
     </Switch> */}

     <TextForm showAlert={showAlert} heading="enter the text to analyse below" mode={mode}/>
     {/* <About /> */}
         </div>
         {/* </Router>  */}
    </>
  );
}

export default App;

