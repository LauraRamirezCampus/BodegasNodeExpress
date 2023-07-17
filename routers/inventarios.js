import { Router } from "express";
import dotenv from "dotenv";
import con from "../config/data.js"


const Inventario =Router();
dotenv.config();

Inventario.get('/', (req, res) => {
    con.query('select * from inventarios',(err, data) => {
        if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al mostrar la database' });}
        console.table(data);
        res.json(data);
    });
});

/**
 * 8.Se Realiza un EndPoint que permita insertar registros en la tabla de
inventarios, los parámetros de entrada son (id_producto,id_bodega,cantidad).

 */
Inventario.post('/', (req, res) => {    
    con.query('SELECT * FROM inventarios WHERE id_producto = ? and id_bodega = ?',
    [req.body.id_producto,req.body.id_bodega],
    (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: 'Error en la consulta a la base de datos' })
        }
            if(rows.length > 0) {
                con.query('UPDATE inventarios SET cantidad = cantidad + ? WHERE id_bodega = ? AND id_producto = ?',
                [req.body.cantidad, req.body.id_bodega, req.body.id_producto],
                (err) => {
                    if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al actualizar el registro' });}
                    res.json({ mensaje: 'Registro actualizado exitosamente' });
                });
            }else{
                con.query('INSERT INTO inventarios(id_producto, id_bodega, cantidad) VALUES (?,?,?)',
                [req.body.id_producto, req.body.id_bodega, req.body.cantidad],
                (err) => {
                    if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al ingresar el registro' });}
                    res.json({ mensaje: 'Registro ingresado exitosamente'});
                });
            }
        }
        )
    });


export default Inventario