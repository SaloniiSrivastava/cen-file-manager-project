
import {useNavigate} from "react-router-dom";


import React from 'react'

function Login () {
    
    let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
    alert('Your pin is set up successfully')
  }
      
//     state={
//        setPin: '',
//        rePin: '' 
//     }

//  handleChange = (e) =>{
//           const {name,value} = e.target
//           this.setState({[name]:value})
//     }
//   handleSubmit = (e) =>{

//     e.preventDefault();


 return (
     <div>
    <h3>Set your account pin</h3>
    <form>
      <input
        type="password" name="setPin"   id="" placeholder="Enter new pin" required onChange={this.handleChange} />
      <input  type="password" name="rePin" id="" placeholder="Confirm new pin" required onChange={this.handleChange} />
      <button className='btn' onClick={handleClick}>Save Changes</button>
    </form>
    </div>
 ) 
  }
 
    
        
   
  


export default Login;