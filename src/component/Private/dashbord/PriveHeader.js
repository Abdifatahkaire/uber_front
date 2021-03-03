import React from "react";
import {
    Link,Redirect
  } from "react-router-dom";
import profil from './images/profil2.png';
import '../../../style/Private/PriveHeader.scss';

import logout from './images/logout1.png';




class PriveHeader extends React.Component{
   
    constructor(props){
        super(props);
       this.state={redirect: 0};
      this.logout=this.logout.bind(this);
     
    }


    
    logout() {
        localStorage.removeItem("user");
        this.setState({redirect: 1});
      }

    

    render(){

        return(
            <div>
             {this.state.redirect ? <Redirect to="/" /> :  
            <div className="PriveHeader">
                <div className="PriveHeader--col1"> </div>
                <div className="PriveHeader--col2" value={48}>
                    <div className="PriveHeader--col2--logo"><Link to="/dashboard" className="PriveHeader--col2--logo--logo">Uber</Link></div>
                    <nav className="PriveHeader--col2--nav" value={74}>
                       
                        <div className="PriveHeader--col2--nav--profil" ><img src={logout} onClick={this.logout} />
                                
                        </div>
                        
                        
                        
                    </nav>
                </div>
                <div className="PriveHeader--col3"> </div>
               
            </div>
            }  
            </div>
        );
    }
}



export default PriveHeader;