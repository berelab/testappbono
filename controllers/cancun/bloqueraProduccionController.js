'use strict'
import produccionModel from '../../models/cancun/moldeoProduccionModel';
import SQLproduccionRepository from '../../infrastructure/cancun/MoldeoProdRepo';


const controller = {
	
	home: async (req, res) => {
        const repository = new SQLproduccionRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    },
  

};


module.exports = controller; 
