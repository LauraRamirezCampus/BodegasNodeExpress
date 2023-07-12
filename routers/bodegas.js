import {Router} from "express";
import dotenv from "dotenv";
import con from "../config/data.js";

const Bodegas =Router();
dotenv.config();

Bodegas.get("/:id?",(req,res)=>{
   let sql = (req.params.id)
   ?[`SELECT *FROM bodegas WHERE id=${req.params.id}`]
   :[`SELECT *FROM bodegas ORDER BY nombre`]
   con.query(...sql,
    (err,data,fils)=>{
        console.log(err);
        console.table(data);
        res.send(data)
    }
    )

})
export default Bodegas;