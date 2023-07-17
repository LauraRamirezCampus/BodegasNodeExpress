import express from 'express';
import dotenv from 'dotenv';
import Bodegas from './routers/bodegas.js';
import Productos from "./routers/productos.js";
import Inventario from "./routers/inventarios.js";
dotenv.config();

const expressApp = express();

expressApp.use(express.json());
expressApp.use('/bodegas', Bodegas);
expressApp.use('/Productos', Productos);
expressApp.use('/inventario',Inventario);



let config = JSON.parse(process.env.SERVER_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
