import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parcelsAPI } from "../../Instance";

import styles from "./ParcelsView.module.css";



export default function Parcel({ parcelID, date, status, role }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [parcelDetails, setParcelDetails] = useState({});
  const parcel_details_point = `/parcel/${parcelID}/role/${role}`;

  const displayDetails = () => {
    if (parcelDetails) {
      return (
        <tr>
          <td>
            <div className={styles.window_alert_div}>
              <div
                className={styles.window_alert_chdiv}>
                <div className={styles.window_alert_parcelid}>
                  <b>Tracking number:</b>
                  <br />
                  <span>Note: after you drop off the parcel, please update the page to get the latest details</span>
                </div>


                   <b>Size: </b> 
                  {parcelDetails.weigh} kg |&nbsp;
                  {parcelDetails.height * 100} x {parcelDetails.width * 100} x {parcelDetails.length * 100} 
                  &nbsp; cm<br/>
                   <b>Status:</b> {parcelDetails.status.toLowerCase().replace(/_/g, ' ')} <br/>
                   <b>Location: </b> {parcelDetails.cabinet.locker.address} <br/>
                   <b>Locker: </b> {parcelDetails.cabinet.locker.name} <br/>
                   <b>Code:</b> {parcelDetails.cabinet.code} <br/>
                   <b>Cabinet number:</b> {parcelDetails.cabinet.number} <br/>

                <button onClick = {() => setShow(false)}className={styles.alert_button}>close</button>
              </div>
            </div>
          </td>
        </tr>
      );
    }
    return null;
  };

  const fetchParcelDetails = async () => {
    setShow(!show);
    setLoading(true);
    try {
      const raw_parcelDetails = await parcelsAPI.get(parcel_details_point);
      setParcelDetails(raw_parcelDetails.data);
    } 
    catch (error) {
      navigate("/login", { replace: true});
      return;

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr onClick={fetchParcelDetails} className={styles.tableRow}>
        <td className={styles.tableC}>{parcelID}</td>
        <td className={styles.tableC}>{date.slice(0, 10)}</td>
        <td className={styles.tableC}>
          {status.toLowerCase().replace(/_/g, " ")}
        </td>
      </tr>
      {show && !loading && displayDetails()}
    </>
  );
}