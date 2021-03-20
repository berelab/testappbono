'use strict'

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
    
    _convertData(response) {
        let users = []
        let len =response.response.recordset.length;

        for(var i =0; i<len; i++){
            let role =  response.response.recordset[i].CB_PUESTO;
            let name = response.response.recordset[i].CB_NOMBRES  + ' ' + response.response.recordset[i].CB_APE_PAT  + ' ' +  response.response.recordset[i].CB_APE_MAT; 
            let userID = response.response.recordset[i].CB_CODIGO;
            let email = response.response.recordset[i].CB_G_TEX_4;
            let pass = response.response.recordset[i].CB_CODIGO;
            let city = response.response.recordset[i].CB_NIVEL5;
            let depto = response.response.recordset[i].TB_ELEMENT;
            let clnrole = role.replace(/\s+/g, '');
    
           let user = {
                id: userID,
                name: name,
                num: userID,
                email: email ,
                password: pass,
                role: clnrole, 
                city: city,
                depto: depto    
            }

            users.push(user)
        }

       
       
        return users
    }

   
};

module.exports = userModel;
