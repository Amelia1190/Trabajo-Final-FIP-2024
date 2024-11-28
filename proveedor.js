"use strict";
/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos.
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista.
 Si ya existe se debe volver a generar.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
// Clase Proveedor
var Proveedor = /** @class */ (function () {
    //constructor
    function Proveedor(nombre, telefono, id) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }
    //getters
    Proveedor.prototype.getNombre = function () {
        return this.nombre;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    //setters
    Proveedor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Proveedor.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Proveedor.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
