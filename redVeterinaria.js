"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
exports.altaProveedor = altaProveedor;
exports.modificarProveedor = modificarProveedor;
exports.bajaProveedor = bajaProveedor;
exports.altaVeterinaria = altaVeterinaria;
exports.modificarVeterinaria = modificarVeterinaria;
exports.bajaVeterinaria = bajaVeterinaria;
var proveedor_1 = require("./proveedor");
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var sucursalVeterinaria_2 = require("./sucursalVeterinaria");
var rls = require("readline-sync");
/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
Sucursales de Veterinarias, Clientes,Pacientes (mascotas) yProveedores

Proveedores: la red debe contar con la opción de alta, baja y modificación de los mismos.

Veterinarias: La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.

IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista.
Si ya existe se debe volver a generar.*/
//Clase RedVeterinarias
var RedVeterinaria = /** @class */ (function () {
    //constructor
    function RedVeterinaria() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    //getters
    RedVeterinaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    //setters
    RedVeterinaria.prototype.setVeterinarias = function (veterinarias) {
        this.veterinarias = veterinarias;
    };
    RedVeterinaria.prototype.setProveedores = function (proveedores) {
        this.proveedores = proveedores;
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
/*PROVEEDORES*/
//---Alta  Proveedor
function altaProveedor(arrProveedor) {
    var nombre = rls.question("Ingrese Apellido y Nombre del proveedor: ");
    var telefono = rls.questionInt("Ingrese el n° de telefono del proveedor: ");
    var id = (0, sucursalVeterinaria_2.crearId)(3500);
    while ((0, sucursalVeterinaria_2.existeId)(arrProveedor, id) == true) {
        id = (0, sucursalVeterinaria_2.crearId)(3500);
    }
    var nProveedor = new proveedor_1.Proveedor(nombre, telefono, id);
    arrProveedor.push(nProveedor);
    console.log(arrProveedor);
}
// --- Modificar datos de Proveedor
function modificarProveedor(arregloProveedores) {
    var idProveedor = rls.questionInt("Ingrese el ID del proveedor que desea modificar: ");
    // Buscar el proveedor en el arreglo
    var posicion = arregloProveedores.findIndex(function (proveedor) { return proveedor.getId() === idProveedor; });
    if (posicion !== -1) {
        console.log("Ingrese los nuevos datos del proveedor:");
        var nombre = rls.question("Ingrese el nombre modificado: ");
        var telefono = rls.questionInt("Ingrese el nuevo teléfono: ");
        // Modificar el proveedor
        var proveedorMod = new proveedor_1.Proveedor(nombre, telefono, idProveedor);
        arregloProveedores[posicion] = proveedorMod;
        console.log("Proveedor modificado con éxito.");
    }
    else {
        console.log("Proveedor no encontrado.");
    }
}
//--- baja Proveedor 
function bajaProveedor(proveedor) {
    var bajaId = rls.questionInt("Ingrese Id a dar de baja: ");
    for (var i = 0; i < proveedor.length; i++) {
        if (bajaId === proveedor[i].getId()) {
            proveedor.splice(i, 1);
            console.log("Se dio de baja el Proveedor");
        }
    }
    console.log(proveedor);
}
/*sucursales de Veterinarias*/
//---alta Veterinaria
function altaVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas) {
    console.log("Ingrese los datos de la nueva sucursal:");
    var nombre = rls.question("Ingrese el nombre de la sucursal: ");
    var direccion = rls.question("Ingrese la dirección de la sucursal: ");
    var id = (0, sucursalVeterinaria_2.crearId)(3500);
    while ((0, sucursalVeterinaria_2.existeId)(arregloVeterinarias, id) == true) {
        id = (0, sucursalVeterinaria_2.crearId)(3500);
    }
    // Crear una nueva sucursal
    var nuevaSucursal = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id, listaClientes, listaGeneralMascotas);
    // Agregar la nueva sucursal al arreglo
    arregloVeterinarias.push(nuevaSucursal);
    console.log("Sucursal agregada con éxito.");
    //me muestra las sucursales
    console.log("Lista de sucursales:");
    arregloVeterinarias.forEach(function (sucursal, index) {
        console.log("Sucursal ".concat(index + 1, ":"));
        console.log("Nombre: ".concat(sucursal.getNombre()));
        console.log("Direcci\u00F3n: ".concat(sucursal.getDireccion()));
        console.log("ID: ".concat(sucursal.getId()));
        console.log("------------------------");
    });
}
//Modificar veterinaria
function modificarVeterinaria(arregloVete, posicion, arrClientes, arrPacientes) {
    var nombre = rls.question("Ingrese el cambio de nombre:");
    var direccion = rls.question("ingrese nueva dirección: ");
    var id = arregloVete[posicion].getId();
    var veterinariaModificada = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id, arrClientes, arrPacientes);
    arregloVete[posicion] = veterinariaModificada;
    console.log(arregloVete);
}
//--- baja Veterinaria  por Id
function bajaVeterinaria(arregloVete, id) {
    for (var i = 0; i < arregloVete.length; i++) {
        if (id === arregloVete[i].getId()) {
            arregloVete.splice(i, 1);
        }
    }
    console.log(arregloVete);
}
