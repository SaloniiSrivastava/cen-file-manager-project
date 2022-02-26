import React from "react";
import { useState, useRef } from "react";
import Nav from "./Nav";
import { ReactComponent as SearchIcon } from "../search.svg";
import { ReactComponent as LightMode } from "../LightMode.svg";
import { ReactComponent as DarkMode } from "../logo_dark.svg";
import { ReactComponent as Add } from "../add.svg";
import { ReactComponent as Setting } from "../Settings.svg";
import { ReactComponent as BigFile } from "../BigFile.svg";
import { ReactComponent as BigFolder } from "../BigFolder.svg";
import { ReactComponent as Unlock } from "../UnlockFolder.svg";
import ResetPin from "./ResetPin";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";
//import {useNavigate} from "react-router-dom";

function Home() {
  //let navigate = useNavigate();
  
  var pin = localStorage.getItem("pin");
  const body = document.body;

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const[themes,setThemes] = useState("Light");
  

  var x = document.getElementById("toggleMode");
  var y = document.getElementById("toggleFile");
  var z = document.getElementById("togglePin");
//unlock function
  function handleChangeOne(e) {
    setOne(e.target.value);
    console.log(e.target.value);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }
  function handleChangeTwo(e) {
    setTwo(e.target.value);
    console.log(e.target.value);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }
  function handleChangeThree(e) {
    setThree(e.target.value);
    console.log(e.target.value);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  function handleChangeFour(e) {
    setFour(e.target.value);
    console.log(e.target.value);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  //on submit unlock function
  function handleClick(e) {
    if (
      one === pin[0] &&
      two === pin[1] &&
      three === pin[2] &&
      four === pin[3]
    ) {
      setOne("");
      setTwo("");
      setThree("");
      setFour("");
      var element = document.getElementById("blackBg");

      element.style.display = "none";
    } else {
      alert("Wrong pin!Retry");
    }
  }
 

  //delete input value pin
  const handleBack = (event) => {
    if (event.key.toLowerCase() === "backspace") {
      //event.target.pop(event.value);

      if (event.target.previousSibling) {
        event.target.focus();
        event.target.previousSibling.focus();
        //console.log(event.target.value);

        //const form = event.target.form;
        // const index = [...form].indexOf(event.target);
        //form.elements[index - 1].focus();
        //event.preventDefault();
      }
    }
  };
//set Theme
function handleThemeLight(e){
  e.preventDefault();
   setThemes('Light');
   x.style.display = "none";
   body.classList.remove("dark-theme");
   
 }
function handleThemeDark(e){
  e.preventDefault();
  setThemes('Dark');
  x.style.display = "none" ; 
  body.classList.add("dark-theme");
}
// function handleThemeCustom(){
//     setThemes('Custom');
//   x.style.display = "none" ;
// }

localStorage.setItem("theme", themes);

if(localStorage.getItem("theme") === 'Dark'){
  body.classList.add("dark-theme");
}else{
  body.classList.remove("dark-theme");
}



  // navbar resize
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

  return (
    <div className="app-container">
      
      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content">
          
          <Nav />
        </div>
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
      <div className="app-frame">
      <div className="homePage" id="homePage">
        
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
                    x = document.getElementById("toggleMode");
                  if (
                    x.style.display === "none" ||
                    y.style.display !== "none" ||
                    z.style.display !== "none"
                  ) {
                    x.style.display = "block";
                    y.style.display = "none";
                    z.style.display = "none";
                  } else {
                    x.style.display = "none";
                  }
                }}
              >
                <LightMode id="lightLogo" />
                
               
                {themes} Mode
              </button>
              <button
                className="smallBtn"
                onClick={() => {
                  y = document.getElementById("toggleFile");
                
                  if (
                    y.style.display === "none" ||
                    x.style.display !== "none" ||
                    z.style.display !== "none"
                  ) {
                    y.style.display = "block";
                    x.style.display = "none";
                    z.style.display = "none";
                  } else {
                    y.style.display = "none";
                  }
                } 
              }
              >
                <Add />
              </button>
              <button
                className="smallBtn"
                onClick={() => {
                  // var x = document.getElementById("togglePin");
                  if (
                    z.style.display === "none" ||
                    x.style.display !== "none" ||
                    y.style.display !== "none"
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
              <p name='light' onClick={handleThemeLight}> Light Mode </p>
              <p  name='dark' onClick={handleThemeDark}> Dark Mode </p>
              {/* <p onClick={handleThemeCustom}>Custom Mode</p> */}
            </div>

            <div className="toggleFile" id="toggleFile">
              <p
                onClick={() => {
                  var element = document.getElementById("createFileBg");
                  element.style.display = "flex";
                  y.style.display = "none";
                }}
              >
                Add File
              </p>
              <p
                onClick={() => {
                  var element = document.getElementById("createFolderBg");
                  element.style.display = "flex";
                  y.style.display = "none";
                }}
              >
                Add Folder
              </p>
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
        </div>
        </div>
        <div className="blackBg" id="blackBg">
          <div className="whiteBg">
            <h1>Enter Pin</h1>
            <form>
              <input
                type="password"
                length="1"
                className="inp"
                name="inp1"
                onChange={handleChangeOne}
                onKeyDown={handleBack}
              />
              <input
                type="password"
                length="1"
                className="inp"
                name="inp2"
                onChange={handleChangeTwo}
                onKeyDown={handleBack}
              />
              <input
                type="password"
                length="1"
                className="inp"
                name="inp3"
                onChange={handleChangeThree}
                onKeyDown={handleBack}
              />
              <input
                type="password"
                length="1"
                className="inp"
                name="inp4"
                onChange={handleChangeFour}
                onKeyDown={handleBack}
              />
            </form>
            <button
              className="btn"
              onClick={handleClick}
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
            <button className="btn">Forgot Pin</button>
          </div>
        </div>
        <ResetPin />
        <CreateFile />
        <CreateFolder />
      </div>
    
  );
}

export default Home;
