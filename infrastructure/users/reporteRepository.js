"use strict";

const { appPoolPromise } = require("../appSQLClient");

class reporteRepository {
  async find() {
    let response;
    let pool;
    const queryString = `SELECT * FROM bonos_colaboradores `;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);
    } catch (error) {
      console.log(error);
    }

    return response.recordset;
  }

  async findProdColab() {
    let response;
    let pool;
    const queryString = `SELECT * FROM produccion_colaboradores `;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);
    } catch (error) {
      console.log(error);
    }

    return response.recordset;
  }

  async findBonosDeptos() {
    let response;
    let pool;
    const queryString = `SELECT * FROM bonos_deptos `;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);
    } catch (error) {
      console.log(error);
    }

    return response.recordset;
  }

  async findProdDeptos() {
    let response;
    let pool;
    const queryString = `SELECT * FROM produccion_deptos `;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);
    } catch (error) {
      console.log(error);
    }

    return response.recordset;
  }

  async insert(equipo, semana, bono, depto, city) {
    let response;
    let pool;
    const queryString = `SELECT * FROM bonos_colaboradores WHERE semana = '${semana}' AND  depto = '${depto}'  AND city = '${city}'`;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);

      let resultados = response.recordset.length; // si es mayor a 0 se encontro la semana, entonces ya esta registrada.
      if (resultados == 0) {
        let len = equipo.length;
        for (var i = 0; i < len; i++) {
          let query = `INSERT INTO bonos_colaboradores (num, clave, bono, semana, depto, city) VALUES ('${equipo[i].num}', '21' , '${bono[i]}', '${semana}', '${depto}' ,'${city}')`;
          try {
            pool = await appPoolPromise;
            response = await pool.request().query(query);
          } catch (error) {
            console.log(error);
          }
        }
        response = {
          status: "success",
          message: "Semana  registrada.",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      } else {
        response = {
          status: "error",
          message: "Esta semana ya se encuentra registrada",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  async insertProdColab(equipo, semana, produccion, depto, city) {
    let response;
    let pool;
    const queryString = `SELECT * FROM produccion_colaboradores WHERE semana = '${semana}' AND  depto = '${depto}'  AND city = '${city}'`;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);

      let resultados = response.recordset.length; // si es mayor a 0 se encontro la semana, entonces ya esta registrada.
      if (resultados == 0) {
        let len = equipo.length;
        for (var i = 0; i < len; i++) {
          let query = `INSERT INTO produccion_colaboradores (num, clave, produccion, semana, depto, city) VALUES ('${equipo[i].num}', '21' , '${produccion}', '${semana}', '${depto}' ,'${city}')`;
          try {
            pool = await appPoolPromise;
            response = await pool.request().query(query);
          } catch (error) {
            console.log(error);
          }
        }
        response = {
          status: "success",
          message: "Semana  registrada.",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      } else {
        response = {
          status: "error",
          message: "Esta semana ya se encuentra registrada",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  async insertProdDepto(semana, produccion, depto, city) {
    let response;
    let pool;
    const queryString = `SELECT * FROM produccion_deptos WHERE fecha = '${semana}' AND  depto = '${depto}'  AND city = '${city}'`;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);

      let resultados = response.recordset.length; // si es mayor a 0 se encontro la semana, entonces ya esta registrada.
      if (resultados == 0) {
        let query = `INSERT INTO produccion_deptos (fecha, produccion, depto, city) VALUES ( '${semana}', '${produccion}' ,'${depto}' ,'${city}')`;
        try {
          pool = await appPoolPromise;
          response = await pool.request().query(query);
        } catch (error) {
          console.log(error);
        }

        response = {
          status: "success",
          message: "Semana  registrada.",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      } else {
        response = {
          status: "error",
          message: "Esta semana ya se encuentra registrada",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  async insertBonosDepto(semana, bono, depto, city) {
    let response;
    let pool;
    const queryString = `SELECT * FROM bonos_deptos WHERE fecha = '${semana}' AND  depto = '${depto}'  AND city = '${city}'`;

    try {
      pool = await appPoolPromise;
      response = await pool.request().query(queryString);

      let resultados = response.recordset.length; // si es mayor a 0 se encontro la semana, entonces ya esta registrada.
      if (resultados == 0) {
        let query = `INSERT INTO bonos_deptos (fecha, bono, depto, city) VALUES ( '${semana}', '${bono}' ,'${depto}' ,'${city}')`;
        try {
          pool = await appPoolPromise;
          response = await pool.request().query(query);
        } catch (error) {
          console.log(error);
        }
        response = {
          status: "success",
          message: "Semana  registrada.",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      } else {
        response = {
          status: "error",
          message: "Esta semana ya se encuentra registrada",
          data: {
            week: semana,
            depto: depto,
            city: city,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }

    return response;
  }
}

module.exports = reporteRepository;
