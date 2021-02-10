'use strict'

const mssql = require('mssql');

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

// const connection = mssql.connect(config, function(err, res){
//   if(err){
//       throw (err);
//   } else{
//       console.log("Conexión exitosa a la base de datos");
//       // app.listen(port, function(){
//       //     console.log("Prueba BD corriendo en http://localhost:"+port);
//       // });
//   }
// });

const run = async() =>{
  let pool;

  try {
      console.log('Connection Opening..');
      pool = await mssql.connect(config);
      console.log('Connected');
      const { recordset } = await mssql.query`SELECT * FROM APP_COLABORA;`;
      console.log(recordset);
  } catch (err) {
      console.log(err);

  }finally{
      await pool.close();
      console.log('Connection closed');
  }
}

run();


// module.exports = connection; 