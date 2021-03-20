'use strict'
import adminModel from '../../models/admin/adminsModels';
import adminRepositoryT from '../../infrastructure/admin/adminTRepository'; 
import adminRepositorySV from '../../infrastructure/admin/adminSVRepository';
import adminRepositorySDS from '../../infrastructure/admin/adminSDSRepository';

var validator = require('validator');
var jwt = require('../../services/jwt');

const controller = {
	home: async (req, res) => {
        const repositoryT = new adminRepositoryT();
        const repositorySDS = new adminRepositorySDS();
        const repositorySV  = new adminRepositorySV();
        
        const modelT = new adminModel(repositoryT);
        const modelSV = new adminModel(repositorySV);
        const modelSDS = new adminModel(repositorySDS);

        let  adminT = await modelT.execute(); 
        let  adminSV = await modelSV.execute(); 
        let  adminSDS = await modelSDS.execute();

        let admins = [];

        for(var i=0; i<adminT.length; i++){
            admins.push(adminT[i]);
        }  
        
        for(var i=0; i<adminSV.length; i++){
            admins.push(adminSV[i]);
        }  

        for(var i=0; i<adminSDS.length; i++){
            admins.push(adminSDS[i]);
        }  


		return res.status(200).send({
            message: 'Metodo de pruebas.',
            admins
            
        });
    },

    login: async (req, res)=>{
        const repositoryT = new adminRepositoryT();
        const repositorySDS = new adminRepositorySDS();
        const repositorySV  = new adminRepositorySV();
        
        const modelT = new adminModel(repositoryT);
        const modelSV = new adminModel(repositorySV);
        const modelSDS = new adminModel(repositorySDS);

        let  adminT = await modelT.execute(); 
        let  adminSV = await modelSV.execute(); 
        let  adminSDS = await modelSDS.execute();

        let admins = [];// juntar todos los usuarios en un solo array

        for(var i=0; i<adminT.length; i++){
            admins.push(adminT[i]);
        }  
        
        for(var i=0; i<adminSV.length; i++){
            admins.push(adminSV[i]);
        }  

        for(var i=0; i<adminSDS.length; i++){
            admins.push(adminSDS[i]);
        }  


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
        for(var i=0; i<admins.length; i++){
            let adminEmail = String(admins[i].email);
            let paramsEmail = String(params.email);
            if(paramsEmail ===  adminEmail){
                index = i;
            }
        }   

        if(index != 'no encontrado'){
            let adminPass = String(admins[index].password);
            let paramsPass = String(params.password);
            if(paramsPass === adminPass){
                
                
                //Generar token de jwt y devolverlo
                //Devolver datos
                return res.status(200).send({
                    status: 'success',
                     token: jwt.createToken(admins[index])
                });
                

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
