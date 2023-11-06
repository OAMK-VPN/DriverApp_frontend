import React from "react";
import Login from "./components/Login";
import Settings from "./components/Settings";
import CreateAccount from "./components/CreateAccount";
import RestorePassword from "./components/RestorePassword";
import ParcelsView from "./components/ParcelsView";
import ParcelDetailsView from "./components/ParcelDetailsView";

import { Routes, Route, Link} from "react-router-dom";


const App = () => {

 
  return (
    
    <div style={{marginBottom:0,}}>
       
          

      <Routes>
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


