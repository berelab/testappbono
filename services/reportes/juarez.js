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

    route.get('/juarez/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/kbrs/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/juarez/mcsframe/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/aosmith/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/juarez/commscope/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/electrolux/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    route.get('/juarez/corte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/placa/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/juarez/aligerante/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/juarez/molino/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    route.get('/juarez/choferes/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    /*
    route.get('/juarez/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */

}