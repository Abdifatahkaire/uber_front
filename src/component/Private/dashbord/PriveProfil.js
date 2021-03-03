import React from "react";
import {
    Link
  } from "react-router-dom";
import profil from './images/profil5.png';
import '../../../style/Private/PriveProfil.scss';

import PriveHeader from './PriveHeader';
import Sidebar from './sidebar';
import ContentProfil from './ContentProfil';


class PriveProfil extends React.Component {

      constructor(props){
          super(props);

          this.logout=this.logout.bind(this);
      }

      logout() {
        localStorage.removeItem("user");
      }

    render(){

        let user = JSON.parse(localStorage.getItem('user'));

        return(
            <div className="priveHomepage"> 
                
                
                <PriveHeader  />
                <Sidebar />
                <ContentProfil />
                
              
            </div>
        );
    }
}



export default PriveProfil;