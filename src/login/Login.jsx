import React ,{useState}from 'react';
import styles from "./styles.module.scss";
import rightshoe from "../assets/heroShoe2.png";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes'; 


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username:"",
    password:"",
   
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("valid",loginRoute)
   if(handleValidation()){
    
     const {password,username}=values;
     const {data} = await axios.post(loginRoute,{
       username,
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
  const {username,password}=values;
  if(username === ""){
    alert("password and username are required");
    return false;
  }
  else if(password === ""){
    alert("password and username are required");
    return false;
  }
  return true
}


  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <div className={styles.leftcont}>
          <form onSubmit={(e)=>{handleSubmit(e)}}> 
            <h1 className={styles.brand}>
                Login
            </h1>
            <input type="text"  name="username" placeholder='Username' onChange={handleChange} min="3"/>
            
            <input type="password"  name="password" placeholder='Password' onChange={handleChange}/>
            
            <button type='submit'>Login</button>
            <p>Don't Have an Account :<Link to="/register">register</Link> </p>
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






export default Login