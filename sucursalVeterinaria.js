"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
exports.crearId = crearId;
exports.existeId = existeId;
exports.altaCliente = altaCliente;
exports.buscarPorId = buscarPorId;
exports.bajaCliente = bajaCliente;
exports.modificarCliente = modificarCliente;
exports.altaPaciente = altaPaciente;
exports.bajaPaciente = bajaPaciente;
exports.modificarPaciente = modificarPaciente;
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var readlineSync = require("readline-sync");
/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta)

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */
/*Clientes:  las veterinarias deben contar con la opción de alta,
baja y modificación de los mismos. */
/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = [];
        this.listaPacientes = [];
    }
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
    //modificar lista 
    Veterinaria.prototype.setListaClientes = function (listaClientes) {
        this.listaClientes = listaClientes;
    };
    Veterinaria.prototype.setListaPacientes = function (listaPacientes) {
        this.listaPacientes = listaPacientes;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
//  ---Crear numero para ID .
function crearId(max) {
    return Math.floor(Math.random() * max);
}
//  --- Y para verificar si id existe
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
/*Clientes*/
//--- Alta cliente 
function altaCliente(listaClientes) {
    var nombre = readlineSync.question("Ingrese Apellido y Nombre del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el n° de telefono del cliente: ");
    var id = crearId(25000);
    while (existeId(listaClientes, id) == true) {
        id = crearId(25000);
    }
    //crear nuevo cliente 
    var nuevoCliente = new cliente_1.Cliente(nombre, telefono, id, 22);
    // Agregar el cliente al arreglo
    listaClientes.push(nuevoCliente);
    console.log(" cliente agregado con éxito.");
    //me muestra lOS CLIENTES
    console.log("Lista de Clientes:");
    listaClientes.forEach(function (Cliente, index) {
        console.log("Cliente: ".concat(index + 1, ":"));
        console.log("Nombre: ".concat(Cliente.getNombre()));
        console.log("Telefono: ".concat(Cliente.getTelefono()));
        console.log("ID: ".concat(Cliente.getId()));
        console.log("------------------------");
    });
}
//--- buscar por id a un cliente/ proveedor
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
// --- baja cliente
function bajaCliente(arrClientes) {
    var bajaId = readlineSync.questionInt("Ingrese el id del cliente que busca dar de  baja: ");
    var ubicacion = buscarPorId(arrClientes, bajaId);
    if (ubicacion != -1) {
        arrClientes.splice(ubicacion, 1);
        console.log("El cliente ingresado se dio de baja");
        console.log("Lista de clientes vigentes:");
        console.table(arrClientes.map(function (cliente) { return ({
            nombre: cliente.getNombre(),
            telefono: cliente.getTelefono(),
            id: cliente.getId(),
            numDeVisitas: cliente.getnumDeVisitas(),
            listaMascotas: cliente.getListaMascotas().map(function (paciente) { return paciente.getNombre(); })
        }); }));
    }
    else {
        console.log("No se encontro id en el sistema");
    }
}
//--- modificar  cliente (numero)
function modificarCliente(arrCliente, datoAmodificar) {
    var idCliente = readlineSync.questionInt("Ingrese id del cliente a modificar: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId !== -1) {
        var nuevaInfo = void 0;
        if (datoAmodificar === "telefono") {
            nuevaInfo = readlineSync.questionInt("Ingrese nuevo n° telefonico: ");
            arrCliente[ubicacionId].setTelefono(nuevaInfo);
        }
        console.log("Se modific\u00F3 exitosamente el ".concat(datoAmodificar, ": ").concat(arrCliente[ubicacionId].getNombre()));
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
/* Pacientes*/
//--- Alta  paciente
function altaPaciente(arrCliente, listaMascotas) {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var especie = readlineSync.question("Ingrese la especie del Paciente: ");
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente: ");
    var ubicacionId = buscarPorId(arrCliente, idDeCliente);
    if (ubicacionId != -1) {
        var nuevoPaciente = new paciente_1.Paciente(nombre, especie, idDeCliente);
        arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
        listaMascotas.push(nuevoPaciente);
        console.log("Paciente agregado con éxito");
        console.log(nuevoPaciente.esExotica());
    }
    else {
        console.log("No se encontro Id ingresado");
    }
    //me muestra pacientes
    console.log("Paciente nuevo agregado:");
    listaMascotas.forEach(function (paciente, index) {
        console.log("paciente: ".concat(index + 1, ":"));
        console.log("Nombre: ".concat(paciente.getNombre()));
        console.log("especie: ".concat(paciente.getEspecie()));
        console.log("Id Due\u00F1o: ".concat(paciente.getIdDueño()));
        console.log("------------------------");
    });
    return listaMascotas;
}
function bajaPaciente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para dar de baja el paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId !== -1) {
        var listaMascotas = arrCliente[ubicacionId].getListaMascotas();
        if (listaMascotas.length > 0) {
            console.log("Lista de pacientes:");
            listaMascotas.forEach(function (paciente, index) {
                console.log("".concat(index + 1, ". Nombre: ").concat(paciente.getNombre(), ", Especie: ").concat(paciente.getEspecie()));
            });
            var bajaDePaciente_1 = readlineSync.question("Ingrese el nombre del paciente a dar de baja: ");
            var indicePaciente = listaMascotas.findIndex(function (paciente) { return paciente.getNombre() == bajaDePaciente_1; });
            if (indicePaciente !== -1) {
                listaMascotas.splice(indicePaciente, 1);
                console.log("El paciente ha sido dado de baja.");
                console.log("pacientes que quedan registrados");
                console.table(listaMascotas);
            }
            else {
                console.log("No se encontró el paciente.");
            }
        }
        else {
            console.log("No hay pacientes registrados para este cliente.");
        }
    }
}
function modificarPaciente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para modificar el paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId !== -1) {
        var listaMascotas = arrCliente[ubicacionId].getListaMascotas();
        if (listaMascotas.length > 0) {
            console.log("Lista de pacientes:");
            listaMascotas.forEach(function (paciente, index) {
                console.log("".concat(index + 1, ". Nombre: ").concat(paciente.getNombre(), ", Especie: ").concat(paciente.getEspecie()));
            });
            var pacienteModificar_1 = readlineSync.question("Ingrese el nombre del paciente a modificar: ");
            var indicePaciente = listaMascotas.findIndex(function (paciente) { return paciente.getNombre() === pacienteModificar_1; });
            if (indicePaciente !== -1) {
                var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
                var nuevaEspecie = readlineSync.question("Ingrese la nueva especie del paciente: ");
                listaMascotas[indicePaciente].setNombre(nuevoNombre);
                listaMascotas[indicePaciente].setEspecie(nuevaEspecie);
                console.log("El paciente se modificó exitosamente");
                return listaMascotas;
            }
            else {
                console.log("No se encontró el paciente.");
            }
        }
        else {
            console.log("No hay pacientes registrados para este cliente.");
        }
    }
}
//--- modificar Paciente
/*
export function modificarPaciente(arrCliente: Cliente[]):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para modificar el paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
 
  
  if(ubicacionId!=-1){
    
    let pacienteModificar=readlineSync.question("Ingrese el nombre del paciente a modificar: ")
    
        console.log("El paciente se modificó exitosamente")
  }
}*/ 
