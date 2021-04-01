'use strict' 

var axios = require('axios');
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

exports.generar = () =>{

    axios.get('/juarez/bloquera/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/kbrs/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/juarez/mcsframe/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/aosmith/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/juarez/commscope/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/electrolux/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    
    axios.get('/juarez/corte/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/placa/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/juarez/aligerante/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/almacen/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/juarez/molino/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
 
    axios.get('/juarez/choferes/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    axios.get('/juarez/mantenimiento/calculator')
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

}