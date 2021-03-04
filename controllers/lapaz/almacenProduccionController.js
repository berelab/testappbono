'use strict'
import produccionModel from '../../models/lapaz/almacenProduccionModel';
import SQLProduccionRepository from '../../infrastructure/lapaz/almacenProduccionRepository';


const controller = {
	
	home: async (req, res) => {
        const repository = new SQLProduccionRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
            
            produccion: produccion.semanas,
            
        });
    },
  

};


module.exports = controller; 
