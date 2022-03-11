import React, { useState } from 'react';




const AddFileFolder = (props) => {
  
  const [elementName,setElementName]=useState("");
//```````````````````````file/folder name`````````````````````
  function handleChange(event){
    const val=event.target.value;
    setElementName(val);
  }

//````````````````````create element``````````````````````````

  function makeElement(e){
    const isFolder=props.element==="Folder";
    props.showAddFileFolderModalFunc();
    props.makeElement(isFolder, elementName);
    e.preventDefault();
  }

//```````````````````````handle cancel```````````````````````````````
  function handleCancel() {
    props.showAddFileFolderModalFunc();
      }

  return (
    <div onClick={props.showAddFileFolderModalFunc}>
    <div className='folder-file-modal-div' onClick={(e)=>{e.stopPropagation()}}>
    <div className="whiteBg file">
    <h3>Create {props.element}</h3>
      <form>
      <label>Enter {props.element} name: </label>
      <input className='name-input' type='text' onChange={handleChange} value={elementName} autoFocus autocomplete="off"/>
      <div>
        <button className='modal-submit-btn btn' onClick={makeElement}>Create New</button>
         <button className="btn" id="cancelBtn" onClick={handleCancel}> Cancel</button> 
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default AddFileFolder;
