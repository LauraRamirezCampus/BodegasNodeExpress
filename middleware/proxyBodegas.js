import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Bodega} from './../controller/bodegas.js';

const proxyBodegas = express(); 
proxyBodegas.use((req,res,next)=>{
     console.log(req.body);

    try {
            let dataValidada =plainToClass(Bodega, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
            console.log(dataValidada);
            console.log(req.body);
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
    })
    
    export default proxyBodegas;