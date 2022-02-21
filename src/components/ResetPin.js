import React, { useState } from 'react';
//import { useNavigate } from "react-router-dom";


function ResetPin() {
    //let navigate = useNavigate();
    const [pin, setPin] = useState("");
    const [pass, setPass] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        localStorage.setItem('pin',pin);
        const newEntry = { pin: pin, repin: pass };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        var regex = /^[0-9]+$/;
        if (pin.match(regex) && pass.match(regex)) {
            if (pin === pass) {
                if (pin.length === 4 && pass.length === 4) {
                    //navigate('/home');
                    var element = document.getElementById("resetPinBlackBg");

                    element.style.display = "none";
                    alert('Congratulations!Your pin has been updated!');
                } else {


                    alert('The pin can only be a 4 digit number!')
                }
            } else {

                alert('The pin you have entered do not match! Please re-enter your pin!');
            }

        } else {
            alert('You can only enter numbers!');
        }
    }
    function handleCancel(){
        var element = document.getElementById("resetPinBlackBg");

                    element.style.display = "none";
    }

        return (

            <div className='blackBg' id="resetPinBlackBg">
                <div className='whiteBg resetPin'>
                    <h3>Reset your account pin</h3>
                    <form action="" onSubmit={submitForm} >
                        <input
                            type="password" name="setPin" id="setPin" placeholder="Enter new pin" value={pin} required onChange={(e) => setPin(e.target.value)} />
                        <input type="password" name="rePin" id="rePin" placeholder="Confirm new pin" value={pass} required onChange={(e) => setPass(e.target.value)} />
                        {/* <button className='btn'onClick={handleClick}>Save Changes</button> */}
                        <button className='btn'>Save Changes</button>
                        <button className='btn' id="cancelBtn" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>

            </div>





        );
    };

    export default ResetPin