import React from "react";
import { isEmail } from "validator";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import '../../style/Public/Inscrivez.scss';
import axios from 'axios';
import VerifierEmail from '../../service/VerifierEmail';
import Swal from 'sweetalert2';


  
class Inscrivez extends React.Component {
   

     constructor(props){
         super(props);
         this.state = { nom: '', tel: '', type: '',email: '',  mot_de_passe: '', redirect: 0,vemail:false ,testEmail:false}
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
     }

     handleChange = (e, { name, value }=e.target) => {
         
         this.setState({ [name]: value })
         if(e.target.name=="email"){
             
             if (!isEmail(e.target.value)) {
            
              
                console.log('This is not a valid email')
              
                this.setState({vemail:true});
                console.log(this.state.vemail);
                this.setState({testEmail:false});
          
           }
           else if(isEmail(e.target.value)){
            this.setState({vemail:false});
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
     
     handleSubmit = () => {

       const { nom,tel,type,email,mot_de_passe } = this.state

        if(this.state.vemail==false && this.state.testEmail==false){
           
            const { nom,tel,type,email,mot_de_passe } = this.state
            axios.post('http://localhost:8000', { nom: nom, tel: tel, type: type, email: email, mot_de_passe: mot_de_passe })
            .then(res => {
              console.log(res);
              console.log(res.data);
             
            })

           this.setState({redirect:1});
        }
        
        
        //this.setState({ submittedName: nom, submittedEmail: email })
    }

    render(){

        return (<div className="">{this.state.redirect ? <Redirect to="/connecter" /> : 
       
        <div className="Inscrirez">
                <div className="Inscrirez--col1"></div>

                <div className="Inscrirez--col2">

                   <div className="Inscrirez--col2--header"><span>Inscrivez-vous</span></div> 

                   <form className="Inscrirez--col2--form" onSubmit={this.handleSubmit}>

                     <div className="Inscrirez--col2--form--nom"> 
                      <label>Nom</label>    
                     <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} placeholder="Nom" required/>    
                     </div>

                     <div className="Inscrirez--col2--form--tel"> 
                      <label>Numero tel:</label>    
                     <input type="text" name="tel" value={this.state.tel} onChange={this.handleChange} placeholder="Numero de Telephone" required/>    
                     </div>

                     <div className="Inscrirez--col2--form--type"> 
                      <label>Type d'inscription:</label>    
                       <select value={this.state.type} name="type" onChange={this.handleChange} required>
                        
                           <option  value="Utilisateurs" >Utilisateurs</option>
                           <option value="Chauffeurs" >Chauffeurs</option>
                       </select>
                     </div>  

                     <div className="Inscrirez--col2--form--email"> 
                      <label>Email:</label>    
                     <input type="text" name="email"  value={this.state.email} onChange={this.handleChange} placeholder="Email" required   />    
                     </div>
                     {this.state.vemail ? 
                     <div className="Inscrirez--col2--form--validation--email"> 
                        <label>ceci n'est pas un mail valid</label>    
                     </div> : ''}
                     {this.state.testEmail ? 
                     <div className="Inscrirez--col2--form--validation--email"> 
                        <label>cette mail est déja existe</label>    
                     </div> : ''}
                     
                     <div className="Inscrirez--col2--form--motpasse"> 
                      <label>Mot de passe:</label>    
                     <input type="password" name="mot_de_passe"  value={this.state.mot_de_passe} onChange={this.handleChange} placeholder="mot de passe" required/>    
                     </div>

                     <div className="Inscrirez--col2--form--submit">
                         <button  type="submit">Submit</button>
                     </div>
                    
                     
                   </form>
                </div>

                <div className="Inscrirez--col3"></div>
            </div>
           
        }</div>
            
        );
    }
}








export default Inscrivez;