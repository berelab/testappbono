'use strict' 

var jwt = require('jwt-simple');
var moment = require('moment');


exports.createToken = (user) =>{

    var clave='fanosa-app2021-0x' //clave secreta para generar token

     var payload ={
         sub: user.id,
         name: user.name,
         email: user.email,
         num: user.num,
         role: user.role,
         iat:  moment().unix(), //fecha en la que se ha creado el token
         exp: moment().add(30, 'days').unix // fecha de expiracion del token, en este caso expira en 30 dias. formato unix.
     };

     return  jwt.encode(payload, clave);
}