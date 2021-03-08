'use strict'

class adminModel {
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
    
    _convertData(response) {
        let admins = []
        let len =response.response.recordset.length;

        for(var i =0; i<len; i++){
            let role =  response.response.recordset[i].CB_PUESTO;
            let name = response.response.recordset[i].CB_NOMBRES  + ' ' + response.response.recordset[i].CB_APE_PAT  + ' ' +  response.response.recordset[i].CB_APE_MAT; 
            let userID = response.response.recordset[i].CB_CODIGO;
            let email = response.response.recordset[i].CB_E_MAIL;
            let pass = response.response.recordset[i].CB_CODIGO;
            let clnrole = role.replace(/\s+/g, '');
    
           let admin = {
                id: userID,
                name: name,
                num: userID,
                email: email ,
                password: pass,
                role: clnrole,     
            }

            admins.push(admin)
        }

       
       
        return  admins
    }

   
};

module.exports = adminModel;
