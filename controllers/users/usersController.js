'use strict'
import usersModel from '../../models/users/usersModel';
import usersRepository from '../../infrastructure/users/usersRepository'; 

var validator = require('validator');
var jwt = require('../../services/jwt');
var nodemailer = require('nodemailer'); // email sender 

const controller = {
	home: async (req, res) => {
        const repository = new usersRepository();
    
        
        const modelUsr = new usersModel(repository);
    
        let  users = await modelUsr.execute(); 
        let  pruebas =    {
            id: 200123,
            name: 'Admin de pruebas',
            num: 200123,
            email: 'admin@admin.com' ,
            password: '123',
            role: '230', 
            city: 'SC',
            depto: 'TEST'    
        }

        users.push(pruebas);
    
		return res.status(200).send({
            message: 'Metodo de pruebas.',
            users
            
        });
    },

    login: async (req, res)=>{
        const repository = new usersRepository();
    
        
        const modelUsr = new usersModel(repository);
    
        let  users = await modelUsr.execute(); 
        let  pruebas =    {
            id: 200123,
            name: 'Admin de pruebas',
            num: 200123,
            email: 'admin@admin.com' ,
            password: '123',
            role: '230', 
            city: 'SC',
            depto: 'TEST'    
        }

        users.push(pruebas);

        //recoger parametros 
        var params = req.body;

        //validar datos
        var validate_email = !validator.isEmpty(params.email) &&  validator.isEmail(params.email);
        var validate_password = !validator.isEmpty(params.password);

        if(!validate_email || !validate_password){
            return res.status(200).send({
                message: 'Credenciales no incorrectas.',
             });
        }
        
        

        let index = 'no encontrado';
        for(var i=0; i<users.length; i++){
            let userEmail = String(users[i].email);
            let paramsEmail = String(params.email);
            if(paramsEmail ===  userEmail){
                index = i;
            }
        }   

        if(index != 'no encontrado'){
            let userPass = String(users[index].password);
            let paramsPass = String(params.password);
            if(paramsPass === userPass){

                //generar el codigo de auth
                var ctrs = "ABCDEFGHJKMNPQRTUVWXYZ123456789";
                var code = "";
                for (var k=0; k<6; k++){
                    code +=ctrs.charAt(Math.floor(Math.random()*ctrs.length)); 
                }

                //Enviar email con el codigo de auth
                /*pendiente*/
                
                //Generar token de jwt y devolverlo
                return res.status(200).send({
                    status: 'success',
                    token: jwt.createToken(users[index] , code)
                });
                /*
                if (params.gettoken) {
                    return res.status(200).send({
                        status: 'success',
                        token: jwt.createToken(users[index])
                    });
                } else {
                    return res.status(200).send({
                        status: 'success',
                        user: users[index]
                    });
                }    
                */

           }else{
            return res.status(200).send({
                status: 'error',
                message: 'Contraseña no valida',
            

             });
           }

        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Email no valido'
             });
        }

        
        

    
      
    }

};


let sendEmail = (user)=>{
   
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'correo remitente',
            pass: 'pass'
        }
    });

    // Definimos el email
    var mailOptions = {
        from: 'FANOSA APP',
        to: user.email,
        subject: 'Clave de acceso APP FANOSA',
        text: `Hola ${user.name} el motivo de este mensaje es para compartirte tu primera clave para acceso a la APP DE FANOSA, posteriormente podras cambiarla dentro de la misma App. CLAVE: ${user.password}`
        };

       
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
        if (error){
            return 'Email no enviado'
        } else {
           return   'Email enviado'
        }
        });

        
}
 
let sendCode = (user, code)=>{
   
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'correo remitente',
            pass: 'pass'
        }
    });

    // Definimos el email
    var mailOptions = {
        from: 'FANOSA APP',
        to: user.email,
        subject: 'Clave de acceso APP FANOSA',
        text: `Hola ${user.name}, tu codigo de autentificación es: ${code}`
        };

       
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
        if (error){
            return 'Email no enviado'
        } else {
           return   'Email enviado'
        }
        });

        
}

 
module.exports = controller; 
