import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

import { getAllCredentials } from "../driverCredentials";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const credentials = getAllCredentials();

  const printCredentials = () => { console.log(credentials); };



  const getPassword = (e) => {
    e.preventDefault();
    printCredentials();
    let isUserFound = false; 
    let password ='';

    credentials.forEach((credential) => {
      if (username === credential.userName ) {
        isUserFound = true; password = credential.password;
      }
    });

    if (isUserFound) {
      alert('Username: '+username+' Password: '+password);
    } else {
      alert('No such an user was found. Please try again.');
    }
  };


  

  return (
    <div className={styles}>
    <h1>Restore Password</h1>
    <form onSubmit={getPassword}>
      <label>
        Username:
        <input
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      </label>
      <br />
      <button>Restore</button> <br />
    </form>
    </div>
  );
}
