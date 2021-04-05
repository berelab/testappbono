'use strict'

import cron from 'node-cron';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import generarReporteLP  from  './services/reportes/lapaz';
import fs from 'fs';
import https from 'https';

const app = express();
const local_port = 3000;

const key = 'C:\\certificates\\appbono.fanosa.com-crt.pem';
const cert = 'C:\\certificates\\appbono.fanosa.com-key.pem';

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

https.createServer({
    key: fs.readFileSync(key),
    cert: fs.readFileSync(cert)
}).listen(app.get('port'), ()=> {
    console.log('https Listening on port: ', app.get('port'));
})

// app.listen(app.get('port'), () => {
//     console.log('Listening on port: ', app.get('port'));
// });


