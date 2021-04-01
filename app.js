'use strict'

import cron from 'node-cron';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import generarReporteLP  from  './services/reportes/lapaz';

const app = express();
const local_port = 3000;


cron.schedule('00 12 * * 7', function() { //   '00 12 * * 7'  ->minuto 00 a las 12pm   todos los dias  todos los meses que sea domingo(7).
     generarReporteLP.generar();

});

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/api'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || local_port);
app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
});


