// import React from 'react'

// import FolderIcon from '@mui/icons-material/Folder';
// import ArticleIcon from '@mui/icons-material/Article';

// const SearchItems = (props) => {
  
//   function selectElement(){
//     let itemPath=[...props.path];
//       if(!props.isFolder){
//         itemPath.pop();
//       }
//       props.makeActive(itemPath);      
//   }
//   return (
//     <div onClick={selectElement}>
//         <div className='item-flex'>{props.isFolder?<FolderIcon className='icon'/>:<ArticleIcon className='icon'/>} {props.name}</div>   
//     </div>
//   )
// }

// export default SearchItems