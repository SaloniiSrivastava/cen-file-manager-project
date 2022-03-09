import React from 'react'
import { ReactComponent as GreyFolder } from "../GreyFolder.svg";




const FolderIndexItem = (props) => {


 
  
  const marginL=props.marginL.toString()+"px";
  
  function handleClick(){
    props.changeState(props.path);
  }


  return (
    <div  onClick={handleClick} style={{ marginLeft : marginL }}>
         <div className={(props.isOpen?'folder-active':'folder')}>{props.isOpen?<GreyFolder/>:<GreyFolder/>} {props.name}</div>
         
    </div>
  )
}

export default FolderIndexItem

