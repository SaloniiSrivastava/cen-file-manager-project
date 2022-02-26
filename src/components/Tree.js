import React,{useState} from 'react'

const Tree = ({data = []}) => {
    // console.log("data tree")
    // console.log(data)
    const name = localStorage.getItem("name");
    const type = localStorage.getItem("type");
    const add = localStorage.getItem("add");
    const id = localStorage.getItem("id");
    const exType = localStorage.getItem("exType");
     const newid = parseInt(id);
    console.log(data[parseInt(id)]);
    if( add === 'add' && (exType === 'folder' || exType === null) ){
        data.push({name:name,
         type:type,
        parentId:id,
        folderID:newid+1,
        childNodes:[]});
    } else if (  add === 'add' && exType === 'file'){
        alert('You cannot add here!!');
    }
    localStorage.setItem('add','');
    
   
    

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
//    console.log(node.folderID);
   const [id,setId] = useState('');
   const [exType,setExType] = useState('');
   const [nodeName, setNodeName] = useState('');
   const [allEntry, setAllEntry] = useState([]);
  

     function handleClick(){

        setId(node.folderID);
        // console.log(id);
        setExType(node.type);
        // console.log(exType);
        setNodeName(node.name);
        console.log(nodeName);
        //  var el = document.getElementById('folderBox');
        //  el.classList.add('activeBox');
        
        
        
     }
     function handleActive(){
        var el = document.getElementById('folderBox');
         el.classList.add('activeBox');
      
     }
    
     localStorage.setItem('id',id);
     localStorage.setItem('exType',exType);
     

    const  hasChild = node.childNodes ? true : false;

    return(
        <li >
            <div  onClick={e => setChildVisibility( v => !v)}> 
                {hasChild &&(
                    <div className={`d-inline d-tree-toggler folder ${childVisible ? "active" : ""}`}>

                    </div>
                ) }
                <div className='folder' id='folderBox' onClick={handleClick}> 
                    {/* {node.folderID}  */}
                    <span onClick={handleActive}>{node.name}</span>
                    
                    
                </div>
              
            </div>

            {
                hasChild && childVisible && <div className='d-tree-content'>
                    <ul className='d-flex d-tree-container flex-column' >
                        <Tree data={node.childNodes}/>
                    </ul>
                </div>
            }
        </li>
    )
}

export default Tree
