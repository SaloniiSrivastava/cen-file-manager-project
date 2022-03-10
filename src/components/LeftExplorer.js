import React from 'react';
import { ReactComponent as FileIcon } from "../AddFile.svg";
import { ReactComponent as FileIconDark } from "../AddFileDark.svg";
import { ReactComponent as FolderIcon } from "../AddFolder.svg";
import { ReactComponent as FolderIconDark } from "../AddFolderDark.svg";
import FolderIndex from './FolderIndex.js';



const LeftExplorer = (props) => {
  const theme = localStorage.getItem("theme");

  const light = theme === 'Light' ? true : false;

  function handleElementAddedName(event){
    const name=event.target.name;
    props.showAddFileFolderModalFunc(name);
  }

  function changeState(path){
    props.changeState(path);
  }

  
  


  return (
    <div >
      <div className='upper-part'>
        
        <div className='add-file-folder-buttons '>
        <div className="side addBtn">
          <button className='btn-add addFile' onClick={handleElementAddedName} name="File"> {light ? <FileIcon /> : <FileIconDark />} Add File</button>
          <button className='btn-add addFile' onClick={handleElementAddedName} name="Folder"> {light ? <FolderIcon /> : <FolderIconDark />} Add Folder</button>
          </div>
        </div>
        <FolderIndex directory={props.directory} changeState={changeState}/>
      </div>
     
      
    </div>
  )
}

export default LeftExplorer