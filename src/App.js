import logo from './logo.svg';
import './App.css';
import PublicHomePage from './component/Public/PublicHomePage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Header from './component/Public/Header';
import Content from './component/Public/Content';
import Inscrirez from "./component/Public/Inscrivez";
import Connecter from './component/Public/Connecter';
import PriveHeader from './component/Private/dashbord/PriveHeader';
import Map from './component/Private/map/map';
import Profil from './component/Private/dashbord/PriveProfil';
import PrivateHomePage from './component/Private/PrivateHomePage';


class App extends React.Component{



    constructor(props){
      super(props);
    
      this.state={loggedIn:false}
     
    }
   
  

  render(){
   
    return(
 <Router>
    
        <Switch>   
          <Route exact path="/">
               <PublicHomePage /> 
          </Route>
          <Route exact path="/dashboard/profil">
               <Profil  /> 
          </Route>
          <Route exact path="/dashboard">
               <PrivateHomePage /> 
          </Route>
          
          <Route exact path="/connecter">
              <div> 
                <Header />
                <Connecter />
              </div>
          </Route>
          
          <Route exact path="/inscrire">
              <div> 
                <Header />
                <Inscrirez />
              </div>
          </Route>
        </Switch>
      
    </Router>);
  }
}

export default App;
