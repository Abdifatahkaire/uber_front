import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect,
    useParams,
    useRouteMatch,useHistory 
  } from "react-router-dom";
import '../../style/Public/connecter.scss';
import axios from 'axios';
import AuthService from '../../service/auth.service';
import Swal from 'sweetalert2';
import { isEmail } from "validator";




class Connecter extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {email: '',  mot_de_passe: '', loading: false,message: "",redirect: 0,vemail:false,testEmail:false }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange = (e, { name, value }=e.target) => {

      
        this.setState({ [name]: value })
        if(e.target.name=="email"){
            
           
           if(isEmail(e.target.value)){
           this.setState({vemail:true});
           axios.get(`http://localhost:8000/${e.target.value}`)
           .then(res => {
             console.log(res);
             console.log(res.data);
              if(res.data){
                  this.setState({testEmail:true});
              }
              else if(!res.data){
               this.setState({testEmail:false});
              }
           })
             
          }


        }

 

    }


    handleSubmit = (e) => {
       
        e.preventDefault();

   
        if(this.state.vemail==false){
            Swal.fire({icon: 'error', text: 'that is not email'})
        }else{ 
         
            if(this.state.testEmail==false){
                Swal.fire({icon: 'error', text: "cette email n'existe pas"})
            }else{ 
        const {email,mot_de_passe } = this.state
        axios.post("http://localhost:8000/signin", {email:email,mot_de_passe:mot_de_passe})
        .then(response => {
            if(response.data) {
              localStorage.setItem("user", JSON.stringify(response.data));
              this.setState({redirect:1});
            }
            else{
                Swal.fire({icon: 'error', text: 'mot de passe error'});
            }
            
            
            

            return console.log(response.data);
          })
         
        }
       
        }
        //this.setState({ submittedName: nom, submittedEmail: email })
    }

    render(){
        return (
         <div>{this.state.redirect ?  <Redirect to="/dashboard" /> : 
         
            <div className="connecter">
                <div className="connecter--col1"></div>
                <div className="connecter--col2">
                    
                        <div className="connecter--col2--header"><span>Se Connecter-vous</span></div>

                        <form className="connecter--col2--form" onSubmit={this.handleSubmit}>
                            
                            <div className="connecter--col2--form--email"> 
                                <label>Email:</label>    
                                <input type="text" name="email"  value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>    
                            </div>

                            <div className="connecter--col2--form--motpasse"> 
                            <label>Mot de passe:</label>    
                            <input type="password" name="mot_de_passe"  value={this.state.mot_de_passe} onChange={this.handleChange} placeholder="mot de passe" required/>       
                            </div>

                            <div className="connecter--col2--form--submit">
                                <button  type="submit">Submit</button>
                            </div>
                            
                        </form>
                    
                </div>
                <div className="connecter--col3"></div>
            </div>
         
         }</div>

            
        );
    }
}


export default Connecter;