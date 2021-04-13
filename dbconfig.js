module.exports = {
    user : process.env.NODE_ORACLEDB_USER || "appbono",
    
    password : process.env.NODE_ORACLEDB_PASSWORD || "Bshb1WIktB",
    
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "(DESCRIPTION=    (ADDRESS=      (PROTOCOL=TCP)      (HOST=ora20.fanosa.com)      (PORT=1521)    )    (CONNECT_DATA=      (SERVICE_NAME=PFANOI)    )  )",
    
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

