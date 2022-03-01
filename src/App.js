import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Main";
import About from "./components/Nav";
import Login from "./components/Header";
import Lock from "./components/Lock";
import Recursive from "./components/RecursiveDiv";
import Reset from "./components/ResetPin";
import File from "./components/CreateFile";
import Folder from "./components/CreateFolder";
import FileIcon from "./components/File";

//  import {ReactComponent as Logo} from './logo1.svg';
import Log from "./components/Login";
import Resize from "./components/ResizableNav";


const completeStructures = [
  {
    name: "firstFolder",
    parentId: "null",
    type: "folder",
    folderID: "0",
    childNodes: [
      {
        name: "Folder",
        parentId: "0",
        type: "folder",
        folderID: "0-0",
        childNodes :[
          {
            name: "file",
            parentId: "null",
            type: "file",
            folderID: "0-0-0",
            childNodes: [],
          }
        ]
      },
    ],
  },
  {
    name: "secondFolder",
    parentId: "null",
    type: "folder",
    folderID: "1",
    childNodes: [],
  },
  {
    name: "thirdFolder",
    parentId: "null",
    type: "folder",
    folderID: "2",
    childNodes: [],
  },
];





function App() {
   var currTheme = localStorage.getItem("theme");
   
  if(currTheme === null){
    localStorage.setItem("theme",'Light');
  }
  if(localStorage.getItem("theme") === 'Dark'){
    document.body.classList.add("dark-theme");
   
  }else{
    document.body.classList.remove("dark-theme");
  }
  

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
        <Route path="/file" element={<File/>}  />
        <Route path="/folder" element={<Folder/>}/>
        <Route path="/recursive" element={<Recursive/>}/>
        <Route path="/resize" element={<Resize/>}/>
        <Route path="/fileicon" element={<FileIcon data={completeStructures}/>}/>
        
        
        </Routes>
        
        </BrowserRouter> 
        
        
      {/* {render}
        <Home {...{pin,pass,allEntry}} />
        <About/>  */}
        
      
      
    </div>
    
  );
}

export default App;