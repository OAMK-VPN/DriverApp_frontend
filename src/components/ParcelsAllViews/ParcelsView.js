import React, {useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import styles from "./ParcelsView.module.css";
import { getAllParcels } from "../../parcels";
import Parcel from "../Parcel";


const ParcelsView = () => {
  const parcels = getAllParcels();
/* when the backend codings are ready, it will be modified to  
  useEffect(() => {
    fetch("localhost:3000/parcels")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []); */

  const driverUserName = useParams().driverUserName;
  useEffect(() => {console.log(driverUserName)});
     
  return (
    <div>
      <h1>Posti</h1>
      <nav>
      {/* <img src={imagePath} alt="Placeholder" /> */}
        <Link to="/sent">Send  </Link>
        <Link to="/history">History  </Link>
        <Link to="/track">Track  </Link> <br/>
        <Link to={`/${driverUserName}/Settings`}> Settings  </Link> 
      </nav>
      

      <div className={styles.parcelsTable}>
      <table className={styles.th}>      
      <thead> <tr> <th>Parcel ID</th> <th>Date</th> <th>Name</th> <th>Status</th> </tr>  </thead>
      <tbody>
        {parcels.map((parcel) => (
          
          <Parcel
            driverUserName={driverUserName}
            parcelID={parcel.id}
            date={parcel.date}
            name={parcel.name}
            status={parcel.status}
            key={parcel.id}
          /> 
          
        ))}
      </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ParcelsView;
