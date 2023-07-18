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
 * Data a validar
    "nombre": "A bodege",
    "descripcion": "producto0",
    "estado": 1,
 */
export class productos {
    constructor(p1, p2, p3) {
        this.nombre = p1;
        this.descripcion = p2;
        this.estado = p3;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro NOMBRE" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro DESCRIPCION" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parameter ESTADO" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "estado", void 0);
