import { ReactComponent as Group } from "./Group 5.svg";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Logo} from '../logo1.svg';
import React,{ useState} from "react";
import { ReactComponent as DarkMode } from "../logo_dark.svg";



const useHeader = () => {
  let navigate = useNavigate();
   
   
  
   const [pin, setPin] = useState('');
  const [pass, setPass] = useState('');

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) =>{
    console.log(e.target.value);
    e.preventDefault();
    const newEntry = {pin:pin, repin:pass};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
    console.log(newEntry); 
    
      
    var regex=/^[0-9]+$/;
    if(pin.match(regex) && pass.match(regex)){
      if(pin === pass){
        if(pin.length === 4 && pass.length===4){
        navigate('/home');
        alert('Congratulations!Your pin is saved successfully');
        
      
        } else {
          
          setPin('');
          setPass('');
          alert('The pin can only be a 4 digit number!');
          
        }
      } else{
        setPin('');
          setPass('');
        alert('The pin you have entered do not match! Please re-enter your pin!');
      }

    }else{
      setPin('');
          setPass('');
      alert('You can only enter numbers!');
    }
  
    // navigate('/home');
    // alert('Your pin has been saved successfully');
  }
  localStorage.setItem('pin',pin);
  
  var currTheme = localStorage.getItem("theme");
   
  if(currTheme === null){
    localStorage.setItem("theme",'Dark');
  }

  

    return (   
          
        <header>
       
        <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/>
        <Logo className="logo" id="lightLogo" />
        <DarkMode id="darkLogo"/>

       
  <div className="max">
        <div className="left">
          <h1>Welcome to your dashboard</h1>
          <p> This is the homepage of your file explorer, set your pin and start </p>
          <Group />
        </div>
        
        <div className="outer">
          <div className="right">
            <h3>Set your account pin</h3>
            <form onSubmit={submitForm}>
              <input
               type="password" name="setPin" id ="setPin" placeholder="Enter new pin" value={pin} required onChange={(e) => setPin(e.target.value)} />
               
              <input  type="password" name="rePin" id ="rePin" placeholder="Confirm new pin" value={pass} required onChange={(e) =>setPass(e.target.value) }  />
              {/* <button className='btn'onClick={handleClick}>Save Changes</button> */}
              <button className='btn'>Save Changes</button>
            </form>
          </div>
        </div>
        </div>
      </header>
      
      
    )
  };
  
  export default useHeader;