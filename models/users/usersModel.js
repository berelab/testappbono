'use strict'
import convertData from '../../controllers/ConvertData'

class userModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.find();
        } catch(error) {
            throw error;
        }

     
        return this._convertData(response);
    }

    async executeUsers() {
        let response;

        try {
            response = await this.repository.findUsers();
        } catch(error) {
            throw error;
        }

        return  response.response.recordset;
    }

    async executeClr() {
        let response;

        try {
            response = await this.repository.clear();
        } catch(error) {
            throw error;
        }

        return  response.response.recordset;
    }

    async saveUsers(users) {
        let response;

        try {
            response = await this.repository.insert(users);
        } catch(error) {
            throw error;
        }

        return response;
    }

    // obtener el depto ciudad role actual.
    async getUserInfo(num) {
        let response;
        let info;
        try {
            response = await this.repository.findInfo(num);
        } catch(error) {
            throw error;
        }

        if(response.response.recordset.length==0){
            info = 'error' //no se encontro en la base de datos
        }else{
            info =response.response.recordset[0]
        }

        return info ;
    }


    //usado para enviar un email despues de actualizar la password. 
    async getUser(num) {
        let response;

        try {
            response = await this.repository.findUser(num);
        } catch(error) {
            throw error;
        }

        return  response.response.recordset;
    }

    
    async updatePass(num, password) {
        let response;

        try {
            response = await this.repository.update(num, password);
        } catch(error) {
            throw error;
        }

        return response.response.rowsAffected;
    }

    async passSent(num) {
        let response;

        try {
            response = await this.repository.updatePassSent(num);
        } catch(error) {
            throw error;
        }

        return response.response.rowsAffected;
    }
    
    _convertData(response) {
        let users = []
        let admins = [];
        let len =response.response.recordset.length;

        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ123456789";

        for(var i =0; i<len; i++){
            let role =  response.response.recordset[i].puesto;
            let name = response.response.recordset[i].nombre  + ' ' + response.response.recordset[i].a_paterno  + ' ' +  response.response.recordset[i].a_materno; 
            let userID = response.response.recordset[i].codigo;
            let email = response.response.recordset[i].email;
            let planta = response.response.recordset[i].planta;
            let depto = response.response.recordset[i].depto;

            let ciudad =  response.response.recordset[i].ciudad;
            
            let clncity = planta.replace(/\s+/g, ''); //limpiar espacios en blanco
            let clnrole = role.replace(/\s+/g, '');

            let cd = new convertData(null, null,clncity, depto,ciudad);
            
            let cityrute = cd.convertCity; // planta convertida para ser usada en la ruta en el front.
            let deptorute = cd.convertDepto; // depto convertido para ser usada en la ruta en el front.

            let pass = "";
            for (var k=0; k<8; k++){
                pass +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
            }

            if(clnrole == '039' || clnrole == '230' || clnrole == '056'){
                let admin = {
                    id: userID,
                    name: name,
                    num: userID,
                    email: email ,
                    password: pass,
                    role: clnrole, 
                    city: cityrute,
                    depto: depto  
                }
    
                admins.push(admin)
            }else{
                let user = {
                    id: userID,
                    name: name,
                    num: userID,
                    email: email ,
                    password: pass,
                    role: clnrole, 
                    city: cityrute,
                    depto: deptorute    
                }
                if(deptorute != 'no-valido'){ //solo agregar los colaboradores con departamentos que si estan en la app
                    users.push(user)  
                } 
                
            }
          
        }

        for(var i=0; i < admins.length; i++){
            users.push(admins[i]);
        }

       
       
        return users
    }


   
};

module.exports = userModel;
