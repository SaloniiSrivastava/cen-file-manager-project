import React,{useState} from "react";
import Tree from "./Tree"
import { ReactComponent as BigFile } from "../BigFile.svg";
import FileIcon from "./File"

const completeStructure = [
  {
    name: "firstFolder",
    parentId: "null",
    type: "folder",
    folderID: "0",
    icon:<svg width="75" height="96" viewBox="0 0 75 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.3778 12.7421H5.76294C3.00152 12.7421 0.762939 14.9807 0.762939 17.7421V90.0196C0.762939 92.781 3.00152 95.0196 5.76294 95.0196H64.3778C67.1393 95.0196 69.3778 92.781 69.3778 90.0196V17.7421C69.3778 14.9807 67.1393 12.7421 64.3778 12.7421Z" fill="#480355"/>
    <path d="M74.5259 83.2569C74.5259 86.0183 72.2873 88.2569 69.5259 88.2569H12.4875C9.72612 88.2569 7.48755 86.0183 7.48755 83.2569V5.2691C7.48755 2.50768 9.72613 0.269104 12.4875 0.269104H51.5053C52.8314 0.269104 54.1032 0.795888 55.0409 1.73357L73.0614 19.7541C73.9991 20.6918 74.5259 21.9636 74.5259 23.2896V83.2569Z" fill="#C98BB9"/>
    <path d="M35.3821 36.9781H20.6134C19.5088 36.9781 18.6134 37.8735 18.6134 38.9781V41.2629C18.6134 42.3675 19.5088 43.2629 20.6134 43.2629H35.3821C36.4867 43.2629 37.3821 42.3675 37.3821 41.2629V38.9781C37.3821 37.8735 36.4867 36.9781 35.3821 36.9781Z" fill="#480355"/>
    <path d="M59.4325 46.196H20.6134C19.5088 46.196 18.6134 47.0914 18.6134 48.196V48.2161C18.6134 49.3207 19.5088 50.2161 20.6134 50.2161H59.4325C60.5371 50.2161 61.4325 49.3207 61.4325 48.2161V48.196C61.4325 47.0914 60.5371 46.196 59.4325 46.196Z" fill="#480355"/>
    <path d="M59.4324 53.8808H20.6134C19.5088 53.8808 18.6134 54.7762 18.6134 55.8808V55.9009C18.6134 57.0055 19.5088 57.9009 20.6134 57.9009H59.4324C60.537 57.9009 61.4324 57.0055 61.4324 55.9009V55.8808C61.4324 54.7762 60.537 53.8808 59.4324 53.8808Z" fill="#480355"/>
    <path d="M59.4324 61.5657H20.6134C19.5088 61.5657 18.6134 62.4611 18.6134 63.5657V63.5858C18.6134 64.6904 19.5088 65.5858 20.6134 65.5858H59.4324C60.537 65.5858 61.4324 64.6904 61.4324 63.5858V63.5657C61.4324 62.4611 60.537 61.5657 59.4324 61.5657Z" fill="#480355"/>
    <path d="M74.5261 21.2351H53.5601V0.269104L74.5261 21.2351Z" fill="#F6DFEE"/>
    </svg>,
    childNodes: [
      {
        name: "Folder",
        parentId: "0",
        type: "folder",
        folderID: "0,0",
        childNodes :[
          {
            name: "file",
            parentId: "null",
            type: "file",
            folderID: "0,0,0",
            childNodes: [],
          }
        ]
      },
    ],
  },
  {
    name: "secondFolder",
    parentId: "null",
    type: "folder",
    folderID: "1",
    childNodes: [],
  },
  {
    name: "thirdFolder",
    parentId: "null",
    type: "folder",
    folderID: "2",
    childNodes: [],
  },
];

// function RecursiveDiv() {
//   const name = localStorage.getItem("name");


//   const [id, setId] = useState('');
//   let obj = completeStructure[0];
//   let obj2 = completeStructure[1];

 
//  //console.log(name);
//  const type = localStorage.getItem("type");
//   function handleClick(){
//   //  console.log(Object.values(obj2))
//     // console.log(Object.values(obj.folderID)); 
   
//     setId(Object.values(obj.folderID));
//     console.log(id);

   
//     completeStructure.push({name:name,
//     type:type,
//   parentId:Object.values(obj.folderID),
// folderID:[0,0,1],
// childNodes:[]});
    
//   console.log(completeStructure);
//   }
//   return (
//     <div>
//       <>
//       <h1>{name}</h1>
//         {completeStructure.map(
//           ({ name, parentId, type, folderID, childNodes }) => (
//             <div className="" key={folderID} onClick={handleClick}>
//               {folderID}-{name} and {childNodes.length} children.
//               {childNodes.map(({ name, folderID, childNodes }) => (
//                   <div className="innerFolder" key={folderID}  >
//                     {folderID}-{name} and {childNodes.length} children.
//                     {childNodes.map(({ name, folderID, childNodes }) => (
//                         <div className="innerFolder" key={folderID} >
//                     {folderID}-{name} and {childNodes.length} children.
                    
//                   </div>
//                 )
//               )}
//                   </div>
//                 )
//               )}
//             </div>
//           )
//         )}
//       </>
//     </div>
//   );
// }

  const RecursiveDiv = () => {
    

    return (
      <>
      
      <div>
        <div>
          <p>
            <div>
              <div>
              <Tree data = {completeStructure}/>
              
              </div>
            </div>
          </p>
        </div>
      </div>
      </>
    )
  }

export default RecursiveDiv;
