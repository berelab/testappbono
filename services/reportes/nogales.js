'use strict' 

var axios = require('axios');
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

exports.generar = () =>{

    //NOGALES

    axios.get('/nogales/corte/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/nogales/bloquera/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/nogales/moldeo/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/nogales/almacen/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/nogales/choferlocal/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/nogales/preexpansion/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/nogales/mantenimiento/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 



}