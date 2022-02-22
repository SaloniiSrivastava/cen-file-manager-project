 import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../logo1.svg";
import { ReactComponent as FileIcon } from "../AddFile.svg";
import { ReactComponent as FolderIcon } from "../AddFolder.svg";
import { ReactComponent as LockIcon } from "../LockFolder.svg";
import { ReactComponent as GreyFolder } from "../GreyFolder.svg";
import RecursiveDiv from "./RecursiveDiv";
import { ReactComponent as SearchIcon } from "../search.svg";
import { ReactComponent as Mode } from "../LightMode.svg";
import { ReactComponent as Add } from "../add.svg";
import { ReactComponent as Setting } from "../Settings.svg";
import { ReactComponent as BigFile } from "../BigFile.svg";
import { ReactComponent as BigFolder } from "../BigFolder.svg";
import { ReactComponent as Unlock } from "../UnlockFolder.svg";
import ResetPin from "./ResetPin";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";


function Resize() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  var pin = localStorage.getItem("pin");
    

  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');

var x = document.getElementById("toggleMode");
var y = document.getElementById("toggleFile");
var z = document.getElementById("togglePin");




function handleChangeOne(e){
    setOne(e.target.value);
    console.log(e.target.value)
    if(e.target.nextSibling){
      e.target.nextSibling.focus();
    
    }
  
}
function handleChangeTwo(e){
  setTwo(e.target.value);
  console.log(e.target.value)
  if(e.target.nextSibling){
    e.target.nextSibling.focus();
  }
}
function handleChangeThree(e){
setThree(e.target.value);
console.log(e.target.value)
if(e.target.nextSibling){
  e.target.nextSibling.focus();
}
}

function handleChangeFour(e) {
setFour(e.target.value);
console.log(e.target.value)
if(e.target.nextSibling){
  e.target.nextSibling.focus();
}
}

function handleClick(e) {
    if(one===pin[0] && two===pin[1] && three===pin[2] && four===pin[3]){
      setOne('');
      setTwo('');
      setThree('');
      setFour('');
  var element = document.getElementById("blackBg");
 
   element.style.display = "none";
  

 }else{
  
 
   alert('Wrong pin!Retry');
   
 }
 
}
const handleBack = (event) => {
  if (event.key.toLowerCase() === "backspace") {
    //event.target.pop(event.target.value);
    
    if(event.target.previousElementSibling){
     
    event.target.previousElementSibling.focus();
   
    //const form = event.target.form;
   // const index = [...form].indexOf(event.target);
    //form.elements[index - 1].focus();
    //event.preventDefault();
  }
}

};
  return (
    <div className='homePage'>
    <div className="app-container">
      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content" >
        <Logo className="logo" />
        <div className>
        <div className="side addBtn">
          <button className="addFile">
            <FileIcon />
            Add file
          </button>
          <button className="addFile">
            <FolderIcon />
            Add folder
          </button>
        </div>

        <div className="folder outerFolder">
          <GreyFolder />
          Some Folder Name
        </div>
        <div className="folder innerFolder">
          <GreyFolder />
          Folder Name 2
        </div>
        <div className="folder innerFolder">
          <GreyFolder />
          Folder 3
        </div>
        <div className="folder innerFolder">
          <GreyFolder />
          Folder 4
        </div>
        <div className="folder innerFolder">
          <GreyFolder />
          File 1
        </div>
        <div className="folder outerFolder">
          <GreyFolder />
          Some Folder Name
        </div>
        <div className="folder outerFolder">
          <GreyFolder />
          Some Folder Name
        </div>
        <div className="lock">
          <RecursiveDiv></RecursiveDiv>
          <button
            className="btn"
            id="lockBtn"
            onClick={() => {
              var x = document.getElementById("blackBg");

              x.style.display = "flex";
            }}
          >
            <LockIcon />
            Lock
          </button>
        </div>
      </div>
        </div>
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
      <div className="app-frame">
       <div> {/*className="homePage" id="homePage" */}
      {/* <Nav /> */}
      
      <div className="layout">
        <div className="search">
          <div className="searchBox">
            <SearchIcon />
            <input type="text" placeholder="Search.." id="searchBar"></input>
            <button type="submit" hidden></button>
            <div className="fileLayout">
              <div className="fileLabel">
                <BigFile /> File
              </div>
              <div className="fileLabel">
                <BigFolder />
                Folder
              </div>
              <div className="fileLabel">
                <BigFile /> File
              </div>
              <div className="fileLabel">
                <BigFolder />
                Folder
              </div>
            </div>
          </div>

          <div className="butn">
            <button
              className="addFile"
              onClick={() => {
                //  x = document.getElementById("toggleMode");
                if (
                  x.style.display === "none" ||
                  (y.style.display !== "none" ||
                  z.style.display !== "none")
                ) {
                  x.style.display = "block";
                  y.style.display = "none";
                  z.style.display = "none";
                } else {
                  x.style.display = "none";
                }
              }}
            >
              <Mode />
              Light Mode
            </button>
            <button
              className="smallBtn"
              onClick={() => {
                y = document.getElementById("toggleFile");
                if (
                  y.style.display === "none" ||
                  (x.style.display !== "none" ||
                  z.style.display !== "none")
                ) {
                  y.style.display = "block";
                  x.style.display = "none";
                  z.style.display = "none";
                } else {
                  y.style.display = "none";
                }
              }}
            >
              <Add />
            </button>
            <button
              className="smallBtn"
              onClick={() => {
                // var x = document.getElementById("togglePin");
                if (
                  z.style.display === "none" ||
                  (x.style.display !== "none" ||
                  y.style.display !== "none")
                ) {
                  z.style.display = "block";
                  x.style.display = "none";
                  y.style.display = "none";
                } else {
                  z.style.display = "none";
                }
              }}
            >
              <Setting />
            </button>
          </div>
        </div>
        <div className="optionLayout">
          <div className="toggleMode" id="toggleMode">
            <p onClick={() => {
              var h = document.getElementById("homePage");
              h.classList.toggle("dark");

            }}>Light Mode</p>
            <p>Dark Mode</p>
            <p>Custom Mode</p>
          </div>

          <div className="toggleFile" id="toggleFile">
            <p onClick={() => {
                var element = document.getElementById("createFileBg");
                element.style.display = "flex";
                y.style.display = "none";

              }}>Add File</p>
            <p onClick={() => {
                var element = document.getElementById("createFolderBg");
                element.style.display = "flex";
                y.style.display = "none";

              }}>Add Folder</p>
          </div>

          <div className="togglePin" id="togglePin">
            <p
              onClick={() => {
                var element = document.getElementById("resetPinBlackBg");
                element.style.display = "flex";
                z.style.display = "none";

              }}
            >
              Reset Pin
            </p>
          </div>
        </div>
      </div>
      <div className="blackBg" id="blackBg">
        <div className="whiteBg">
          <h1>Enter Pin</h1>
          <form>
          <input type="password"  length ='1' className="inp" name="inp1" onChange={handleChangeOne} onKeyDown={handleBack}   />
          <input type="password" length='1' className="inp" name="inp2"onChange={handleChangeTwo} onKeyDown={handleBack} />
          <input type="password" length='1' className="inp" name="inp3" onChange={handleChangeThree} onKeyDown={handleBack}   />
          <input type="password"  length='1' className="inp" name="inp4" onChange={handleChangeFour} onKeyDown={handleBack}  />
          </form>
          <button className="btn"  onClick={handleClick}
            // onClick={() => {
            //   // navigate('/');
            //   // var x = document.getElementsByClassName("homePage");
            //   //   if (x.style.display === "none") {
            //   //     x.style.display = "block";
            //   //   } else {
            //   //     x.style.display = "none";
            //   //   }
            //   var element = document.getElementById("blackBg");

            //   element.style.display = "none";
            // }}
          >
            <Unlock />
            Unlock
          </button>
        </div>
      </div>
      <ResetPin />
      <CreateFile/>
      <CreateFolder/>
    </div>
      </div>
      
    </div>
    </div>
  );
}

export default Resize;


