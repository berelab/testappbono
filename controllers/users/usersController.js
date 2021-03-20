'use strict'
import usersModel from '../../models/users/usersModel';
import usersRepository from '../../infrastructure/users/usersRepository'; 

var validator = require('validator');
var jwt = require('../../services/jwt');

const controller = {
	home: async (req, res) => {
        const repository = new usersRepository();
    
        
        const modelUsr = new usersModel(repository);
    
        let  users = await modelUsr.execute(); 
    
		return res.status(200).send({
            message: 'Metodo de pruebas.',
            users
            
        });
    },

    login: async (req, res)=>{
        const repository = new usersRepository();
    
        
        const modelUsr = new usersModel(repository);
    
        let  users = await modelUsr.execute(); 

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
                
                
                //Generar token de jwt y devolverlo
                //Devolver 
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
                

           }else{
            return res.status(404).send({
                status: 'error',
                message: 'Contraseña no valida',
            

             });
           }

        }else{
            return res.status(404).send({
                status: 'error',
                message: 'Email no valido'
             });
        }

        
        

    
      
    }

};

 
module.exports = controller; 
