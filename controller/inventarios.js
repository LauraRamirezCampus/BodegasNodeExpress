var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
/**
 *  Data a validar
    {
    "id_bodega": 1211,
    "id_producto": 181,
    "cantidad": 10
}
    
 */
export class inventario {
    constructor(p1, p2, p3) {
        this.id_bodega = p1;
        this.id_producto = p2;
        this.cantidad = p3;
    }
}
__decorate([
    Expose({ name: "id_bodega" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro 'id_bodega' " };
    }),
    __metadata("design:type", Number)
], inventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: "id_producto" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro 'id_producto' " };
    }),
    __metadata("design:type", Number)
], inventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro 'cantidad' " };
    }),
    __metadata("design:type", Number)
], inventario.prototype, "cantidad", void 0);
