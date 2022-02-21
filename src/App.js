import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Main";
import About from "./components/Nav";
import Login from "./components/Header";
import Lock from "./components/Lock";
import Recursive from "./components/RecursiveDiv";
import Reset from "./components/ResetPin";
import File from "./components/CreateFile";
import Folder from "./components/CreateFolder";

//  import {ReactComponent as Logo} from './logo1.svg';
import Log from "./components/Login";








function App() {
  
  
  
  return (
    
    <div className="App">
       {/* <Logo className="logo" />  */}
        
         
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/nav" element={<About/>}/>       
        <Route path="/lock" element={<Lock/>}/>
        <Route path="/log" element={<Log/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/file" element={<File/>}/>
        <Route path="/folder" element={<Folder/>}/>
        <Route path="/recursive" element={<Recursive/>}/>
        </Routes>
        
        </BrowserRouter>
        
        
      {/* {render}
        <Home {...{pin,pass,allEntry}} />
        <About/>  */}
        
      
      
    </div>
   
  );
}

export default App;