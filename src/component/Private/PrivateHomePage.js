import React from "react";
import {
    Link
  } from "react-router-dom";
import PriveHeader from './dashbord/PriveHeader';
import Sidebar from './dashbord/sidebar';

import '../../style/Private/PrivateHomePage.scss';
import Map from './map/map';

class PrivateHomePage extends React.Component {
    
  
    render(){

        return(
            <div className="priveHomepage"> 
                
                
                <PriveHeader  />
                <Sidebar />
                <Map /> 
                
                
              
            </div>
        );
    }
}



export default PrivateHomePage;