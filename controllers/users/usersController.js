'use strict'
import usersModel from '../../models/users/usersModel';
import usersRepository from '../../infrastructure/users/usersRepository'; 

var validator = require('validator');
var jwt = require('../../services/jwt');
var nodemailer = require('nodemailer'); 
var smtpTransport = require('nodemailer'); 
var fs = require('fs'); 
var handlebars = require('handlebars'); 


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
       

        let saveUsers = await modelUsr.saveUsers(newUsers);

        
		return res.status(200).send({
            message: 'Usuarios guardados.',
            newUsers
           
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
                /* pendiente activar
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

        if(changepass[0]==1){
          changepass[0] = 'success'
        }else{
            changepass[0] = 'error'
        }

        /* pendiente activar
        if(user.length > 0){
            sendInfo(user[0]);
        }
        */

        return res.status(200).send({
            status: changepass[0],
            user:{name: user[0].name, num: user[0].num}
            
         });
    },

    // envia su contraseña a cada uno de los colaboradores.
    email: async (req, res) => {
        const repository = new usersRepository();
        const modelUsr = new usersModel(repository);
        
        /*
        let  users = await modelUsr.executeUsers(); 
       
       for(var i =0; i<users.length; i++){
         //sendEmail(users[i]); 
       }
       */

       return res.status(200).send({
        message: 'Emails enviados'
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

 
let sendCode = (user, code)=>{

    var readHTMLFile = function(path, callback) {
     fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
         if (err) {
             throw err;  
         }
         else {
             callback(null, html);
         }
     });
     };
 
 
     // Definimos el transporter
     var transporter = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
            user: 'appbonofanosa@gmail.com',
            pass: 'AppBonoFanosa21!'
         }
     });
 
     readHTMLFile(__dirname + '/views/sendcode.html', function(err, html) {
         var template = handlebars.compile(html);
         var replacements = {
             username: user.name,
             usercode: code
        };
         var htmlToSend = template(replacements);
         var mailOptions = {
             from: 'appbonofanosa@gmail.com',
             to : user.email,
             subject : 'Código de acceso APP FANOSA',
             html : htmlToSend
          };
          transporter.sendMail(mailOptions, function (error, response) {
             if (error) {
                 console.log(error);
             }
         });
     });
 
    
 }
 
 let sendInfo = (user)=>{
    
     var readHTMLFile = function(path, callback) {
         fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
             if (err) {
                 throw err; 
             }
             else {
                 callback(null, html);
             }
         });
         };
     
     
         // Definimos el transporter
         var transporter = nodemailer.createTransport({
             service: 'Gmail',
             auth: {
                user: 'appbonofanosa@gmail.com',
                pass: 'AppBonoFanosa21!'
             }
         });
     
         readHTMLFile(__dirname + '/views/sendinfo.html', function(err, html) {
             var template = handlebars.compile(html);
             var replacements = {
                 username: user.name
            };
             var htmlToSend = template(replacements);
             var mailOptions = {
                 from: 'appbonofanosa@gmail.com',
                 to : user.email,
                 subject : 'Actualización de contraseña',
                 html : htmlToSend
              };
              transporter.sendMail(mailOptions, function (error, response) {
                 if (error) {
                     console.log(error);
                    
                 }
             });
         });
 }

 
module.exports = controller; 
