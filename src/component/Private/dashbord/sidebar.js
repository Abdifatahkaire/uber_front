import React from "react";
import {
    Link
  } from "react-router-dom";
import '../../../style/Private/sidebar.scss';
import profil from './images/profil5.png';
import icons_map from './images/icons_map4.png';
import profil_p1 from './images/profil_p1.png';

class Sidebar extends React.Component {
     
    constructor(props){
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        
        this.state={nom:user.nom}
    }

    componentDidMount(){

        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({nom:user.nom});
    }



    render(){
        
        return(
            <div className="sidebar">

                <div className="sidebar--header">
                    <div className="sidebar--header--image"><img src={profil} /></div>
                    <div className="sidebar--header--nom"><span>{this.state.nom}</span></div>
        
                </div>

                <div className="sidebar--content">
                   <Link className="sidebar--content--ligne1"  to="/dashboard/profil">
                        <div className="sidebar--content--ligne1--content">
                            <div className="sidebar--content--ligne1--content--logo"> <img src={profil_p1} />  </div>
                            <div className="sidebar--content--ligne1--content--titre">
                                <span>Gérer votre compte Uber</span>
                            </div>
                        </div>
                   </Link>
                   <Link className="sidebar--content--ligne2"  to="/dashboard">
                      <div className="sidebar--content--ligne2--content"> 
                        <div className="sidebar--content--ligne2--content--logo"> <img src={icons_map} />  </div>
                        <div className="sidebar--content--ligne2--content--titre"><span>Map</span></div>
                      </div> 
                   </Link>
                </div>
                
            </div>
        );
    }
}




export default Sidebar;