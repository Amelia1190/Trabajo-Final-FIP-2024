"use strict";
/*Pacientes (mascotas): nombre, especie (si no es perro o gato, deberá registrarse como exótica),
id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
// Clase Paciente
var Paciente = /** @class */ (function () {
    //constructor
    function Paciente(nombre, especie, idDueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.idDueño = idDueño;
    }
    //getters
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getIdDueño = function () {
        return this.idDueño;
    };
    //setters
    Paciente.prototype.setEspecie = function (Especie) {
        this.especie = Especie;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    //es Exotica
    Paciente.prototype.esExotica = function () {
        if (this.especie !== "perro" && this.especie !== "gato") {
            return "La Mascota  ".concat(this.nombre, " es ex\u00F3tica");
        }
        else {
            return "la Mascota  ".concat(this.nombre, " no es ex\u00F3tica");
        }
    };
    return Paciente;
}());
exports.Paciente = Paciente;
