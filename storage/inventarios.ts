import {Type,Transform,Expose } from "class-transformer";

/**
 *  Data a validar
    {
    "id_bodega": 1211,
    "id_producto": 181,
    "cantidad": 10
}
    
 */
export class inventario{
    /**
         * validacion id_bodega
         */
    @Expose({name:"id_bodega"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number") return Number(value);
        else throw {status: 401, message: "Error en el tipo de parametro 'id_bodega' "}
    })
    id_bodega:number;

     /**
         * validacion id_producto
         */
     @Expose({name:"id_producto"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro 'id_producto' "}
     })
     id_producto:number;

     /**
         * validacion cantidad
         */
     @Expose({name:"cantidad"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro 'cantidad' "}
     })
     cantidad:number;
     constructor(p1:number,p2:number,p3:number,){
        this.id_bodega =p1;
        this.id_producto =p2;
        this.cantidad=p3;
     }
}