'use strict'
import bonosModel from '../../models/lapaz/bloqueraBonosModel';
import mySqlBonosRepository from '../../infrastructure/lapaz/bloqueraBonosRepository';


const controller = {
	
	home: async (req, res) => {
        const repository = new mySqlBonosRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },
  

};


module.exports = controller; 
