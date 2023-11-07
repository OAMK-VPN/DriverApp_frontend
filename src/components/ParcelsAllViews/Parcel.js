import React from "react";
import styles from "./Parcel.module.css";
import { Link } from "react-router-dom";

/* This component is used to display a single parcel in the parcels view. */

export default function Parcel({ driverUserName, parcelID, date, name, status }) {
  return (
    <tr className={styles} data-testid={`parcel-${parcelID}`}>
      
      
      
      <td> <Link to={`/${driverUserName}/parcels/${parcelID}`}> {parcelID}</Link> </td> <td> {date} </td> <td> {name} </td> <td> {status} </td> 
      
      
     
    </tr>
  );
}
