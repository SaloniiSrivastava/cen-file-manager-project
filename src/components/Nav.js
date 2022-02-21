import { ReactComponent as FileIcon } from "../AddFile.svg";
import { ReactComponent as FolderIcon } from "../AddFolder.svg";
import { ReactComponent as LockIcon } from "../LockFolder.svg";
import { ReactComponent as GreyFolder } from "../GreyFolder.svg";
import { ReactComponent as Logo } from "../logo1.svg";
import RecursiveDiv from "./RecursiveDiv";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //let navigate = useNavigate();
  
  return (
    <div className="nav" draggable="true">
      <Logo className="logo" />
      <div className="maxWidth">
        <div className="addBtn">
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
  );
};

export default Navbar;
