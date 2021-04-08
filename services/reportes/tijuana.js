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

    route.get('/tijuana/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/tijuana/bono-garantia/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/tijuana/molino/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/tijuana/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/tijuana/corte/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/tijuana/cortemaq/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    route.get('/tijuana/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/tijuana/choferlocal/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    route.get('/tijuana/bonotyg/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

}