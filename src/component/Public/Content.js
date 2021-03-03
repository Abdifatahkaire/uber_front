import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import '../../style/Public/content.scss';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import twitter from './images/twitter.png';



class Content extends React.Component {

    render(){

        return(
            <div className="container">
            <div className="content"> 
                 <div className="content--col1"></div>
                 <div className="content--col2"> 
                     <div className="content--col2--centrer">
                         <div className="content--col2--centrer-title"><span>Toujours au rendez-vous</span></div>
                         <p className="content--col2--centrer-pagra">Bienvenu sur notre application Uber de taxi, pour réserver un taxi aux alentours de vous de maintenant. </p>
                         <div className="content--col2--centrer-button"><Link to="/inscrire"  className="content--col2--centrer-button-button">Inscrivez-vous</Link></div>
                     </div>
                 </div>
                 <div className="content--col3"></div>
            </div>

             <div className="footer">
             <div className="footer--col1"></div>
                 <div className="footer--col2"> 
                     <div className="footer--col2--ligne1">
                        <div className="footer--col2--ligne1--centrer">
                             <Link to="/" className="footer--col2--ligne1--centrer--facebook"><img src={facebook} /></Link>
                             <Link to="/" className="footer--col2--ligne1--centrer--youtube"><img src={youtube} /></Link>
                             <Link to="/" className="footer--col2--ligne1--centrer--twitter"><img src={twitter} /></Link> 
                        </div>
                     </div>
                     <div className="footer--col2--ligne2">
                         <div  className="footer--col2--ligne2--about"><Link to="/" className="footer--col2--ligne2--about--nom">About</Link></div>
                         <div  className="footer--col2--ligne2--contact"><Link to="/" className="footer--col2--ligne2--contact--nom">Contactez-nous</Link></div>
                         <div  className="footer--col2--ligne2--jobs"><Link to="/" className="footer--col2--ligne2--jobs--nom">Jobs</Link></div>
                     </div>
                     <div className="footer--col2--ligne3">
                         <div  className="footer--col2--ligne3--logo"><Link to="/" className="footer--col2--ligne3--logo--nom">@2021 CopyRight Uber</Link></div>
                     </div>
                 </div>
                 <div className="footer--col3"></div>
             </div>
        </div>
        );
    }
}



export default Content;