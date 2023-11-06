import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

import { getAllCredentials } from "../../driverCredentials";
import { useNavigate } from 'react-router-dom';


import keys from "../../assets/images/key-chain.png"


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const credentials = getAllCredentials();

  const printCredentials = () => { console.log(credentials); };
  
  const UserInputHandler = (e) => {
    const sanitaziedInput = e.target.value.replace(/[^A-Za-z0-9]/g, '');
    setUsername(sanitaziedInput);
  }


  const loginHandler = (e) => {
    e.preventDefault();
    printCredentials();
    let isAuthenticated = false;

    credentials.forEach((credential) => {
      if (username === credential.userName && password === credential.password) {
        isAuthenticated = true;
      }
    });

    if (isAuthenticated) {
      navigate(`/${username}/ParcelsView`);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };


  

  return (
    <div className={styles.parent_form}>
      <form className={styles.form} onSubmit={loginHandler}>
      <img 
      src = {keys}
      style={{ width: '25%', height: 'auto', paddingTop: "25%", paddingBottom: "10%"}}
      />
        <label className={styles.label} htmlFor="username">Username</label>
        <input

          className={styles.login_input}
          id = "username"
          value={username}
          onChange={UserInputHandler}
          name="username"
          type="text"
          />


        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.login_input}
          id = "password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />

      
      <button className={styles.login_button}>Login</button> <br />
      <Link to={`/RestorePassword`} className={styles.restore_password}> Restore Password</Link> <br />
      <Link to={`/CreateAccount`} className={styles.create_account}> Create Account</Link>
    
    </form>
    </div>
  );
}

