import React from "react";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings.js";
import CreateAccount from "./components/SignUp/CreateAccount.js";
import RestorePassword from "./components/RestorePassword/RestorePassword.js";
import ParcelsView from "./components/ParcelsAllViews/ParcelsView.js";
import ParcelDetailsView from "./components/ParcelsAllViews/ParcelDetailsView.js";

import { Routes, Route, Link} from "react-router-dom";


const App = () => {

 
  return (
    
    <div style={{marginBottom:0,}}>
       
          

      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/:driverUserName/ParcelsView" element={<ParcelsView />} />
          <Route path="/:driverUserName/Parcels/:parcelID"  element={<ParcelDetailsView />} />
          <Route path="/:driverUserName/Settings"  element={<Settings />} />

          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/RestorePassword" element={<RestorePassword />} />
         
          {/* <Route path="Settings/:id"  element={<Settings />} /> */}

          
       
      </Routes>
    </div>
  
  );
  
};


export default App;


