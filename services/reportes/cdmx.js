'use strict' 
import https from 'https';
import axios from 'axios';

exports.generar = () =>{

     axios.defaults.baseURL = 'https://appbono.fanosa.com/api';
    
     const route = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });

    route.get('/cdmexico/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/cdmexico/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/cdmexico/corte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 

}