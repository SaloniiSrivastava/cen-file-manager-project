import React, { useState } from 'react';




const AddFileFolder = (props) => {
  
  const [elementName,setElementName]=useState("");

  function handleChange(event){
    const val=event.target.value;
    setElementName(val);
  }

  function createElement(e){
    const isFolder=props.element==="Folder";
    props.showAddFileFolderModalFunc();
    props.createElement(isFolder, elementName);
    e.preventDefault();
  }
  function handleCancel() {
    var element = document.getElementById("resetPinBlackBg");

    element.style.display = "none";
  }
  

  return (

    
        <div  onClick={props.showAddFileFolderModalFunc}>            
        <div className='folder-file-modal-div'  onClick={(e)=>{e.stopPropagation()}}>
        <div className="whiteBg file">
        <h3>Create {props.element}</h3>
        <form>
        <p>Enter {props.element} name: </p>
        <input className='name-input' type='text' onChange={handleChange} value={elementName} autoFocus/>
        <div>
        <button className='modal-submit-btn btn' onClick={createElement}>Create New</button>
        <button className="btn" id="cancelBtn" onClick={handleCancel}> Cancel</button>
      </div>
    </form>
    </div>
    </div>
    </div>
    
     
  )
}

export default AddFileFolder;