
import axios from "axios";


class VerifierEmail {
   
    isExistEmail(email){
        axios.get(`http://localhost:8000/${email}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
           return res.data;
        })
    }
}




export default new VerifierEmail();