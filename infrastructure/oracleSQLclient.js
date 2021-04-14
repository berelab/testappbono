'use strict'
let connection;
const oracledb = require('oracledb');
const dbconfig = require('../dbconfig');


const oracleConnection = async(query) => {
  try {
    connection = await oracledb.getConnection({
      user          : "appbono",
      password      : "Bshb1WIktB",
      connectString : dbconfig.connectString
    });

    const result = await connection.execute(
     query
    );
    
    console.log("Connected to ORACLE - PFANOI");
    return result

  } catch (err) {
    console.error("Error:", err.message);
  } 
}

module.exports = {oracledb, dbconfig, oracleConnection}