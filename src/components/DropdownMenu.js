import React from 'react';



const DropdownMenu = (props) => {
 

  function handleClick(event){
    const name =event.target.name;
    props.showAddFileFolderModalFunc(name);
  }

  


  return (
    <div>
        <div className='dropdown'>           
        <p className='dropdown-btns' name='File' onClick={handleClick}>Add File</p>        
        <p className='dropdown-btns' name='Folder' onClick={handleClick}>Add Folder</p>
        
        </div>
    </div>
  )
}

 export default DropdownMenu