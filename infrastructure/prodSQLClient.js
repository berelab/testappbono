'use strict'

const sql = require('mssql');

const config = {
  user: 'appbono',
  password: 'LeBon.1498',
  server: 'prodsql08.fanosa.com',
  database: 'FAN_BONO',
  port: 1433,
  options: {
      cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
      },
      enableArithAbort: true
  }
}

const prodPoolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL - PROD');
        return pool;
    })
    .catch(err => console.log('Connection to PROD Failed: ', err));

module.exports = { sql, prodPoolPromise};