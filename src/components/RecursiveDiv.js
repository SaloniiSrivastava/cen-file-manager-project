import React,{useState} from "react";


// let completeStructure = [{
//   name:"firstFolder",
//   parentId:"null",
//   type:"folder",
//   folderID:"101",
//   childNodes:[{
//     name:"firstFolder",
//     parentId:"null",
//     type:"folder",
//     folderID:"101"
//   }]
// },
// {
//   name:"secondFolder",
//   parentId:"null",
//   type:"folder",
//   folderID:"102",
//   childNodes:[]
// },
// {
//   name:"thirdFolder",
//   parentId:"null",
//   type:"folder",
//   folderID:"103",
//   childNodes:[]
// }]

// export default function MyReactComponent() {
//   return (
//     <>
//       {completeStructure.map(({ name, parentId,type,folderID,childNodes }) => (
//         <div className="folder outerFolder" key={folderID}>Type is {type} with the name {name} and the ID is {folderID} and has {childNodes.length} childNodes.

//         </div>

//       ))
//       }
//     </>
//   );
// }

let completeStructure = [
  {
    name: "firstFolder",
    parentId: "null",
    type: "folder",
    folderID: [0],
    childNodes: [
      {
        name: "Folder",
        parentId: "101",
        type: "folder",
        folderID: [0,0],
        childNodes :[
          {
            name: "file",
            parentId: "null",
            type: "file",
            folderID: [0,0,0],
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
    folderID: [1],
    childNodes: [],
  },
  {
    name: "thirdFolder",
    parentId: "null",
    type: "folder",
    folderID: [2],
    childNodes: [],
  },
];

function RecursiveDiv() {
  const [id, setId] = useState('');
  function handleClick(){
    
    console.log();
    
  }
  return (
    <div>
      <>
        {completeStructure.map(
          ({ name, parentId, type, folderID, childNodes }) => (
            <div className="" key={folderID}>
              {folderID}-{name} and {childNodes.length} children.
              {childNodes.map(({ name, folderID, childNodes }) => (
                  <div className="innerFolder" key={folderID} onClick={handleClick}>
                    {folderID}-{name} and {childNodes.length} children.
                    {childNodes.map(({ name, folderID, childNodes }) => (
                        <div className="innerFolder" key={folderID}>
                    {folderID}-{name} and {childNodes.length} children.
                    
                  </div>
                )
              )}
                  </div>
                )
              )}
            </div>
          )
        )}
      </>
    </div>
  );
}

export default RecursiveDiv;
