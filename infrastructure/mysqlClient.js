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

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL');
        return pool;
    })
    .catch(err => console.log('Connection Failed: ', err));

module.exports = { sql, poolPromise};


// const run = async() =>{
//   let pool;

//   try {

//       pool = await sql.connect(config);
//       const { recordset } = await sql.query`SELECT CB_APE_MAT FROM APP_COLABORA WHERE CB_CIUDAD='Hermosillo';`;
//       console.log(recordset);

//   } catch (err) {
//       console.log(err);

//   }finally{
//       await pool.close();
//       console.log('Connection closed');
//   }
// }

// run();


// module.exports = connection; 