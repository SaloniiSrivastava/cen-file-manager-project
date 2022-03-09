// import React,{useState} from 'react'

// function CreateFile({data = []}) {
//     const [name, setName] = useState("");
//     //console.log(data);
//     const [FileIcon,setFileIcon] = useState(true);
    
//     function handleChange(e) {
//         setName(e.target.value);
//         //console.log(e.target.value);

       
//       }
      
//     //console.log(name);
    
//     const submitForm = (e) => {
//         e.preventDefault();
//         var element = document.getElementById("createFileBg");
//         //if(name){
//         element.style.display = "none";
//         localStorage.setItem('add','add');
//         //} else{
//          //   alert('File name cannot be empty!');
//         //}
        
//     }
//     function handleCancel(){
//         var element = document.getElementById("resetPinBlackBg");
        
//                     element.style.display = "none";
       
         
        
//     }
//     localStorage.setItem("name",name);
//     localStorage.setItem("type","file"); 
        
    
//   return (
      
//     <div className='blackBg' id="createFileBg">
//                 <div className='whiteBg file' >
                    
//                     <h3>Create File</h3>
                    
//                     <form action="" onSubmit={submitForm}>
//                         <label>Enter File Name</label>
//                         <input
//                             type="text" name="file" id="setPin" placeholder="Enter new file name" onChange={handleChange} />
                        
//                         <button className='btn'  >Create New</button>
//                         <button className='btn' id="cancelBtn" onClick={handleCancel}>Cancel</button>
//                     </form>
//                 </div>
// </div>
//   )
// }

// export default CreateFile

