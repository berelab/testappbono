'use strict'

const mssql = require('mssql');

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

const connection = mssql.connect(config, (err) => {
  if(err){
    console.error('error connecting: ' + err);
  } else{
      console.log("SQL connected");
  }
});

const run = async() =>{
  // let pool;

  try {
      // console.log('Connection Opening..');
      // pool = await mssql.connect(config);
      // console.log('Connected');
      const { recordset } = await connection.query`SELECT * FROM APP_COLABORA;`;
      console.log(recordset);
  } catch (err) {
      console.log(err);

  }finally{
      await connection.close();
      console.log('Connection closed');
  }
}

run();


module.exports = connection; 