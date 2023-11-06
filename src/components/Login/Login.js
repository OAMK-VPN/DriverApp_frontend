import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

import { getAllCredentials } from "../../driverCredentials";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const credentials = getAllCredentials();

  const printCredentials = () => { console.log(credentials); };



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
    <div className={styles.form}>
    <form onSubmit={loginHandler}>
      <label htmlFor="username">Username </label>
        <input
          id = "username"
          className={styles.logininput}
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      <br />
      <label>
        Password: 
        <input
          className={styles.logininput}
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button className={styles.loginbutton}>Login</button> <br />
      <Link to={`/RestorePassword`}> Restore Password</Link> <br />
      <Link to={`/CreateAccount`}> Create Account</Link>
    </form>
    </div>
  );
}

