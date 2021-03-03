import React from "react";
import {
    Link
  } from "react-router-dom";
import '../../style/Public/header.scss';
import Content from './Content';
import Inscrirez from "./Inscrivez";

class Header extends React.Component{


    render(){

        return(
            <div className="header">
                <div className="header--col1"> </div>
                <div className="header--col2">
                    <div className="header--col2--logo"><Link to="/" className="header--col2--logo--logo">Uber</Link></div>
                    <nav className="header--col2--nav">
                       
                        <Link to="/connecter" className="header--col2--nav--conecter"><span>Se Connecter</span></Link>
                        <Link to="/inscrire" className="header--col2--nav--inscrire"><span>S'inscrire</span></Link>
                    </nav>
                </div>
                <div className="header--col3"> </div>
               
            </div>
        );
    }
}


export default Header;



























