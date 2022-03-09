// import React, { useState } from "react";
// import { ReactComponent as BigFile } from "../BigFile.svg";
// import { ReactComponent as BigFolder } from "../BigFolder.svg";
// import { ReactComponent as GreyFolder } from "../GreyFolder.svg";

// const FileIcon = ({ data = [] }) => {
//   // console.log("data tree")
//   // console.log(data)
//   //   const name = localStorage.getItem("name");
//   //   const type = localStorage.getItem("type");
//   //   const add = localStorage.getItem("add");
//   //   const id = localStorage.getItem("id");
//   //   const exType = localStorage.getItem("exType");
//   //   console.log("exTyte " + exType);
//   //   const newid = parseInt(id);
//   //   //console.log(data[parseInt(id)]);
//   // const arr = data;
//   //   if(add === "add" && exType === ''){
//   //     arr.push({
//   //         name: name,
//   //         type: type,
//   //     parentId: id,
//   //         folderID: newid + 1,
//   //         childNodes: [],
//   //       });
//   //       console.log(arr)
//   //   }
//   //   if (add === "add" && exType === 'folder') {
//   //     data.push({
//   //       name: name,
//   //       type: type,
//   //       parentId: id,
//   //       folderID: newid + 1,
//   //       childNodes: [],
//   //     });
//   //   }
//   //     else if (  add === 'add' && exType === 'file'){
//   //        alert('You cannot add here!!');
//   //    }

//   return (
//     <div>
//       <ul>
//         {data.map((tree) => (
//           <TreeNodes node={tree} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const TreeNodes = ({ node }) => {
//   const [childVisible, setChildVisibility] = useState(false);
//   const [visible, setVisibility] = useState(false);
//   var i = 0;
//   //    console.log(node.folderID);
//   const [id, setId] = useState("");
//   const [nodeValue, setNodeValue] = useState([]);
//   const arr = [];
//   function handleClick() {
//     setId(node.folderID);
//     //console.log(id);

//     setNodeValue(node.name);
//     //console.log(exType);
//     console.log(nodeValue);
//     setVisibility(true);
//   }
//   arr.push(nodeValue);
//   console.log(arr);

//   //       var el = document.getElementById('folderBox');
//   //       el.classList.add('activeBox');

//   //    function handleActive(){
//   //       var el = document.getElementById('folderBox');
//   //       for(var i = 0; i < node.length; i++){
//   //        el.classList.add('activeBox');
//   //       }

//   //    }

//   const hasChild = node.childNodes ? true : false;
//   const isFile = node.type === "file" ? true : false;
//   return (
//     <>
//       <div className="top">
//         <div className="leftFile">
//           <li>
//             <div onClick={(e) => setChildVisibility((v) => !v)}>
//               {hasChild && (
//                 <div
//                   className={`d-inline d-tree-toggler folder ${
//                     childVisible ? "active" : ""
//                   }`}
//                 ></div>
//               )}
//               <div className="folder" id="folderBox" onClick={handleClick}>
//                 {/* {node.folderID} */}
//                 <span>
//                   <GreyFolder />
//                   {node.name}
//                 </span>
//               </div>
//             </div>

//             {/* {hasChild && childVisible && (
//               <div className="d-tree-content">
//                 <ul className="d-flex d-tree-container flex-column">
//                   <FileIcon data={node.childNodes} />
//                 </ul>
//               </div>
//             )} */}
//           </li>
//         </div>
     

//       <div className="rightFile">
//         {/* <div onClick={(e) => setChildVisibility((v) => !v) }>
//         {hasChild && (
//           <div
//             className={`d-inline d-tree-toggler folder ${
//               childVisible ? "active" : ""
//             }`}
//           ></div>
//         )}
//        <div id="folderBoxs" className="folderBoxs" onClick={handleClick}>
//          {/* {node.folderID} 
            
//             {node.name}
            
            
//         </div>
//       </div> */}

//         {hasChild && childVisible && (
//         <div className="d-tree-content">
//           <ul className="d-flex d-tree-container flex-column">
//             <FileIcon data={node.childNodes} />
            
//           </ul>
//         </div>
//       )}

//         {visible && isFile ? (
//           <div>
//             <BigFile />
//             {node.name}
//             {/* {node.type} */}
//           </div>
//         ) : (
//           <div>
//             <BigFolder />
//             {node.name}
//             {/* {node.type} */}
//           </div>
//         )}
//       </div>
//       </div>
//     </>
//   );
// };

// export default FileIcon;
