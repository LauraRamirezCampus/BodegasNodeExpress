
import {Type,Transform,Expose } from "class-transformer";
/*  Datos a validar
{
    "id": 1234,
    "nombre": "A Bodegase",
    "id_responsable": 12,
    "estado": 1
    
}
 */
export class Bodega {
        /**
         * validacion id
         */
    @Expose({name:"id"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number") return Number(value);
        else throw {status: 401, message: "Error en el tipo de parametro 'id'"}
    })
    id:number;

    /**
     * validacion nombre
     */
    @Expose({name:"nombre"})
    @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parameter NOMBRE"}},{toClassOnly:true})
    nombre:String;
    /**
     * validacion id_responsable
     */
    @Expose({name:"id_responsable"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ID_RESPONSE"}},{toClassOnly:true})
    id_responsable:number;

    /**
     * /**
     * validacion estado
     */
    @Expose({name:"estado"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ESTADO"}},{toClassOnly:true})
    estado:number
    constructor(p1:number,p2:string,p3:number,p4:number){
       this.id =p1;
       this.nombre =p2;
       this.id_responsable=p3;
       this.estado=p4;
    }
}