'use strict' 
import https from 'https';
import axios from 'axios';

exports.generar = () =>{

     axios.defaults.baseURL = 'https://appbono.fanosa.com/api';
    /**
     const route = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });
     */

    //pendientes todos.
    /*
    axios.get('/mexicali/choferes/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/mexicali/rotulado/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/mexicali/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/mexicali/produccion/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/mexicali/mantenimiento/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
}