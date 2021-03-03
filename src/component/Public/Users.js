import React from "react";
import axios from 'axios';



export default class Users extends React.Component{

    state = {
        users: []
    }

    componentDidMount() {

        axios.get('http://localhost:8000')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }



    renderUsers() {
        const { users } = this.state
        
        return users.map( user => (
          <div key={user.id}>{user.nom} {user.tel} {user.type} {user.email}     {user.mot_de_passe}</div>
        ))
      }
      
      render() {
        return <div>{ this.renderUsers() }</div>
      }

}