
import React from "react";
import { ReactComponent as GreyFolder } from "../GreyFolder.svg";
import { ReactComponent as GreyFile } from "../GreyFile.svg";



const Search = (props) => {
  
    function selectElement(){
      let itemPath=[...props.path];
        if(!props.isFolder){
          itemPath.pop();
        }
        props.makeActive(itemPath);      
    }
    return (
      <div  onClick={selectElement}>
          <div className='searchedItem'>
              {props.isFolder? <GreyFolder className='icon'/>:<GreyFile className='icon'/>} {props.name}</div> 
               
      </div>
    )
  }
  
  export default Search;