"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redVeterinaria = void 0;
var redVeterinaria = /** @class */ (function () {
    function redVeterinaria() {
    }
    // constructor(id: number, nombre: string, direccion: string, telefono: number) {
    //     this.id = id;
    //     this.nombre = nombre;
    //     this.direccion = direccion;
    //     this.telefono = telefono;
    // }
    // Dar de Baja 
    redVeterinaria.prototype.darDeBaja = function (pacienteId) {
        var pacienteIndex = this.listaPacientes.findIndex(function (p) { return p.id === pacienteId; });
        if (pacienteIndex !== -1) {
            this.listaPacientes.splice(pacienteIndex, 1);
            return true; // Se eliminó correctamente
        }
        return false; // Paciente no encontrado
    };
    // Dar de Alta
    redVeterinaria.prototype.darDeAlta = function (paciente) {
        this.listaPacientes.push(paciente);
    };
    // Modificar Paciente
    redVeterinaria.prototype.modificarPaciente = function (pacienteId) {
        var pacienteIndex = this.listaPacientes.findIndex(function (p) { return p.id === pacienteId; });
        if (pacienteIndex !== -1) {
            this.listaPacientes[pacienteIndex] = __assign({}, this.listaPacientes[pacienteIndex]);
            return true;
        }
        return false;
    };
    return redVeterinaria;
}());
exports.redVeterinaria = redVeterinaria;
