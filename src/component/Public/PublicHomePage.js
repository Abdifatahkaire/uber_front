import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Header from './Header';
import Content from './Content';
import Inscrirez from "./Inscrivez";

class PublicHomePage extends React.Component {

constructor(props){

  super(props);


}



  render(){
    return (

      
          <div>
            <Header />
            
           <Content />
             
        </div>

       
     
    );
  }
    
  }




  export default PublicHomePage;