import React from 'react';
import FolderIcon from './BigFolder.svg';


const FolderElement = () => {
  
  return (
    <div>
    <div className='folder-element-div'>
        <img src={FolderIcon} alt="Folder"/>
        <p>Folder Name</p>
    </div>
    </div>
  )
}

export default FolderElement