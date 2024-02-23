
import express from 'express';
import { } from 'dotenv/config';
import cors from 'cors';
import {router} from '../routes/user.routes.js';

let port = process.env.PORT;
/* 
Un Middleware permite que uno o más tipos de comunicación
o conectividad entre apps y componentes de aplicaciones
en una red distribuida
*/


export default class Server {


    constructor () {
        this.app = express();
        this.port = process.env.PORT;

        //Middleware
        this.middlewares();


        // rutas de mi aplicación
        this.routes();
    };

    middlewares() {

        // Cors
        this.app.use( cors() );

        // Lectura para el parseo del Body
        this.app.use( express.json() );

        // directorio píblico
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use('/api/users', router);  //middleware condicional
        
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening in port: ${port}` );
        });
        
    };


}


