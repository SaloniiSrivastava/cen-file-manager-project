// import { ReactComponent as FileIcon } from "../AddFile.svg";
// import { ReactComponent as FileIconDark } from "../AddFileDark.svg";
// import { ReactComponent as FolderIcon } from "../AddFolder.svg";
// import { ReactComponent as FolderIconDark } from "../AddFolderDark.svg";
// import { ReactComponent as LockIcon } from "../LockFolder.svg";
// import { ReactComponent as Logo } from "../logo1.svg";
// import { ReactComponent as LogoDark } from "../logo_dark.svg";
// import RecursiveDiv from "./RecursiveDiv";
//  //import { useNavigate } from "react-router-dom";

// import React,{useState}  from "react";
// import { ReactComponent as BigFile } from "../BigFile.svg";

// import { ReactComponent as GreyFolder } from "../GreyFolder.svg";
// import { ReactComponent as GreyFile } from "../GreyFile.svg";



// const Navbar = ({ data = [] }) => {
//   //let navigate = useNavigate();
//   //const[lightIcon,setLightIcon] = useState(true);
//   const theme = localStorage.getItem("theme");

//   const light = theme === 'Light' ? true : false;
 

//    return (
//      <>
//     <div className="app-sidebar-content">
//      {/*  {light ?  <Logo className="logo" /> : <LogoDark className="logo"/>}
//       <div >
//         <div className="side addBtn">
//           <button className="addFile">
//             {light ? <FileIcon /> : <FileIconDark/>}
//             Add file
//           </button>
//           <button className="addFile">
//             {light ? <FolderIcon /> : <FolderIconDark/>}
//             Add folder
//           </button>
//         </div> end here */ 

//         /* <div className="folder outerFolder">
//           <GreyFolder />
//           Some Folder Name
//         </div>
//         <div className="folder innerFolder">
//           <GreyFolder />
//           Folder Name 2
//         </div>
//         <div className="folder innerFolder">
//           <GreyFolder />
//           Folder 3
//         </div>
//         <div className="folder innerFolder">
//           <GreyFolder />
//           Folder 4
//         </div>
//         <div className="folder innerFolder">
//           <GreyFolder />
//           File 1
//         </div>
//         <div className="folder outerFolder">
//           <GreyFolder />
//           Some Folder Name
//         </div>
//         <div className="folder outerFolder">
//           <GreyFolder />
//           Some Folder Name
//         </div> */}
//          <div>
//          <ul>
//         {data.map((tree) => (
//           <TreeNode node={tree} />
//         ))}
//       </ul>
//       {/* </div>
//         <div className="lock">
//           {/* <RecursiveDiv></RecursiveDiv> 
         
//           <button
//             className="btn"
//             id="lockBtn"
//             onClick={() => {
//               var x = document.getElementById("blackBg");

//               x.style.display = "flex";
//             }}
//           >
//             <LockIcon />
//             Lock
//           </button>
//         </div> */}
        
//       </div>
     
//      </div>


//      </>
//   );
// };


// const TreeNode = ({ node }) => {
//   const [childVisible, setChildVisibility] = useState(false);
//   //    console.log(node.folderID);
//   const [id, setId] = useState("");
//   const [exType, setExType] = useState("");
//   const [nodeName, setNodeName] = useState("");
//   const hasChild = node.childNodes ? true : false;

//   function handleClick() {
//     setId(node.folderID);
//     //console.log(id);

//     setExType(node.type);
//     //console.log(exType);
//     setNodeName(node.name);
//     console.log(nodeName);
//     //       var el = document.getElementById('folderBox');
//     //       el.classList.add('activeBox');
//     localStorage.setItem("nodeName", nodeName);
//     <div> {node.childNodes}</div>
    
//   }

//   function handleActive(e) {
//     console.log(e.target.value)
//     var el = document.getElementsByClassName("folder");
//       el.classList.add("activeBox");
    
    
//   }

//   localStorage.setItem("id", id);
//   localStorage.setItem("exType", exType);

 
//   const isFile = node.type === 'file' ? true : false;
//   const isChild = node.childNode? true : false; 
//   var el = document.getElementsByClassName("folder");
  
//   let children = el.childNodes;
//   console.log(children)
//   return (
//     <>
     
       
//           <li>
//             <div onClick={(e) => setChildVisibility((v) => !v)}>
//               {hasChild && (
//                 <div
//                   className={`d-inline d-tree-toggler folder  ${
//                     childVisible ? "active" : ""
//                   }`}
//                 ></div>
//               )}
//               <div className="folder" id="folderBox"  onClick={handleClick}>
//                 {/* {node.folderID} */}
//                 <span onClick={handleActive}>
//                   {isFile ?<GreyFile/> : <GreyFolder/>}
//                   {node.name} </span>
//               </div>
//             </div>

//             {hasChild && childVisible && (
//               <div className="d-tree-content">
//                 <ul className="d-flex d-tree-container flex-column">
//                   <Navbar data={node.childNodes} />
//                 </ul>
//               </div>
//             )}
//           </li>

//       {/* {isChild ?
//        <div>
//       <Navbar data={node.childNodes} />
      
//       <BigFile/>
  
//       {node.name}
  
//       </div> : null }  */}
        
       
//          <span className="breadCrumbs">{nodeName} / </span>
      

//          {hasChild && childVisible && (
//               <div className="d-tree-content">
//                 <ul className="d-flex d-tree-container flex-column">
//                   <Navbar data={node.childNodes} />
//                 </ul>
//               </div> )}
       
//     </>
//   );
//             };

// export default Navbar;
