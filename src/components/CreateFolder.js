// import React,{useState} from 'react'

// function CreateFolder() {
//     const [foldername, setFolderName] = useState("");

//     function handleChange(e) {
//         setFolderName(e.target.value);
//         //console.log(e.target.value);
       
//       }
     
//       function handleCancel(){
        
//         var element = document.getElementById("resetPinBlackBg");

//                     element.style.display = "none";
          
//     }

//     const submitForm = (e) => {
//         e.preventDefault();
//         var element = document.getElementById("createFolderBg");
        
//         element.style.display = "none";
//         localStorage.setItem('add','add');
        
//     }
   
//     localStorage.setItem("name",foldername);
//     localStorage.setItem("type","folder");
//   return (
//     <div className='blackBg'  id="createFolderBg">
//                 <div className='whiteBg file'>
//                     <h3>Create Folder</h3>
//                     <form action='' onSubmit={submitForm} >
//                     <label>Enter Folder Name</label>
//                         <input
//                             type="text" name="folder" id="setPin" placeholder="Enter new folder name" onChange={handleChange} />
                        
//                         <button className='btn'>Create New</button>
//                         <button className='btn' id="cancelBtn" onClick={handleCancel}>Cancel</button>
//                     </form>
//                 </div>

//             </div>
//   )
// }

// export default CreateFolder