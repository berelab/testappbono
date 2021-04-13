"use strict";
import usersModel from "../../models/users/usersModel";
import usersRepository from "../../infrastructure/users/usersRepository";
import convertData from "../ConvertData";
var validator = require("validator");
var jwt = require("../../services/jwt");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer");
var fs = require("fs");
var handlebars = require("handlebars");

const controller = {
  clear: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);
    let clear = await modelUsr.executeClr();

    return res.status(200).send({
      message: "Tabla limpiada.",
    });
  },

  save: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);
    let users = await modelUsr.execute();

    let users2 = await modelUsr.executeUsers();

    let newUsers = [];

    for (var i = 0; i < users.length; i++) {
      let nuevo = "no-encontrado";
      let num = users[i].num;
      for (var k = 0; k < users2.length; k++) {
        let num2 = users2[k].num;
        if (num == num2) {
          nuevo = "encontrado";
        }
      }

      if (nuevo == "no-encontrado") {
        newUsers.push(users[i]);
      }
    }

    let saveUsers = await modelUsr.saveUsers(newUsers);

    return res.status(200).send({
      message: "Nuevos usuarios encontrados y guardados.",
      newUsers,
    });
  },

  home: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);

    let users = await modelUsr.executeUsers();
    let userData = [];
    for (var i = 0; i < users.length; i++) {
      let userInfo = await modelUsr.getUserInfo(users[i].num);
      if (userInfo != "error") {
        let clncity = userInfo.planta.replace(/\s+/g, ""); //limpiar espacios en blanco

        let clnrole = userInfo.puesto.replace(/\s+/g, "");
        //Convertir
        let cd = new convertData(
          null,
          null,
          clncity,
          userInfo.depto,
          userInfo.ciudad
        );
        //agregar al usuario encontrado
        let cityRoute = cd.convertCity;
        let deptoRoute = cd.convertDepto;

        let user = {};

        if (clnrole == "039" || clnrole == "230" || clnrole == "056") {
          user = {
            id: users[i].id,
            name: users[i].name,
            num: users[i].num,
            email: users[i].email,
            password: users[i].password,
            role: clnrole,
            city: cityRoute,
            depto: userInfo.depto,
          };

          userData.push(user);
        } else {
          user = {
            id: users[i].id,
            name: users[i].name,
            num: users[i].num,
            email: users[i].email,
            password: users[i].password,
            role: clnrole,
            city: cityRoute,
            depto: deptoRoute,
          };

          userData.push(user);
        }
      }
    }

    return res.status(200).send({
      message: "Usuarios validos.",
      userData,
    });
  },

  login: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);
    let users = await modelUsr.executeUsers();

    //recoger parametros
    var params = req.body;

    //validar datos
    var validate_email =
      !validator.isEmpty(params.email) && validator.isEmail(params.email);
    var validate_password = !validator.isEmpty(params.password);

    if (!validate_email || !validate_password) {
      return res.status(200).send({
        message: "Credenciales no incorrectas.",
      });
    }

    let index = "no encontrado";
    for (var i = 0; i < users.length; i++) {
      let userEmail = String(users[i].email);
      let paramsEmail = String(params.email);
      if (paramsEmail === userEmail) {
        index = i;
      }
    }

    if (index != "no encontrado") {
      let userPass = String(users[index].password);
      let paramsPass = String(params.password);
      if (paramsPass === userPass) {
        //Buscar el depto y ciudad actual del usuario encontrado
        let userInfo;
        if(users[index].num=='15177'){
          userInfo ={
             planta: 'Hmo',
             puesto: '230',
             depto:'Testing'
          }
        }else{
           userInfo = await modelUsr.getUserInfo(users[index].num);
        }
       

        if (userInfo != "error") {
          let clncity = userInfo.planta.replace(/\s+/g, ""); //limpiar espacios en blanco

          let clnrole = userInfo.puesto.replace(/\s+/g, "");
          //Convertir
          let cd = new convertData(
            null,
            null,
            clncity,
            userInfo.depto,
            userInfo.ciudad
          );
          //agregar al usuario encontrado
          let cityRoute = cd.convertCity;
          let deptoRoute = cd.convertDepto;

          let user = {};

          if (clnrole == "039" || clnrole == "230" || clnrole == "056") {
            user = {
              id: users[index].id,
              name: users[index].name,
              num: users[index].num,
              email: users[index].email,
              password: users[index].password,
              role: clnrole,
              city: cityRoute,
              depto: userInfo.depto,
            };
          } else {
            user = {
              id: users[index].id,
              name: users[index].name,
              num: users[index].num,
              email: users[index].email,
              password: users[index].password,
              role: clnrole,
              city: cityRoute,
              depto: deptoRoute,
            };
          }

          //generar el codigo de auth
          var ctrs = "ABCDEFGHJKMNPQRTUVWXYZ123456789";
          var code = "";
          for (var k = 0; k < 6; k++) {
            code += ctrs.charAt(Math.floor(Math.random() * ctrs.length));
          }

          //Enviar email con el codigo de auth
          
            if(user.role == '230' || user.role == '039' || user.role == '056'){
                sendCode(user, code); // enviar codigo de autentificacion solo a admins
                console.log('correo enviado')
            }
            

          //Generar token de jwt y devolverlo
          return res.status(200).send({
            status: "success",
            token: jwt.createToken(user, code),
            //encontrado: users[index],
            //info: userInfo,
            //user: user,
          });
        } else {
          return res.status(200).send({
            status: "error",
            message: "Usuario no valido.",
          });
        }
      } else {
        return res.status(200).send({
          status: "error",
          message: "Contraseña no valida",
        });
      }
    } else {
      return res.status(200).send({
        status: "error",
        message: "Email no valido",
      });
    }
  },

  // pendiente adaptar en repository
  changePass: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);
    var params = req.body;

    let changepass = await modelUsr.updatePass(params.num, params.password);
    let user = await modelUsr.getUser(params.num);

    if (changepass[0] == 1) {
      changepass[0] = "success";
    } else {
      changepass[0] = "error";
    }

    /* pendiente activar
        if(user.length > 0){
            sendInfo(user[0]);
        }
        */

    return res.status(200).send({
      status: changepass[0],
      user: { name: user[0].name, num: user[0].num },
    });
  },

  // envia su contraseña a cada uno de los colaboradores.
  email: async (req, res) => {
    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);

      // codigo enrque- 10233
      let  users = await modelUsr.getUser('10233');
       for(var i =0; i<users.length; i++){
         sendEmail(users[i]); 
       }
      

    return res.status(200).send({
      message: "Emails enviados",
      users: users[0].email
    });
  },

  resendCode: async (req, res) => {
    var params = req.body;
    sendCode(params, params.code);
    return res.status(200).send({
      message: "Codigo reenviado",
      dest: params.email,
    });
  },
};

let sendCode = (user, code) => {
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "appbonofanosa@gmail.com",
      pass: "AppBonoFanosa21!",
    },
  });

  readHTMLFile(__dirname + "/views/sendcode.html", function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: user.name,
      usercode: code,
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: "appbonofanosa@gmail.com",
      to: user.email,
      subject: "Código de acceso APP FANOSA",
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      }
    });
  });
};


let sendEmail = (user) => {
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "appbonofanosa@gmail.com",
      pass: "AppBonoFanosa21!",
    },
  });

  readHTMLFile(__dirname + "/views/sendpass.html", function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: user.name,
      userpassword:user.password,
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: "appbonofanosa@gmail.com",
      to: user.email,
      subject: "Contraseña APP FANOSA",
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      }
    });
  });
};

let sendInfo = (user) => {
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "appbonofanosa@gmail.com",
      pass: "AppBonoFanosa21!",
    },
  });

  readHTMLFile(__dirname + "/views/sendinfo.html", function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: user.name,
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: "appbonofanosa@gmail.com",
      to: user.email,
      subject: "Actualización de contraseña",
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      }
    });
  });
};

module.exports = controller;
