'use strict'

import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';

const controller = {
	
	getBonosColab: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);

        let reporte = await model.execute(); 

		return res.status(200).send({
           reporte: reporte,
        });
    },

    getProdColab: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);

        let reporte = await model.executeProdColab(); 

		return res.status(200).send({
           reporte: reporte,
        });
    },

    getBonosColabByNum: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);
        let params = req.body;

        let reporte = await model.executeBonosColabByNum(params.num); 

		return res.status(200).send({
           reporte: reporte,
        });
    },

    getProdColabByNum: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);
        let params = req.body;

        let reporte = await model.executeProdColabByNum(params.num); 

		return res.status(200).send({
           reporte: reporte,
        });
    },

    getProdDepto: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);

        let reporte = await model.executeProdDepto(); 

		return res.status(200).send({
           reporte: reporte,
        });
    },
    

    getBonosDepto: async (req, res) => {
        const repository = new mySqlReporteRepository();
        const model = new reporteModel(repository);

        let reporte = await model.executeBonosDepto(); 

		return res.status(200).send({
           reporte: reporte,
        });
    },
    
    
    
    
};


module.exports = controller; 
