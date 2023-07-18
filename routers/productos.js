import { Router } from "express";
import dotenv from "dotenv";
import con from "../config/data.js"
/**
 * 6. 
 *      
• El campo "Total" es la cantidad de unidades que la empresa tiene
de este producto, considerando la unión de todas las bodegas, es
decir que el dato como tal no existe en la base de datos,sino se debe
calcular. Si la Bodega A tiene 1O unidades, la Bodega B tiene 5
unidades y la Bodega C tiene 3 unidades. Total= 18. */


const Productos = Router();
dotenv.config();

//   Productos.get("/:id?",(req,res)=>{
//       con.query(`SELECT p.id,p.nombre,SUM(i.cantidad) AS Total
//       FROM productos p
//       INNER JOIN inventarios i ON p.id = i.id_producto
//       GROUP BY p.id 
//       ORDER BY Total DESC;`,
//       (err,data,fils)=>{
//           console.log(err);
//           console.table(data);
//           res.status(200).send(data);
//       }
//       )
//   })

// var insertId;
 Productos.get("/:id?",(req,res)=>{
     let sql = (req.params.id)
     ?[`SELECT * FROM productos WHERE id=${req.params.id}`]
     :[`SELECT * FROM productos ORDER BY nombre`]
     con.query(...sql,
      (err,data,fils)=>{
          console.log(err);
          console.table(data);
          res.send(data);
      }
      )
 
  })

Productos.post('/',(req,res)=>{
    con.query(
        `INSERT INTO productos SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            insertId=data.insertId;
            console.table(data);
            con.query(
                `INSERT INTO inventarios SET ?`,
                {
                    id_bodega:11,
                    id_producto:insertId,
                    cantidad:14,
                    created_by:req.body.created_by,
                    update_by:req.body.created_by,
                },
                (err, data, fils)=>{
                    console.log(err);
                    console.table(data);
                    res.status(200).send(data)
                }
        
            )
        }

    )

    
})

export default Productos;