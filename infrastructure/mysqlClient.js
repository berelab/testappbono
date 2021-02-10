'use strict'

const sql = require('mssql');

//create connection
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

const connection = sql.connect(config, (err) => {
  if(err){
    console.error('Error connecting: ' + err);
  }
  console.log("SQL connected");
});

const run = async() =>{
  let pool;

  try {

      pool = await sql.connect(config);
      const { recordset } = await sql.query`SELECT * FROM APP_COLABORA;`;
      console.log(recordset);

  } catch (err) {
      console.log(err);

  }finally{
      await pool.close();
      console.log('Connection closed');
  }
}

run();


module.exports = connection; 