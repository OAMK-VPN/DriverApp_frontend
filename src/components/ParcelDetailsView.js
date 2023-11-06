import React, { useEffect } from "react";
import { getParcelById } from "../parcels";
import {useParams,Link} from "react-router-dom";

const ParcelDetailsView = () => {

  const driverUserName = useParams().driverUserName;
  const parcelID = useParams().parcelID;
  useEffect(() => {console.log(parcelID)});

  const parcel = getParcelById(parcelID);

  return (
    <div>
      <table> <caption>Parcel Details</caption>
      
      <tbody>
      <tr>
      <ul >
      <li>Sender Name: {parcel.name}</li>
      <li>Sender Email: {parcel.senderEmail}</li>
      <li>Sender Address: {parcel.senderAddress}</li>
      <li>Recipient Name: </li>
      <li>Recipient Email: {parcel.recipientEmail}</li>
      <li>Recipint Address: {parcel.recipientAddress}</li>
      </ul>   
      </tr>
      <tr>
      <ul >
      <li>Parcel ID: {parcel.id}</li>
      <li>Parcel Sizes: </li>
      <li>Parcel Weight: </li>
      <li>Drop Off: </li>
      <li>Pickup Location: </li>
      <li>Date: {parcel.date}</li>
      <li>Status: </li>
      <li>One-time code: </li>
      <Link to={`/${driverUserName}/ParcelsView`}> Back to parcels overview</Link>
      
      
      </ul>    
      </tr>
      </tbody>
      </table>

      

      
    </div>
  );
};

export default ParcelDetailsView;
