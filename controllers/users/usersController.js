'use strict'
import usersModel from '../../models/users/usersModel';
import usersRepository from '../../infrastructure/users/usersRepository'; 

var validator = require('validator');
var jwt = require('../../services/jwt');
var nodemailer = require('nodemailer'); // email sender 

const controller = {
    clear: async (req, res) => {  
        
        const repository = new usersRepository();
        const modelUsr = new usersModel(repository);
        let  clear = await modelUsr.executeClr(); 
        
		return res.status(200).send({
            message: 'Tabla limpiada.'
        });
    
    },

    save: async (req, res) => {  
        
        const repository = new usersRepository();
        const modelUsr = new usersModel(repository);
        let  users = await modelUsr.execute(); 
        /*
        let  users2 = await modelUsr.executeUsers(); 

        let newUsers =[];
        

        for(var i =0; i<users.length; i++){
            let nuevo = 'no-encontrado';
            let num = users[i].num;
            for(var k =0; i<users2.length; i++){
                let num2 = users2[k].num;
                if(num == num2){
                   nuevo = 'encontrado';
                }
            } 

            if(nuevo=='no-encontrado'){
                newUsers.push(users[i]);
            }
        }
        */

        let saveUsers = await modelUsr.saveUsers(users);

        
		return res.status(200).send({
            message: 'Metodo para guardar los usuarios.',
           
        });
    
    
    },

	home: async (req, res) => {
        const repository = new usersRepository();
        const modelUsr = new usersModel(repository);
        
        let  users = await modelUsr.executeUsers(); 
    
		return res.status(200).send({
            message: 'Metodo de pruebas.',
            users
            
        });
    },

    login: async (req, res)=>{
        const repository = new usersRepository();
    
        
        const modelUsr = new usersModel(repository);
    
        let  users = await modelUsr.executeUsers(); 

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
                /*no activar aun
                
                 if(users[index].role == '230' || users[index].role == '039' || users[index].role == '056'){
                    //sendCode(users[index], code); // enviar codigo de autentificacion solo a admins
                 }
                */
                
                //Generar token de jwt y devolverlo
                return res.status(200).send({
                    status: 'success',
                    token: jwt.createToken(users[index] , code)
                });

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

    },

    // pendiente adaptar en repository
    changePass:  async (req, res)=>{
        const repository = new usersRepository();
        const modelUsr = new usersModel(repository);
        var params = req.body;

        let  changepass = await modelUsr.updatePass(params.num, params.password); 
        let user = await modelUsr.getUser(params.num); 

      
        if(user.length > 0){
            sendInfo(user[0]);
        }

        return res.status(200).send({
            changepass
         });
    },

    
    resendCode:  async (req, res)=>{
        var params = req.body;
        sendCode(params,params.code); 
        return res.status(200).send({
            message: 'Codigo reenviado',
            dest: params.email
         });
    },

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


let sendInfo = (user)=>{
   
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
        subject: 'Actualizacion de contraseña',
        text: `Hola ${user.name}, el motivo de este mensaje es informar que el cambio de contraseña para su cuenta de APP FANOSA se ha realizado con exito.`
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
