import React from 'react';
import FileIcon from '../BigFile.svg';
import FileIconDark from "../BigFileDark.svg"
import FileEdit from "./FileEdit";


const FileElement = (props) => {
  const theme = localStorage.getItem("theme");

  const lightTheme = theme === 'Light' ? true : false;

  var y = document.getElementById("toggleFile");
  const editFile = () => {
    var element = document.getElementById("editFileBg");
    element.style.display = "flex";
    y.style.display = "none";
  };

 
 
  return (
<>
    <FileEdit /> 
    <div >
       
    <div className='file-element-div' onClick={editFile}>
        {lightTheme ? <img src={FileIcon} alt="file"/> : <img src={FileIconDark} alt="file"/>}
        <p>{props.name}</p>
    </div>
    <div>
    
    </div>
    </div>
    </>
  )
}

export default FileElement