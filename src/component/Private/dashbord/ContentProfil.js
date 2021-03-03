import React from "react";
import {
    Link
  } from "react-router-dom";
import '../../../style/Private/ContentProfil.scss';
import axios from 'axios';
import { isEmail } from "validator";
import Swal from 'sweetalert2';
import profil from './images/profil5.png';


class ContentProfil extends React.Component{
       
    constructor(props){
        let user = JSON.parse(localStorage.getItem('user'));
      
        super(props);
        this.state = { id:user.id ,nom: user.nom, tel: user.tel, type: user.type,email:user.email,  accessToken: user.accessToken, redirect: 0,charLimitnom1:5,charLimitnom2:12,charLimittel1:8,chartLimittel2:11,charLimitmot1:8,chartLimitmot2:11}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }



    handleChange = (e, { name, value }=e.target) => {
         
        this.setState({ [name]: value });
       
       }
    
    handleSubmit = (e) => {
       
        e.preventDefault()
        const { nom,tel,type,email,mot_de_passe } = this.state
        if(this.state.nom.length < this.state.charLimitnom1 || this.state.nom.length > this.state.charLimitnom2  ||  this.state.tel.length < this.state.charLimittel1 || this.state.tel.length > this.state.charLimittel2   ){
        
            Swal.fire({icon: 'error', text: 'Character Limit, nom:(entre 5 à 10) ,mot de passe (entre 8 à 11) , tel:(entre 8 à 11) Exceeded'})
        }
        else{
            let user = JSON.parse(localStorage.getItem('user'));
            axios.put(`http://localhost:8000/update/${email}`,{nom:nom,tel:tel},{headers:{'Authorization': `Bearer ${user.accessToken}` }})
            .then(res => {
              console.log(res);
              console.log(res.data);
                if(res.data){
                    Swal.fire({icon: 'success', text: 'modification bien enregistrer'})
                    let mod={
                        id: this.state.id,
                        nom:this.state.nom,
                        email: this.state.email,
                        tel: this.state.tel,
                        type: this.state.type,
                        accessToken: this.state.accessToken
                    };
                    localStorage.setItem("user",JSON.stringify(mod));
                }
                else{
                    Swal.fire({icon: 'error', text: 'error non enregist'})
                }
            })

        }
         
       //this.setState({ submittedName: nom, submittedEmail: email })
   }

      render(){
        
          return (
              <div className="edit--profil">
                   
                

                <div className="edit--profil--col1">
 
                    <div className="edit--profil--col1--titre">
                                Modifier le profil
                        </div>
                        
                        <div className="edit--profil--col1--container">

                        <div className="edit--profil--col1--container--header"><span><img src={profil} /></span></div> 

                        <form className="edit--profil--col1--container--form" onSubmit={this.handleSubmit}>

                            <div className="edit--profil--col1--container--form--nom"> 
                            <label>Nom</label>    
                            <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} placeholder="Nom" required/>    
                            </div>

                            <div className="edit--profil--col1--container--form--tel"> 
                            <label>Numero tel:</label>    
                            <input type="text" name="tel" value={this.state.tel} onChange={this.handleChange} placeholder="Numero de Telephone" required/>    
                            </div>

                            <div className="edit--profil--col1--container--form--submit">
                                <button  type="submit">Moodifier</button>
                            </div>
                            
                            
                        </form>
                        </div>

                </div>

                <div className="edit--profil--col2">
                    
                </div>

              </div>
          );
      }
}





export default ContentProfil;