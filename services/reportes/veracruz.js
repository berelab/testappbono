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

    /*
    route.get('/veracruz/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
    
    route.get('/veracruz/corte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/veracruz/emcorte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/veracruz/moldeo/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    /*
    route.get('/veracruz/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */

    /*
    route.get('/veracruz/almacen-cedi/calculator')
    .then(response => {
     // console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
 
    route.get('/veracruz/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/veracruz/steelfoam/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    route.get('/veracruz/choferlocal/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    /*
    route.get('/veracruz/chofer-cedi/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    */ 
    
    route.get('/veracruz/panel/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
}