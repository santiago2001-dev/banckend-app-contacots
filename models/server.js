const cors = require('cors');
const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.loginPath = '/api/login';
        this.usersPath = '/api/users'; 
        this.contactosPath = '/api/contactos';
        this.enlacespath  = '/api/enlaces'
        this.soprte = '/api/soporte'
        //ruta de nuesta apirest
        

        //llmado de el metodo que contiene los mideelwares
        this.middelwares();

        //llamado de el archivo router
        this.routes();

    }

    middelwares(){
        this.app.use(cors());

       //uso de archivos json 
        this.app.use((express.json({limit: '50mb'})));
        this.app.use(express.urlencoded({limit: '50mb'}));

    }

    routes(){
        this.app.use(this.loginPath,require('../routes/login'));
        this.app.use(this.usersPath,require('../routes/users'));
        this.app.use(this.contactosPath,require('../routes/contactos'));
        this.app.use(this.enlacespath,require('../routes/enlaces'))
        this.app.use(this.soprte,require('../routes/soporte'));
    }

    listen(){
         this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en :http://localhost:${this.port}/api`)

        })

    }
 
} 


module.exports = Server;