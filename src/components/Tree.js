import React,{useState} from 'react'

const Tree = ({data = []}) => {
    const name = localStorage.getItem("name");
    const type = localStorage.getItem("type");
    const add = localStorage.getItem("add");
    const id = localStorage.getItem("id");
     const newid = parseInt(id);
    console.log(data[parseInt(id)]);
    if( add === 'add'){
        if(data.childNodes.length >= 1 )
        data.push({name:name,
         type:type,
        parentId:id,
        folderID:newid+1,
        childNodes:[]});
    }
    

  return (
    <div>
        <ul>
            {data.map(tree => (
                <TreeNode node ={tree}/>
            ))}
        </ul>
       
    </div>
  )
}

const TreeNode = ({node}) => {
    const [childVisible,setChildVisibility] = useState(false);
   console.log(node.folderID);
   const [id,setId] = useState('');
   const [folderName,setFolderName] = useState('');
  

     function handleClick(){
        setId(node.folderID);
        console.log(id);
     }
    
     localStorage.setItem('id',id);

     

    const  hasChild = node.childNodes ? true : false;

    return(
        <li >
            <div  onClick={e => setChildVisibility( v => !v)}> 
                {hasChild &&(
                    <div className={`d-inline d-tree-toggler folder ${childVisible ? "active" : ""}`}>

                    </div>
                ) }
                <div className='folder'  onClick={handleClick}> 
                    {node.folderID}
                    {node.name}
                    
                </div>
                
            </div>

            {
                hasChild && childVisible && <div className='d-tree-content'>
                    <ul className='d-flex d-tree-container flex-column'>
                        <Tree data={node.childNodes}/>
                    </ul>
                </div>
            }
        </li>
    )
}

export default Tree
