import React from "react";
import { useState, useRef } from "react";

import { ReactComponent as SearchIcon } from "../search.svg";
import { ReactComponent as LightMode } from "../LightMode.svg";
import { ReactComponent as DarkMode } from "../Moon.svg";
import { ReactComponent as Add } from "../add.svg";
import { ReactComponent as AddDark } from "../AddDark.svg";
import { ReactComponent as Setting } from "../Settings.svg";
import { ReactComponent as SettingDark } from "../SettingDark.svg";
import { ReactComponent as BigFile } from "../BigFile.svg";
import { ReactComponent as BigFileDark } from "../BigFileDark.svg";
import { ReactComponent as BigFolder } from "../BigFolder.svg";
import { ReactComponent as BigFolderDark } from "../BigFolderDark.svg";
import { ReactComponent as Unlock } from "../UnlockFolder.svg";
import ResetPin from "./ResetPin";
// import CreateFile from "./CreateFile";
// import CreateFolder from "./CreateFolder";
// import FileIcon from "./File";
import FileEdit from "./FileEdit";
import Tree from "./Tree";

import { ReactComponent as GreyFolder } from "../GreyFolder.svg";
import { ReactComponent as GreyFile } from "../GreyFile.svg";

import { ReactComponent as FileIcon } from "../AddFile.svg";
import { ReactComponent as FileIconDark } from "../AddFileDark.svg";
import { ReactComponent as FolderIcon } from "../AddFolder.svg";
import { ReactComponent as FolderIconDark } from "../AddFolderDark.svg";
import { ReactComponent as LockIcon } from "../LockFolder.svg";
import { ReactComponent as Logo } from "../logo1.svg";
import { ReactComponent as LogoDark } from "../logo_dark.svg";
import RecursiveDiv from "./RecursiveDiv";

import Child from "./child";


//import {useNavigate} from "react-router-dom";

const Home = ({ data = [] }) => {
  //let navigate = useNavigate();
  var nodeName = localStorage.getItem("nodeName");


  var pin = localStorage.getItem("pin");
  const body = document.body;

  const isLoggedin = pin ? true : false;

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const [themes, setThemes] = useState("Light");

  const [lightIcon, setLightIcon] = useState(true);

  


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
  // function handleThemeCustom(){
  //     setThemes('Custom');
  //   x.style.display = "none" ;
  // }

  localStorage.setItem("theme", themes);

  if (localStorage.getItem("theme") === "Dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

  const editFile = () => {
    var element = document.getElementById("editFileBg");
    element.style.display = "flex";
    y.style.display = "none";
  };

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

  // createFile
  const [name, setName] = useState("");
  const [fileIcon, setFileIcon] = useState(false);
  const [folderIcon, setFolderIcon] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
    //console.log(e.target.value);
  }

  //console.log(name);

  const submitForm = (e) => {
    e.preventDefault();
    var element = document.getElementById("createFileBg");
    //if(name){
    element.style.display = "none";
    localStorage.setItem("add", "add");
    //} else{
    //   alert('File name cannot be empty!');
    //}
    setFileIcon(true);
    localStorage.setItem("name", name);
    localStorage.setItem("type", "file");
    
  };
  function handleCancel() {
    var element = document.getElementById("resetPinBlackBg");

    element.style.display = "none";
  }
  //  folder
  const [foldername, setFolderName] = useState("");

  function handleChangeFolder(e) {
    setFolderName(e.target.value);
    //console.log(e.target.value);
  }

  const submitFormFolder = (e) => {
    e.preventDefault();
    var element = document.getElementById("createFolderBg");

    element.style.display = "none";
    localStorage.setItem("add", "add");
    localStorage.setItem("name", foldername);
    localStorage.setItem("type", "folder");
    setFolderIcon(true);
  };

  const [value, setValue] = useState("");

  function handleValue(event) {
    if (event.key.toLowerCase() === "enter") {
      setValue(value);
      alert(value);
    }
  }

  const isMatch = name === value ? true : false;

  const[file,setFile] = useState([
    {
      icon : <BigFile/>,
      name : ''
    }

]);

 

  return (
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
            <div className="side addBtn">
              <button
                className="addFile"
                onClick={() => {
                  var element = document.getElementById("createFileBg");
                  element.style.display = "flex";
                  y.style.display = "none";
                }}
              >
                {lightIcon ? <FileIcon /> : <FileIconDark />}
                Add file
              </button>
              <button
                className="addFile"
                onClick={() => {
                  var element = document.getElementById("createFolderBg");
                  element.style.display = "flex";
                  y.style.display = "none";
                }}
              >
                {lightIcon ? <FolderIcon /> : <FolderIconDark />}
                Add folder
              </button>
            </div>
            <div className="lock">
               <RecursiveDiv></RecursiveDiv> 
               <Child/>
              {/* <div>
                <ul>
                  {data.map((tree) => (
                    <TreeNode node={tree} />
                  ))}
                </ul>
              </div> */}

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
          {/* <Nav/>  */}
        </div>
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
      <div className="app-frame">
        <div className="homePage" id="homePage">
          <div className="layout">
            <div className="search">
              <div
                className="searchBox"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleValue}
              >
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search.."
                  id="searchBar"
                ></input>
                <button type="submit" hidden></button>

                <div className="fileLayout" id="fileLayout">
                  
                <Child/>
                  {/* {lightIcon ? <div className="fileLabel" onClick={editFile}>                 
                  <BigFile /> {name}                  
                </div> : 
                <div className="fileLabel"  onClick={editFile}>                 
                <BigFileDark /> {name}                  
              </div> }
                  
                {lightIcon ? <div className="fileLabel">
                  <BigFolder />
                  Folder
                </div> : <div className="fileLabel">
                  <BigFolderDark />
                  Folder
                </div> 
                }
               {lightIcon ? <div className="fileLabel" onClick={editFile}>
                  <BigFile /> File
                </div> :
                <div className="fileLabel"  onClick={editFile}>
                <BigFileDark /> File
              </div>  
                }
                {lightIcon ? <div className="fileLabel">
                  <BigFolder />
                  Folder
                </div> : <div className="fileLabel">
                  <BigFolderDark />
                  Folder
                </div> 
                } */}
                  {/* <button onClick={click}>Click</button>
                {nodeName} */}
                

                <div> {file.map((fileName,index) => 
                      <div key={index}> 
                        <div> {fileName.name}</div>
                      </div>)} 
                </div>

                  {fileIcon ? (
                    <div onClick={editFile}>
                      {lightIcon ? <BigFile /> : <BigFileDark />}
                      {name}
                    </div>
                  ) : null}

                  {folderIcon ? (
                    <div className="fileLabel">
                      {lightIcon ? <BigFolder /> : <BigFolderDark />}
                      {foldername}
                    </div>
                  ) : null}
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
                ) : (
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
                    <DarkMode id="lightLogo" />
                    {themes} Mode{" "}
                  </button>
                )}
                {lightIcon ? (
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
                    }}
                  >
                    <Add />{" "}
                  </button>
                ) : (
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
                    }}
                  >
                    <AddDark />{" "}
                  </button>
                )}

                {lightIcon ? (
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
                ) : (
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
      <div className="blackBg" id="createFileBg">
        <div className="whiteBg file">
          <h3>Create File</h3>

          <form action="" onSubmit={submitForm}>
            <label>Enter File Name</label>
            <input
              type="text"
              name="file"
              id="setPin"
              placeholder="Enter new file name"
              onChange={handleChange}
            />

            <button className="btn">Create New</button>
            <button className="btn" id="cancelBtn" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
      <div className="blackBg" id="createFolderBg">
        <div className="whiteBg file">
          <h3>Create Folder</h3>
          <form action="" onSubmit={submitFormFolder}>
            <label>Enter Folder Name</label>
            <input
              type="text"
              name="folder"
              id="setPin"
              placeholder="Enter new folder name"
              onChange={handleChangeFolder}
            />

            <button className="btn">Create New</button>
            <button className="btn" id="cancelBtn" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
      <ResetPin />
      {/* <CreateFile/> */}
      {/* <CreateFolder /> */}
      <FileEdit />
    </div>
  );
};

// const TreeNode = ({ node }) => {
//   const [childVisible, setChildVisibility] = useState(false);
//   //    console.log(node.folderID);
//   const [id, setId] = useState("");
//   const [exType, setExType] = useState("");
//   const [nodeName, setNodeName] = useState("");
  
//    var bread = '';

//   function handleClick() {
//     setId(node.folderID);
//     //console.log(id);

//     setExType(node.type);
//     //console.log(exType);
//     setNodeName(node.name);
//     //console.log(nodeName);
//     //       var el = document.getElementById('folderBox');
//     //       el.classList.add('activeBox');
//     localStorage.setItem("nodeName", nodeName);

//     bread = bread + node.name + "/";
//     console.log("bread :" 
//     + bread);
//   }

//   function handleActive() {
//     var el = document.getElementById("folderBox");
//     el.classList.add("activeBox");
//   }

//   localStorage.setItem("id", id);
//   localStorage.setItem("exType", exType);

//   const hasChild = node.childNodes ? true : false;
//   const isFile = node.type === "file" ? true : false;
//   const isFolder = node.type === "folder" ? true : false;
//   const children = node.childNodes.length >= 1 ? true : false;

//   return (
//     <>
//       <div className="treeAll">
//         <div className="tree">
//           <li>
//             <div onClick={(e) => setChildVisibility((v) => !v)}>
//               {hasChild && (
//                 <div
//                   className={`d-inline d-tree-toggler folder  ${
//                     childVisible ? "active" : ""
//                   }`}
//                 ></div>
//               )}
//              {isFolder ? <div className="folder" id="folderBox" onClick={handleClick}>
//                 {/* {node.folderID} */}
//                 <span onClick={handleActive}>
//                   {isFile ? <GreyFile /> : <GreyFolder />}
//                   {node.name}
//                 </span>
//               </div> : <BigFile/> }
//             </div>

//             {hasChild && childVisible && (
//               <div className="d-tree-content">
//                 <ul className="d-flex d-tree-container flex-column">
//                   <Tree data={node.childNodes} />
//                   {children  ? <div>
//                     {node.childNodes.name}
//                       </div> : null} 
//                 </ul>
//               </div>
//             )}
//           </li>
//         </div>

        

//            {children && hasChild && childVisible ? <div>
//         {node.childNodes[0].name}
//       </div> : null}  

//       </div>

//       {/* {children? <div>{node.name}</div> : null } */}

      
      
//     </>
//   );
// };

export default Home;
