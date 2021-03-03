'use strict'
import produccionModel from '../../models/lapaz/choferProduccionModel';
import mySqlProduccionRepository from '../../infrastructure/lapaz/choferProduccionRepository';


const controller = {
	
	home: async (req, res) => {
        const repository = new mySqlProduccionRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
            
            produccion: produccion.semanas,
            
        });
    },
  

};


module.exports = controller; 