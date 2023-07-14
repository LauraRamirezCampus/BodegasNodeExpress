import { Router } from "express";
import dotenv from "dotenv";
import con from "../config/data.js"
/**
 * 6. Se realiza un EndPoint que permita listar todos los productos en orden
descendente por el campo "Total".
• El campo "Total" es la cantidad de unidades que la empresa tiene
de este producto, considerando la unión de todas las bodegas, es
decir que el dato como tal no existe en la base de datos,sino se debe
calcular. Si la Bodega A tiene 1O unidades, la Bodega B tiene 5
unidades y la Bodega C tiene 3 unidades. Total= 18. */

const Productos = Router();
dotenv.config();

Productos.get("/:id?",(req,res)=>{
    con.query(`SELECT p.id,p.nombre,SUM(i.cantidad) AS Total
    FROM productos p
    INNER JOIN inventarios i ON p.id = i.id_producto
    GROUP BY p.id 
    ORDER BY Total DESC;`,
    (err,data,fils)=>{
        console.log(err);
        console.table(data);
        res.status(200).send(data);
    }
    )
})
export default Productos;