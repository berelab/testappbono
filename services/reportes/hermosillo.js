'use strict' 

var axios = require('axios');
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

exports.generar = () =>{
    
    //HERMOSILLO

    axios.get('/hermosillo/bloquera/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/hermosillo/corte/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/hermosillo/steelfoam/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/hermosillo/choferlocal/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/hermosillo/mantenimiento/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/hermosillo/almacen/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/hermosillo/moldeo/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    /* no funcional
    axios.get('/hermosillo/insulpanel/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/hermosillo/rotulado/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); */
    
    

}