import {Router} from "express";
import dotenv from "dotenv";
import con from "../config/data.js";

const Bodegas =Router();
dotenv.config();
/**
 * 4.Se realiza un EndPolnt que permita listar todas las bodegas ordenadas
alfabéticamente.
 */
Bodegas.get("/:id?",(req,res)=>{
   let sql = (req.params.id)
   ?[`SELECT * FROM bodegas WHERE id=${req.params.id}`]
   :[`SELECT * FROM bodegas ORDER BY nombre`]
   con.query(...sql,
    (err,data,fils)=>{
        console.log(err);
        console.table(data);
        res.send(data);
    }
    )

})
/**
 * 5.Se realiza un EndPolnt que permita crear una bodegas.(Se agregan los siguientes datos:
 * {"id": 201,
    "nombre": "E Bodegaeds",
    "id_responsable": 11,
    "estado": 1,
    "created_by": null,
    "update_by": null,
    "created_at": "2023-05-25T06:02:57.000",
    "updated_at": "2023-05-25T06:02:57.000",
    "deleted_at": "2023-07-11T22:19:27.000"
  }).
 */
Bodegas.post('/', (req, res)=>{
    con.query(
        `INSERT INTO bodegas SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(data.affectedRows+200).send(data)
        }
    )
})
       

export default Bodegas;