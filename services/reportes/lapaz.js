'use strict' 

var axios = require('axios');
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://appbono.fanosa.com/api';

exports.generar = () =>{

    // LA PAZ
    axios.get('/lapaz/corte/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    });

    axios.get('/lapaz/bloquera/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    });  

     
    axios.get('/lapaz/almacen/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    });

    axios.get('/lapaz/choferlocal/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/lapaz/chofercedi/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    });

    axios.get('/lapaz/vigueta/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    /* pendiente 
    axios.get('/lapaz/mantenimiento/calculator')
    .then(response => {
      //console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
    

}