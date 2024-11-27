"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPaciente = exports.bajaPaciente = exports.altaPaciente = exports.modificarTelefonoCliente = exports.modificarNombreCliente = exports.bajaCliente = exports.buscarPorId = exports.altaCliente = exports.existeId = exports.crearNumRandom = exports.Veterinaria = void 0;
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var readlineSync = require("readline-sync");
/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta)

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */
/*Clientes:  las veterinarias deben contar con la opción de alta,
baja y modificación de los mismos. */
/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id, listaClientes, listaPacientes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
    }
    Veterinaria.prototype.altaPaciente = function (paciente1) {
        throw new Error("Method not implemented.");
    };
    Veterinaria.prototype.bajaPaciente = function (arg0) {
        throw new Error("Method not implemented.");
    };
    //getters
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getListaClientes = function () {
        return this.listaClientes; //retorna lista de Clientes
    };
    Veterinaria.prototype.getListaPacientes = function () {
        return this.listaPacientes;
    };
    //setters
    Veterinaria.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Veterinaria.prototype.setListaClientes = function (listaClientes) {
        this.listaClientes = listaClientes;
    };
    Veterinaria.prototype.setListaPacientes = function (listaPacientes) {
        this.listaPacientes = listaPacientes;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
// Crear numero random .
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
// -----------------FUNCION PARA CLIENTES------------------
//funcion para verificar si id existe
function existeId(arreglo, id) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arreglo.length)) {
        if (id == arreglo[i].getId()) { //
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
exports.existeId = existeId;
//-----------Funcion para crear cliente nuevo--------
function altaCliente(arrCliente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(1000);
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(1000);
    }
    var nuevoCliente = new Cliente_1.Cliente(nombre, telefono, id);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.altaCliente = altaCliente;
//Funcion buscar por id a un cliente/ proveedor
function buscarPorId(arreglo, id) {
    var ubicacion = -1;
    var ok = false;
    var i = 0;
    while ((ok == false) && (i < arreglo.length)) {
        if (id == arreglo[i].getId()) {
            ubicacion = i;
            ok = true;
        }
        else {
            i = i + 1;
        }
    }
    return ubicacion;
}
exports.buscarPorId = buscarPorId;
//Funcion para borrar un cliente
function bajaCliente(arrClientes) {
    var borrarId = readlineSync.questionInt("Ingrese el id del cliente a dar de baja: ");
    var ubicacion = buscarPorId(arrClientes, borrarId);
    if (ubicacion != -1) {
        arrClientes.splice(ubicacion, 1);
        console.log("Se elimino cliente correctamente");
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.bajaCliente = bajaCliente;
//Funciones para modificar datos de cliente (numero telefonico y nombre)
function modificarNombreCliente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese id del cliente a modificar el nombre: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        arrCliente[ubicacionId].setNombre(nuevoNombre);
        console.log("Se modifico exitosamente el nombre:  " + arrCliente[ubicacionId].getNombre());
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.modificarNombreCliente = modificarNombreCliente;
function modificarTelefonoCliente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese Id del cliente a modificar el numero telefonico: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        var nuevoTelefono = readlineSync.questionInt("Ingrese nuevo numero telefonico: ");
        arrCliente[ubicacionId].setTelefono(nuevoTelefono);
        console.log("Se modifico exitosamente el numero telefonico: " + arrCliente[ubicacionId].getTelefono());
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.modificarTelefonoCliente = modificarTelefonoCliente;
//---------------------------FUNCION PARA PACIENTE-----------------------
//Funcion para crear nuevo paciente
function altaPaciente(arrCliente, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var especie = readlineSync.question("Ingrese la especie del Paciente: ");
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente: ");
    var ubicacionId = buscarPorId(arrCliente, idDeCliente);
    if (ubicacionId != -1) {
        var nuevoPaciente = new Paciente_1.Paciente(nombre, especie, idDeCliente);
        arrPacientes.push(nuevoPaciente);
        arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
    }
    else {
        console.log("No se encontro Id ingresado");
    }
    return arrPacientes;
}
exports.altaPaciente = altaPaciente;
//Funcion eliminar paciente
function bajaPaciente(arrCliente, arrPacientes) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para dar de baja el paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        console.log("Lista de pacientes " + arrCliente[ubicacionId].getListaMascota());
        var borrarPaciente = readlineSync.question("Ingrese el nombre del paciente a dar de baja: ");
        var eliminar = false;
        var i = 0;
        while ((eliminar == false) && (i < arrCliente[ubicacionId].getListaMascotas().length)) {
            if (borrarPaciente == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()) {
                eliminar = true;
                arrCliente[ubicacionId].getListaMascotas().splice(i, 1);
            }
            else {
                i = i + 1;
            }
        }
    }
}
exports.bajaPaciente = bajaPaciente;
//funcion para modificar Paciente
function modificarPaciente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para Modificar el paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        console.log("Lista de pacientes " + arrCliente[ubicacionId].getListaMascotas());
        var pacienteModificar = readlineSync.question("Ingrese el nombre del paciente a Modificar: ");
        var ok = false;
        var i = 0;
        while ((ok == false) && (i < arrCliente[ubicacionId].getListaMascotas().length)) {
            if (pacienteModificar == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()) {
                ok = true;
                var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
                var nuevaEspecie = readlineSync.question("Ingrese nuevamente especie del paciente: ");
                arrCliente[ubicacionId].getListaMascotas()[i].setNombre(nuevoNombre);
                arrCliente[ubicacionId].getListaMascotas()[i].setEspecie(nuevaEspecie);
                console.log("El paciente se modifico exitosamente");
            }
            else {
                i = i + 1;
            }
        }
    }
    else {
        console.log("El Id del cliente Ingresado no se encontro");
    }
}
exports.modificarPaciente = modificarPaciente;
