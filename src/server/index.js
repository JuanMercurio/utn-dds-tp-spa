import express from 'express';
import morgan from 'morgan';
import path from 'path'
import { mongoose } from './database.js'
import { router } from '../routes/routes.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv'
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();

// Set port of sever to the port of process or 3000
server.set('port', process.env.SERVER_PORT || 3000);

//middleware
server.use(morgan('dev'));
server.use(express.json());


//router 
server.use(router);

//static 
server.use(express.static(path.join(__dirname, "/public")));

server.listen(server.get('port'), () => {
    console.log("Server listening on port " + server.get('port'));
});
