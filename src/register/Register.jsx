import React ,{useState}from 'react';
import styles from "./styles.module.scss";
import rightshoe from "../assets/heroShoe2.png";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes'; 


function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirm:""
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("valid",registerRoute)
   if(handleValidation()){
    console.log("complete validation")
     const {password,username,email}=values;
     const {data} = await axios.post(registerRoute,{
       username,
       email,
       password
     })
     if(data.status === false){
       alert(data.msg);
     }  
     if(data.status === true){
      navigate("/");
    }  
    
    }
  }

const handleValidation = ()=>{
  const {username,email,password,confirm}=values;
  if(password!== confirm){
    alert("password mismatch");
    return false;
  }
  else if(username.length < 3){
    alert("username should be more than 3 characters");
    return false;
  }
  else if(password.length < 3){
    alert("username should be more than 3 characters");
    return false;
  }
  else if(email=== ""){
    alert("email is required");
    return false;
  }
  return true
}


  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  return (
    <div className={styles.register}>
      <div className={styles.main}>
        <div className={styles.leftcont}>
          <form onSubmit={(e)=>{handleSubmit(e)}}> 
            <h1 className={styles.brand}>
                Register
            </h1>
            <input type="text"  name="username" placeholder='Username' onChange={handleChange}/>
            <input type="email"  name="email" placeholder='Email' onChange={handleChange}/>
            <input type="password"  name="password" placeholder='Password' onChange={handleChange}/>
            <input type="password"  name="confirm" placeholder='Confirm Password'onChange={handleChange} />
            <button type='submit'>Create User</button>
            <p>Alredy Have an Account :<Link to="/login">Login</Link> </p>
          </form>
   </div>
      <div className={styles.rightcont}>
        <h1 className={styles.textimg}>NIKE</h1>
        <img src={rightshoe} alt="" />
        <button className={styles.org}>+</button>
      </div>
      </div>
    </div>
  )
}






export default Register