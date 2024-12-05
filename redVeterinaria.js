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
    //constructor Este es el constructor de la clase RedVeterinaria. 
    //Se llama automáticamente cuando se crea una nueva instancia de la clase.
    function RedVeterinaria() {
        this.veterinarias = []; //Esta línea inicializa la propiedad veterinarias como un arreglo vacío.
        this.proveedores = [];
    }
    //getters //devuelven los arreglos de objetos
    RedVeterinaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    //setters para que se puedan modificar
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
    // El bucle while se repetirá hasta que se genere un ID que no exista en el arreglo de proveedores. 
    var id = (0, sucursalVeterinaria_2.crearId)(3500);
    while ((0, sucursalVeterinaria_2.existeId)(arrProveedor, id) == true) {
        id = (0, sucursalVeterinaria_2.crearId)(3500);
    }
    //crea una instancia de  la clase provedor
    var nProveedor = new proveedor_1.Proveedor(nombre, telefono, id);
    //agrego al arreglo de proveedores
    arrProveedor.push(nProveedor);
    console.log(" proveedor agregado con éxito.");
    //me muestra lOS proveedores  Esta línea utiliza el método forEach para recorrer el arreglo arrProveedor 
    //y ejecutar una función para cada elemento del arreglo.
    console.log("Lista de Proveedores:");
    arrProveedor.forEach(function (proveedor, index) {
        console.log("Lugar en la lista: ".concat(index + 1, ":"));
        console.log("Nombre: ".concat(proveedor.getNombre()));
        console.log("Telefono: ".concat(proveedor.getTelefono()));
        console.log("ID: ".concat(proveedor.getId()));
        console.log("------------------------");
    });
}
// --- Modificar datos de Proveedor
function modificarProveedor(arregloProveedores) {
    var idProveedor = rls.questionInt("Ingrese el ID del proveedor que desea modificar: ");
    // Buscar el proveedor en el arreglo
    var posicion = arregloProveedores.findIndex(function (proveedor) { return proveedor.getId() === idProveedor; });
    //if (posicion !== -1): Esta es la condición del if. La variable posicion se supone que contiene el índice del proveedor a modificar en el arreglo de proveedores. 
    //Si la posición es diferente de -1, significa que el proveedor se encontró en el arreglo.
    //Si la condición es verdadera, el código dentro del if se ejecutará. 
    //En este caso, el código pide al usuario que ingrese los nuevos datos del proveedor, 
    //crea un nuevo objeto Proveedor con los datos ingresados y
    // reemplaza el proveedor antiguo con el nuevo en el arreglo de proveedores.
    if (posicion !== -1) {
        console.log("Ingrese los nuevos datos del proveedor:");
        var nombre = rls.question("Ingrese el nombre modificado: ");
        var telefono = rls.questionInt("Ingrese el nuevo teléfono: ");
        // Modificar el proveedor
        var proveedorMod = new proveedor_1.Proveedor(nombre, telefono, idProveedor);
        arregloProveedores[posicion] = proveedorMod;
        console.log("Proveedor modificado con éxito.");
        //me muestra lOS proveedores
        console.log("Lista de Proveedores:");
        arregloProveedores.forEach(function (proveedor, index) {
            console.log("Proveedor: ".concat(index + 1, ":"));
            console.log("Nombre: ".concat(proveedor.getNombre()));
            console.log("Telefono: ".concat(proveedor.getTelefono()));
            console.log("ID: ".concat(proveedor.getId()));
            console.log("------------------------");
        });
    }
    else {
        console.log("Proveedor no encontrado.");
    }
}
//--- baja Proveedor 
function bajaProveedor(proveedor) {
    var bajaId = rls.questionInt("Ingrese Id del Proveedor a dar de baja: ");
    //recorre el arreglo
    for (var i = 0; i < proveedor.length; i++) {
        if (proveedor[i].getId() == bajaId) {
            console.log("Se dio de baja el proveedor ".concat(proveedor[i].getNombre()));
            proveedor.splice(i, 1);
            break;
        }
    }
    console.log("proveedores vigentes:");
    console.table(proveedor);
}
/*sucursales de Veterinarias*/
//---alta Veterinaria
function altaVeterinaria(arregloVeterinarias) {
    console.log("Ingrese los datos de la nueva sucursal:");
    var nombre = rls.question("Ingrese el nombre de la sucursal: ");
    var direccion = rls.question("Ingrese la dirección de la sucursal: ");
    var id = (0, sucursalVeterinaria_2.crearId)(3500);
    while ((0, sucursalVeterinaria_2.existeId)(arregloVeterinarias, id) == true) {
        id = (0, sucursalVeterinaria_2.crearId)(3500);
    }
    // Crear una nueva sucursal
    var nuevaSucursal = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id);
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
function modificarVeterinaria(arregloVete) {
    var id = rls.questionInt("Ingrese el ID de la veterinaria que desea modificar: ");
    // Buscar el arreglo
    var posicion = arregloVete.findIndex(function (Veterinaria) { return Veterinaria.getId() === id; });
    if (posicion !== -1) {
        console.log("Ingrese los nuevos datos de la sucursal:");
        var nombre = rls.question("Ingrese el nombre modificado: ");
        var direccion = rls.question("Ingrese la nueva direccion: ");
        //
        var sucModificada = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id);
        arregloVete[posicion] = sucModificada;
        console.log("Sucursal modificada con éxito.");
        //me muestra las sucursales
        console.log("Lista de Sucursales:");
        arregloVete.forEach(function (Veterinaria, index) {
            console.log("Sucursal: ".concat(index + 1, ":"));
            console.log("Nombre: ".concat(Veterinaria.getNombre()));
            console.log("Direccion: ".concat(Veterinaria.getDireccion()));
            console.log("ID: ".concat(Veterinaria.getId()));
            console.log("------------------------");
        });
    }
    else {
        console.log("Sucursal no encontrado.");
    }
}
//--- baja Veterinaria  por Id
function bajaVeterinaria(arregloVete) {
    var bajaId = rls.questionInt("Ingrese Id de la sucursal a dar de baja: ");
    for (var i = 0; i < arregloVete.length; i++) {
        if (arregloVete[i].getId() == bajaId) {
            console.log("Se dio de baja la sucursal ".concat(arregloVete[i].getNombre()));
            arregloVete.splice(i, 1);
            break;
        }
    }
    //me muestra las sucursales que quedan
    console.log("Lista de Sucursales vigentes:");
    arregloVete.forEach(function (Veterinaria, index) {
        console.log("Posicion: ".concat(index + 1, ":"));
        console.log("Nombre: ".concat(Veterinaria.getNombre()));
        console.log("Direccion: ".concat(Veterinaria.getDireccion()));
        console.log("ID: ".concat(Veterinaria.getId()));
        console.log("------------------------");
    });
}
