'use strict'

const sql = require('mssql');

const config = {
  user: 'appbono',
  password: 'LeBon.1498',
  server: 'APPS01.fanosa.com',
  database: 'appbono_bd',
  port: 1433,
  options: {
      cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
      },
      enableArithAbort: true
  }
}

const appPoolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL - APPS01');
        return pool;
    })
    .catch(err => console.log('Connection to APPS01 Failed: ', err));

module.exports = { sql, appPoolPromise};