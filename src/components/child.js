// import React, { useContext, useState, useEffect } from 'react'
// import FileElement from './fileElement';
// import completeStructure from '../completeStr';
// import { COMPLETE_STRUCTURE } from '../localStorageKeys';
// import MakeFileFolder from './csConstructor';
// import { v4 as uuidv4 } from 'uuid';
// import LeftExplorer from './LeftExplorer';
// import AddFileFolderModal from './AddFileFolderModal';
// import { ReactComponent as Unlock } from "../UnlockFolder.svg";
// import { ReactComponent as LockIcon } from "../LockFolder.svg";


// const Child = (props) => {
//     const [showEditFileModal, setShowEditFileModal]=useState(false);
//     const [showAddFileFolderModal, setShowAddFileFolderModal]=useState(false);
//     var pin = localStorage.getItem("pin");

//     const [one, setOne] = useState("");
//   const [two, setTwo] = useState("");
//   const [three, setThree] = useState("");
//   const [four, setFour] = useState("");
    
//     function handleShowEditFileModal(){
//         setShowEditFileModal(prevShowEditFileModal=>!prevShowEditFileModal);
//       }

// const [element,setElement]=useState("");
// const [currFile, setCurrFile]=useState({
//   name:"",
//   path:[],
//   content: ""
// });


// const [directory, setDirectory]= useState({
//     structure : completeStructure,
//     currPath: [0]
//   });


//   //==============================USE EFFECT=======================================

//   useEffect(() => {
//     const structureInfo = JSON.parse(localStorage.getItem(COMPLETE_STRUCTURE));
//     if (structureInfo)
//     { 
//       setDirectory(structureInfo);
//     }
//   },[]);

//   useEffect(() => {
//     localStorage.setItem(COMPLETE_STRUCTURE, JSON.stringify(directory));
//   }, [directory]);

//   //=============================USE EFFECT END======================================

//   function changeState(path){
//     let cS=[...directory.structure];
//     let element=cS[path[0]];
//     for(let i=1;i<path.length;i++){
//       element=element.childNodes[path[i]];
//     }
//     element.isActive=!element.isActive;

//     setDirectory({
//        structure: cS,
//        currPath: path
//     });
//   }


//   function makeActive(path){
//    let cS=[...directory.structure];
//    let element=cS[path[0]];
//    element.isActive=true;
//    for(let i=1;i<path.length;i++){
//      element=element.childNodes[path[i]];
//      element.isActive=true;
//    }
   
//    setDirectory({
//       structure: cS,
//       currPath: path
//    });
//  }


//   function showFiles(path){
//     let filesArr=[];
//     if(path.length!==0){
//      let element=directory.structure[path[0]];
//      for(let i=1;i<path.length;i++){
//        element=element.childNodes[path[i]];
//      }

//      element.childNodes.forEach(item=>{
//        if(!item.isFolder){
//          filesArr.push(<FileElement path={item.path} name={item.name} key={item.id} content={item.content} />)
//        }
//      })

//      return filesArr;

     
//     }
//   }

//   // ========================ADDING FILES FOLDERS=====================================

//   function makeElement(isFolder, elementName){
//     let cS=[...directory.structure];
//     if(directory.currPath.length!==0){
//       let element=cS[directory.currPath[0]];
//       for(let i=1;i<directory.currPath.length;i++){
//          element=element.childNodes[directory.currPath[i]];
//       }
//       const elementPath= [...element.path, element.childNodes.length];
//       const id=uuidv4(); 
//       const newElement=new MakeFileFolder(id,elementName,elementPath, isFolder, " ");
//       element.childNodes.push(newElement);
//       setDirectory((prev)=>{
//         return{
//           ...prev,
//           structure: cS
//         }
//       });
//     } 
//   }

  
//   // ========================ADDING FILES FOLDERS END=====================================




//  // ============================EDITING FILES========================================

//  function editFile(Name,Content,Path){
//     setCurrFile({
//       name: Name,
//       content: Content,
//       path : Path
//     });

//     handleShowEditFileModal();
//   }

//   function makeEdit(path, Content){
//     let cS=[...directory.structure];
//     let element=cS[path[0]];
//     for(let i=1;i<path.length;i++){
//       element=element.childNodes[path[i]];
//     }
//     element.content=Content;

//     setDirectory((prev)=>{
//       return{
//         ...prev,
//         structure: cS
//       }
//     });

//     handleShowEditFileModal();

//   }


//   // ==========================EDITING FILES END=======================================

//   function handleShowAddFileFolderModal(name){
//     setElement(name);
//     setShowAddFileFolderModal(prevShowAddFileFolderModal=>!prevShowAddFileFolderModal);
//   }

//  // =========================INDEX AND FILES SHOW END=================================


// //=========================UNLOCK MODAL =============================================
// function handleClick(e) {
//     if (
//       one === pin[0] &&
//       two === pin[1] &&
//       three === pin[2] &&
//       four === pin[3]
//     ) {
//       setOne("");
//       setTwo("");
//       setThree("");
//       setFour("");
//       var element = document.getElementById("blackBg");

//       element.style.display = "none";
//     } else {
//       alert("Wrong pin!Retry");
//     }
//   }


// //======================UNLOCK MODAL END================================================


//  return(
//      <>
//     <LeftExplorer showAddFileFolderModalFunc={handleShowAddFileFolderModal}  directory={directory} changeState={changeState} />

    
//     <div className='files-div'>
       
//     {showFiles(directory.currPath)}
    
//   </div>

//   <button
//                 className="btn"
//                 id="lockBtn"
//                 onClick={() => {
//                   var x = document.getElementById("blackBg");

//                   x.style.display = "flex";
//                 }}
//               >
//                 <LockIcon /> Lock
//                 </button>
  

//   {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element} makeElement={makeElement} />}
//   </>
//  )

// }

// export default Child