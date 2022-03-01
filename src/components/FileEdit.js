import React,{useState} from 'react'

function CreateFile() {
    const [text, setText] = useState("");
    //console.log(data);
    
    function handleChange(e) {
        setText(e.target.value);
        //console.log(e.target.value);
       localStorage.setItem("text",text)
      }
      console.log(text);
      
    //console.log(name);
    
    const submitForm = (e) => {
        e.preventDefault();
        var element = document.getElementById("editFileBg");
        //if(name){
        element.style.display = "none";
        
        //} else{
         //   alert('File name cannot be empty!');
        //}
        
    }
    function handleCancel(){
        var element = document.getElementById("resetPinBlackBg");
        
                    element.style.display = "none";
       
         
        
    }
     
        
    
  return (
    <div className='blackBg' id="editFileBg">
                <div className='whiteBg edit' >
                    
                    
                    
                    <form action="" onSubmit={submitForm}>
                        <label>Edit File</label>
                        <input
                            type="text" name="file" id='edit'  placeholder="Type anything here.." onChange={handleChange} />
                            
                        <button className='btn'>Save Changes</button>
                        <button className='btn' id="cancelBtn" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>

            </div>
  )
}

export default CreateFile