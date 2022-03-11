import React from "react";
import { useState, useRef } from "react";
import { ReactComponent as LightMode } from "../LightMode.svg";
import { ReactComponent as DarkMode } from "../Moon.svg";
import { ReactComponent as Add } from "../add.svg";
import { ReactComponent as AddDark } from "../AddDark.svg";
import { ReactComponent as Setting } from "../Settings.svg";
import { ReactComponent as SettingDark } from "../SettingDark.svg";
import { ReactComponent as Unlock } from "../UnlockFolder.svg";
import ResetPin from "./ResetPin";
// import FileEdit from "./FileEdit";
import { ReactComponent as LockIcon } from "../LockFolder.svg";
import { ReactComponent as Logo } from "../logo1.svg";
import { ReactComponent as LogoDark } from "../logo_dark.svg";
import FileElement from "./fileElement";
import completeStructure from "../completeStr";

import MakeFileFolder from "./MakeFileFolder";
import { v4 as uuidv4 } from "uuid";
import Recursive from "./LeftExplorer";
import AddFileFolder from "./AddFileFolder";
import Search from "./HeaderNew";

import DropdownMenu from "./DropdownMenu";

const Home = (props) => {
  var pin = localStorage.getItem("pin");
  const body = document.body;
  const [showAddFileFolder, setShowAddFileFolder] = useState(false);

  const [element, setElement] = useState("");

  const [directory, setDirectory] = useState({
    structure: completeStructure,
    currPath: [0],
  });

  function changeState(path) {
    let cS = [...directory.structure];
    let element = cS[path[0]];
    for (let i = 1; i < path.length; i++) {
      element = element.childNodes[path[i]];
    }
    element.isActive = !element.isActive;

    setDirectory({
      structure: cS,
      currPath: path,
    });
  }

  function makeActive(path) {
    let cS = [...directory.structure];
    let element = cS[path[0]];
    element.isActive = true;
    for (let i = 1; i < path.length; i++) {
      element = element.childNodes[path[i]];
      element.isActive = true;
    }

    setDirectory({
      structure: cS,
      currPath: path,
    });
  }

  function showFiles(path) {
    let filesArr = [];
    if (path.length !== 0) {
      let element = directory.structure[path[0]];
      for (let i = 1; i < path.length; i++) {
        element = element.childNodes[path[i]];
      }

      element.childNodes.forEach((item) => {
        if (!item.isFolder) {
          filesArr.push(
            <FileElement
              path={item.path}
              name={item.name}
              key={item.id}
              content={item.content}
            />
          );
        }
      });

      return filesArr;
    }
  }

  function makeElement(isFolder, elementName) {
    let cS = [...directory.structure];
    if (directory.currPath.length !== 0) {
      let element = cS[directory.currPath[0]];
      for (let i = 1; i < directory.currPath.length; i++) {
        element = element.childNodes[directory.currPath[i]];
      }
      const elementPath = [...element.path, element.childNodes.length];
      const id = uuidv4();
      const newElement = new MakeFileFolder(
        id,
        elementName,
        elementPath,
        isFolder,
        " "
      );
      element.childNodes.push(newElement);
      setDirectory((prev) => {
        return {
          ...prev,
          structure: cS,
        };
      });
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~show file/folder~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function handleShowAddFileFolder(name) {
    setElement(name);
    setShowAddFileFolder(
      (prevShowAddFileFolderModal) => !prevShowAddFileFolderModal
    );
  }

  //const isLoggedin = pin ? true : false;

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const [themes, setThemes] = useState("Light");

  const [lightIcon, setLightIcon] = useState(true);

  var x = document.getElementById("toggleMode");
  // var y = document.getElementById("toggleFile");
  var z = document.getElementById("togglePin");
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~unlock fnction ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
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

  //```````````````````````````````````on submit unlock function```````````````````````````````````````
  function handleClick() {
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

  //````````````````````````````````automatically delete input value pin``````````````````````````````````````````````````
  const handleBack = (event) => {
    if (event.key.toLowerCase() === "backspace") {
      //event.target.pop(event.value);

      if (event.target.previousSibling) {
        event.target.focus();
        event.target.previousSibling.focus();
      }
    }
  };
  //````````````````````````````````````````````set Theme```````````````````````````````````````````````````````````````````````
  function handleThemeLight(e) {
    e.preventDefault();
    setThemes("Light");
    x.style.display = "none";
    body.classList.remove("dark-theme");
    setLightIcon(true);
  }
  function handleThemeDark(e) {
    e.preventDefault();
    setThemes("Dark");
    x.style.display = "none";
    body.classList.add("dark-theme");
    setLightIcon(false);
  }

  localStorage.setItem("theme", themes);

  if (localStorage.getItem("theme") === "Dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

 

  //``````````````````````````````````` navbar resize```````````````````````````````````````````````````````
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback(() => {
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

  //`````````````````````````navbar resize func```````````````````````````````````````

  

  // function handleCancel() {
  //   var element = document.getElementById("resetPinBlackBg");

  //   element.style.display = "none";
  // }
  

  

  const [value, setValue] = useState("");

  function handleValue(event) {
    if (event.key.toLowerCase() === "enter") {
      setValue(value);
      alert(value);
    }
  }

  const theme = localStorage.getItem("theme");

  const lightTheme = theme === "Light" ? true : false;

  const [dropdown, setDropdown] = useState(false);
  // ```````````````````handle add file/folder dropdown````````````````
  function showDropdown() {
    setDropdown(!dropdown);
  }

  return (
    //``````````````````````````````````````````````resizable nav```````````````````````````````````
    <div className="app-container">


     
      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        
        <div className="app-sidebar-content">

       
          {lightIcon ? (
            <Logo className="logo" />
          ) : (
            <LogoDark className="logo" />
          )}
          <div>
            <div className="lock">
              <>
                <Recursive
                  showAddFileFolderModalFunc={handleShowAddFileFolder}
                  directory={directory}
                  changeState={changeState}
                />
              

                <button
                  className="btn"
                  id="lockBtn"
                  onClick={() => {
                    var x = document.getElementById("blackBg");
                    x.style.display = "flex";
                  }}
                >
                  <LockIcon /> Lock
                </button>
              </>
            </div>
          
          </div>
        </div>
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
       
      </div>
      <div className="app-frame">

     
        {/* ````````````````````````````````resizable nav ``````````````````````````````````````````````````````````````````        */}

        {/* ``````````````````````````````````````````header```````````````````````````````````````````````````````````````````````` */}
        
        {showAddFileFolder && (
        <AddFileFolder
          showAddFileFolderModalFunc={handleShowAddFileFolder}
          element={element}
          makeElement={makeElement}
        />
      )}
        <div className="homePage" id="homePage">
       
          <div className="layout">
            <div className="search">
              <div
                className="searchBox"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleValue}
              >
                <Search
                  showAddFileFolderModalFunc={handleShowAddFileFolder}
                  changeTheme={props.changeTheme}
                  directory={directory}
                  changeState={changeState}
                  makeActive={makeActive}
                />
               
                <div></div>

               

                <div className="fileLayout" id="fileLayout">
                <div className="files-div">
                    {showFiles(directory.currPath)}
                  </div>
                 
                  {/* {showAddFileFolderModal&&<AddFileFolder showAddFileFolderModalFunc={handleShowAddFileFolder} element={element} createElement={makeElement} />}  */}
                </div>
              </div>

              <div className="butn">
                {lightIcon ? (
                  <button
                    className="addFile"
                    onClick={() => {
                      x = document.getElementById("toggleMode");
                      if (
                        x.style.display === "none" ||
                        // y.style.display !== "none" ||
                        z.style.display !== "none"
                      ) {
                        x.style.display = "block";
                        // y.style.display = "none";
                        z.style.display = "none";
                      } else {
                        x.style.display = "none";
                      }
                    }}
                  >
                    <LightMode id="lightLogo" />
                    {themes} Mode
                  </button>
                ) : (
                  <button
                    className="addFile"
                    onClick={() => {
                      x = document.getElementById("toggleMode");
                      if (
                        x.style.display === "none" ||
                        // y.style.display !== "none" ||
                        z.style.display !== "none"
                      ) {
                        x.style.display = "block";
                        // y.style.display = "none";
                        z.style.display = "none";
                      } else {
                        x.style.display = "none";
                      }
                    }}
                  >
                    <DarkMode id="lightLogo" />
                    {themes} Mode{" "}
                  </button>
                )}
                

                     
                <button className="btn-icons smallBtn" onClick={showDropdown}>
                  {lightTheme ? <Add /> : <AddDark />}
                </button>

                {lightIcon ? (
                  <button
                    className="smallBtn"
                    onClick={() => {
                      if (
                        z.style.display === "none" ||
                        x.style.display !== "none"
                       
                      ) {
                        z.style.display = "block";
                        x.style.display = "none";
                       
                      } else {
                        z.style.display = "none";
                      }
                    }}
                  >
                    <Setting />
                  </button>
                ) : (
                  <button
                    className="smallBtn"
                    onClick={() => {
                      if (
                        z.style.display === "none" ||
                        x.style.display !== "none" 
                        
                        
                      ) {
                        z.style.display = "block";
                        x.style.display = "none";
                        
                        
                      } else {
                        z.style.display = "none";
                      }
                      
                    }}
                  >
                    <SettingDark />
                  </button>
                )}
              </div>
            </div>
            <div className="optionLayout">
              <div className="toggleMode" id="toggleMode">
                <p name="light" onClick={handleThemeLight}>
                  {" "}
                  Light Mode{" "}
                </p>
                <p name="dark" onClick={handleThemeDark}>
                  {" "}
                  Dark Mode{" "}
                </p>
              </div>

              <div className="toggleFile">
                {dropdown && (
                  <DropdownMenu
                    showAddFileFolderModalFunc={handleShowAddFileFolder}
                  />
                )}
               
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
      
      {/* ``````````````````````````````````````````````````````header``````````````````````````````````````````````````````````````     */}

      {/* `````````````````````````````````````````lock screen ````````````````````````````````````````````````````````````````````````````````` */}
      
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
          <button className="btn" onClick={handleClick}>
            <Unlock />
            Unlock
          </button>
          <button
            className="btn"
            onClick={() => {
              var element = document.getElementById("resetPinBlackBg");
              element.style.display = "flex";
              z.style.display = "none";
            }}
          >
            Forgot Pin
          </button>
        </div>
      </div>

      {/* ````````````````````````````````````````````````lock screen```````````````````````````````````````````````````` */}
      
      {/* <FileEdit /> */}

      
     
      <ResetPin />
     
    </div>
  );
};

export default Home;
