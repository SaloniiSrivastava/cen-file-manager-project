// import React,{useState} from "react";
// import Tree from "./Tree"
// import { ReactComponent as BigFile } from "../BigFile.svg";
// import FileIcon from "./File"

// const completeStructure = [
//   {
//     name: "firstFolder",
//     parentId: "null",
//     type: "folder",
//     folderID: 0,
//     childNodes: [
//       {
//         name: "Folder",
//         parentId: 0,
//         type: "folder",
//         folderID: 0.0,
//         childNodes :[
//           {
//             name: "file",
//             parentId: 0.0,
//             type: "file",
//             folderID: 0.01,
//             childNodes: [],
//           }
//         ]
//       },
//     ],
//   },
//   {
//     name: "secondFolder",
//     parentId: "null",
//     type: "folder",
//     folderID: 1,
//     childNodes: [],
//   },
//   {
//     name: "thirdFolder",
//     parentId: "null",
//     type: "folder",
//     folderID: 2,
//     childNodes: [],
//   },
// ];

// // function RecursiveDiv() {
// //   const name = localStorage.getItem("name");


// //   const [id, setId] = useState('');
// //   let obj = completeStructure[0];
// //   let obj2 = completeStructure[1];

 
// //  //console.log(name);
// //  const type = localStorage.getItem("type");
// //   function handleClick(){
// //   //  console.log(Object.values(obj2))
// //     // console.log(Object.values(obj.folderID)); 
   
// //     setId(Object.values(obj.folderID));
// //     console.log(id);

   
// //     completeStructure.push({name:name,
// //     type:type,
// //   parentId:Object.values(obj.folderID),
// // folderID:[0,0,1],
// // childNodes:[]});
    
// //   console.log(completeStructure);
// //   }
// //   return (
// //     <div>
// //       <>
// //       <h1>{name}</h1>
// //         {completeStructure.map(
// //           ({ name, parentId, type, folderID, childNodes }) => (
// //             <div className="" key={folderID} onClick={handleClick}>
// //               {folderID}-{name} and {childNodes.length} children.
// //               {childNodes.map(({ name, folderID, childNodes }) => (
// //                   <div className="innerFolder" key={folderID}  >
// //                     {folderID}-{name} and {childNodes.length} children.
// //                     {childNodes.map(({ name, folderID, childNodes }) => (
// //                         <div className="innerFolder" key={folderID} >
// //                     {folderID}-{name} and {childNodes.length} children.
                    
// //                   </div>
// //                 )
// //               )}
// //                   </div>
// //                 )
// //               )}
// //             </div>
// //           )
// //         )}
// //       </>
// //     </div>
// //   );
// // }

//   const RecursiveDiv = () => {
    

//     return (
//       <>
      
//       {/* <div>  */}
//         {/* <div> */}
//           {/* <p>  */}
//             {/* <div>  */}
//               <div> 
//               <Tree data = {completeStructure}/>
              
//               </div>
//             {/* </div>
//           </p>
//         </div>
//       </div> */}
//       </>
//     )
//   }

// export default RecursiveDiv;
