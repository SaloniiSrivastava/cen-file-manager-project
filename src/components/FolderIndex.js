import React from 'react';
import FolderIndexItem from './FolderIndexItem';





// =========== not showing folder white when open initially in first render ==========================
const FolderIndex = (props) => {
  
  
  function changeState(path){
    props.changeState(path);
  }

  let indexFolder=[];
  function createIndex(folderArray, marginL){
    folderArray.forEach(function(item){
      if(item.isFolder){
        const isOpen=(item.path===props.directory.currPath);
        indexFolder.push(<FolderIndexItem key={item.id} isOpen={isOpen} name={item.name}  marginL={marginL} path={item.path} changeState={changeState} />);      
        if(item.childNodes.length>0 && item.isActive){
          createIndex(item.childNodes,marginL+50);
        }
      }
    })
  }

  function createIndexCall(){
    indexFolder=[];
    createIndex(props.directory.structure,0);
    return indexFolder;
  }
  
  return (
    
    <div>
        {createIndexCall()}
    </div>
   
  )
}

export default FolderIndex