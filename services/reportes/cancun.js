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


    route.get('/cancun/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/cancun/corte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/cancun/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/cancun/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    /*
    route.get('/cancun/trafico/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
 
}