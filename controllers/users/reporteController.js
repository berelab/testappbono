'use strict'

import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';

const controller = {
	
	home: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);

        let reporte = await model.execute(); 

		return res.status(200).send({
           reportes: reporte,
        });
    },
    
    
};


module.exports = controller; 
