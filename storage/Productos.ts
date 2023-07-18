import {Type,Transform,Expose } from "class-transformer";
/**
 * Data a validar
    "nombre": "A bodege",
    "descripcion": "producto0",
    "estado": 1,
 */
export class productos{
    /**
     * validacion nombre
     */
    @Expose({name:"nombre"})
    @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro NOMBRE"}},{toClassOnly:true})
    nombre:String;

    /**
     * validacion descripcion
     */
    @Expose({name:"descripcion"})
    @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro DESCRIPCION"}},{toClassOnly:true})
    descripcion:String;
    /**
     * validacion estado
     */
    @Expose({name:"estado"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ESTADO"}},{toClassOnly:true})
    estado:number
    constructor(p1:string,p2:string,p3:number){
        this.nombre =p1;
        this.descripcion =p2;
        this.estado =p3; 
    }

}