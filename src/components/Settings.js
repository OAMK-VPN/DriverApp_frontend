import React, { useEffect,useState } from "react";
import {useParams,Link} from "react-router-dom";

import styles from "./Login.module.css";

import { getAllCredentials } from "../driverCredentials";
import { useNavigate } from 'react-router-dom';




export default function Settings() {
  const driverUserName = useParams().driverUserName;
  useEffect(() => {console.log(driverUserName)});

  const [emailAddress, setEmailAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const credentials = getAllCredentials();

  const printCredentials = () => { console.log(credentials); };



  const createAccountHandler = (e) => {
    e.preventDefault();
    alert('You have successfully update your account information.');
    
  };


  

  return (
    <div className={styles}>
    <form onSubmit={createAccountHandler}>
      <label>
      Email Address:
        <input
          value={emailAddress}
          onChange={event => setEmailAddress(event.target.value)}
          name="Email Address"
          type="text"
        />
      </label>
      <br />
      <label>
      Full Name: 
        <input
          value={fullName}
          onChange={event => setFullName(event.target.value)}
          name="Full Name"
          type="text"
        />
      </label>
      <br />
      <label>
      City:
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          name="City"
          type="text"
        />
      </label>
      <br />
      <label>
      Postal Code:
        <input
          value={postalCode}
          onChange={event => setPostalCode(event.target.value)}
          name="Postal Code"
          type="text"
        />
      </label>
      <br />
      <label>
      Password:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="Password"
          type="text"
        />
      </label>
      <br />
      <button>Save Changes</button> <br />
      {/* <button>Delete Account</button> <br /> */}


    </form>
    </div>
  );
}