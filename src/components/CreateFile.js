import React from 'react'

function CreateFile() {
    const submitForm = (e) => {
        e.preventDefault();
        var element = document.getElementById("createFileBg");
        element.style.display = "none";
    }
    function handleCancel(){
        var element = document.getElementById("resetPinBlackBg");

                    element.style.display = "none";
    }
  return (
    <div className='blackBg' id="createFileBg">
                <div className='whiteBg file' >
                    <h3>Create File</h3>
                    <form action="" onSubmit={submitForm}>
                        <label>Enter File Name</label>
                        <input
                            type="text" name="file" id="setPin" placeholder="Enter new file name" />
                        
                        <button className='btn' >Create New</button>
                        <button className='btn' id="cancelBtn" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>

            </div>
  )
}

export default CreateFile