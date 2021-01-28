
# 🏭 Fanosa

**Available cities:**  La Paz,  Cd. Juarez
  

## Table of Contents

 - [🧪 Step by step](#-step-by-step)
 -  [⚙️ API entry points](#-api-entry-points) 
 - [🐳 Needed tools](#-needed-tools) 
 - [🚀Application execution](#-application-execution)

  

## 🧪 Step by step

#### ⚙️ API entry points
| La paz  | Cd. Juarez
|--|--|
|/api/lapaz/corte |/api/juarez/kbrs 
|/api/lapaz/corte/calculator|/api/juarez/kbrs/calculator
|/api/lapaz/almcacen |/api/juarez/mcsframe 
|/api/lapaz/almcacen/calculator|/api/juarez/mcsframe/calculator
|/api/lapaz/chofer-local |/api/juarez/moldeo 
|/api/lapaz/chofer-local/calculator|/api/juarez/moldeo/calculator
|/api/lapaz/cedi |
|/api/lapaz/cedi/calculator|
|/api/lapaz/vigueta |
|/api/lapaz/vigueta/calculator|
|/api/lapaz/moldeo |
|/api/lapaz/moldeo/calculator|

  
## 🐳 Needed Tools

1.  [Install Docker](https://www.docker.com/get-started)

2.  [Install Node](https://nodejs.org/es/download/)

3.  [Install Npm](https://www.npmjs.com/get-npm)

4. Clone this project: `git clone https://github.com/berelab/project-example.git`

5. Move to the project folder: `cd project-example`


## 🚀 Application execution

- Install the project dependencies `npm install`

- Bring up the Docker container `docker-compose up -d`

- Run migrations `node /project-example/migrations/lp_corte.js`

- Launch the server `npm start` o `npm run start`


#### LA PAZ
- Go to dpto [corte](http://localhost:3000/lapaz/corte)

- Go to dpto [almacen](http://localhost:3000/lapaz/almacen)

- Go to dpto [chofer local](http://localhost:3000/lapaz/chofer-local)

- Go to dpto [cedi](http://localhost:3000/lapaz/cedi)

- Go to dpto [vigueta](http://localhost:3000/lapaz/vigueta)

- Go to dpto [moldeo](http://localhost:3000/lapaz/moldeo)

#### CD. JUAREZ
- Go to dpto [moldeo](http://localhost:3000/juarez/moldeo)

- Go to dpto [kbrs](http://localhost:3000/juarez/kbrs)

- Go to dpto [mcs frmae](http://localhost:3000/juarez/mcs-frame)