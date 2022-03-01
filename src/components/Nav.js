import { ReactComponent as FileIcon } from "../AddFile.svg";
import { ReactComponent as FolderIcon } from "../AddFolder.svg";
import { ReactComponent as LockIcon } from "../LockFolder.svg";
import { ReactComponent as Logo } from "../logo1.svg";
import { ReactComponent as LogoDark } from "../logo_dark.svg";
import RecursiveDiv from "./RecursiveDiv";
 //import { useNavigate } from "react-router-dom";

import React, {useState}  from "react";


const Navbar = () => {
  //let navigate = useNavigate();
  const[lightIcon,setLightIcon] = useState(true);
  const theme = localStorage.getItem("theme");


   return (
    <div className="app-sidebar-content">
      {lightIcon ?  <Logo className="logo" /> : <LogoDark className="logo"/>}
      <div >
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

        {/* <div className="folder outerFolder">
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
        </div> */}
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
  );
};

export default Navbar;
