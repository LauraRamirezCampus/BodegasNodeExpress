import { Router } from "express";
import dotenv from "dotenv";
import con from "../config/data.js"
import proxyProductos from "../middleware/proxyProductos.js";
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
  Productos.post('/',proxyProductos,(req,res)=>{
    let databody = req.body;
    //console.log(databody);
    let queryProductos= `INSERT INTO productos(nombre,descripcion,estado) VALUES ("${databody.nombre}","${databody.descripcion}",${databody.estado})`;
    con.query(queryProductos,(err, data1 , fil)=>{
            if(err){
                console.log("ha ocurrido un error al insertar la data", err);
                res.send(err)
            }else{
                let id = Math.floor(Math.random() * (50 - 1 +1 )) +1;
                con.query(/* sql */`SELECT * FROM inventarios`, (err,data2,fil)=>{
                    let ids = data2.map(obj => obj.id_bodega)
                    let dentra = true;
                    console.log(ids);
                    console.log(id);
                    while(dentra){
                        if (ids.includes(id)) {
                            con.query(`INSERT INTO inventarios(id_bodega,id_producto,cantidad) VALUES (${id},${data1.insertId},${id})`,
                            (err, data, fil)=>{
                                if(err){
                                    console.log("error el insertar la data");
                                    res.send(err);
                                }else{
                                    res.send({
                                        "Status":200,
                                        "Message": "La data se ha insertado correctamente"
                                    });
                                    console.log(data);
                                }
                            });
                            dentra = false;
                        }else{
                            id = Math.floor(Math.random() * (50 - 1 +1 )) +1;
                            console.log(id);
                        }
                    }    
                });
            }
        }
    );
});



export default Productos;