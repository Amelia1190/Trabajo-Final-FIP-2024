"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paciente_1 = require("./paciente");
var Cliente_1 = require("./Cliente");
var proveedor_1 = require("./proveedor");
var redVeterinaria_1 = require("./redVeterinaria");
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var sucursalVeterinaria_2 = require("./sucursalVeterinaria");
var rls = require("readline-sync");
//clientes
var listaClientes = [];
var cliente1 = new Cliente_1.Cliente("Amelia", 228452658, 5625);
var cliente2 = new Cliente_1.Cliente("Carolina", 2284754715, 4785);
// Crear una instancia de la clase Cliente
var cliente = new Cliente_1.Cliente("Juan", 123456789, 1);
// Simular varias visitas del cliente
for (var i = 0; i < 10; i++) {
    cliente.contadorVIP(cliente);
}
//agrego objeto cliente al arreglo
listaClientes = [];
listaClientes.push(cliente);
listaClientes.push(cliente1);
listaClientes.push(cliente2);
//pacientes
var listaGeneralMascotas = [];
var paciente1 = new paciente_1.Paciente("Lola", "gato", 5625);
var paciente2 = new paciente_1.Paciente("Tito", "pez", 4785);
listaGeneralMascotas.push(paciente1);
listaGeneralMascotas.push(paciente2);
//sucursales vete
var arregloVeterinarias = [];
var sucursal1 = new sucursalVeterinaria_2.Veterinaria("Patitas", "Belgrano 3454", 1112, [new Cliente_1.Cliente("Juan", 123456789, 1), new Cliente_1.Cliente("Ana", 987654321, 2),
], [new paciente_1.Paciente("Lola", "gato", 5625), new paciente_1.Paciente("Tito", "pez", 4785),]);
var sucursal2 = new sucursalVeterinaria_2.Veterinaria("Full Mascotas", "Alsina 2100", 1113, [new Cliente_1.Cliente("Pedro", 111111111, 3), new Cliente_1.Cliente("Luisa", 222222222, 4),
], [new paciente_1.Paciente("Moro", "perro", 1234), new paciente_1.Paciente("Pipo", "conejo", 5678),]);
// Agregar objetos Veterinaria al arreglo
arregloVeterinarias.push(sucursal1);
arregloVeterinarias.push(sucursal2);
//provee
var listaProveedores = [];
var proveedor1 = new proveedor_1.Proveedor("Roberto Sanchez Dogui", 3386, 95565);
var proveedor2 = new proveedor_1.Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
var proveedor3 = new proveedor_1.Proveedor("Distribuidora sabatini", 2284556523, 29864);
// Agregar objetos Proveedor al arreglo
listaProveedores.push(proveedor1);
listaProveedores.push(proveedor2);
listaProveedores.push(proveedor3);
var _loop_1 = function () {
    //Menú del sistema
    console.log("Bienvenido/a a la red de veterinarias 'Los rescataditos'¿Qué desea hacer?: ");
    console.log("----------------------------------------------------------------");
    console.log("1. Dar de alta una nueva sucursal");
    console.log("2. Dar de alta un nuevo cliente");
    console.log("3. Dar de alta un nuevo paciente");
    console.log("4. Dar de alta un nuevo proveedor");
    console.log("5. Modificar datos de una sucursal");
    console.log("6. Modificar datos de un cliente");
    console.log("7. Modificar datos de un paciente");
    console.log("8. Modificar datos de un proveedor");
    console.log("9. Dar de baja una sucursal");
    console.log("10. Dar de baja un paciente");
    console.log("11. Dar de baja un cliente");
    console.log("12. Dar de baja un proveedor");
    console.log("13. Verificar si es VIP");
    console.log("14.salir");
    console.log("----------------------------------------------------------------");
    //Controla que la opcion ingresada sea válida y si no es valida vuelve a pedir que ingrese una opcion.
    var opcion = void 0;
    do {
        opcion = rls.questionInt("Ingrese la opcion numerica que desee: ");
        if (opcion > 14 || opcion < 1) {
            console.log("Por favor ingrese un numero entre 1 y 14");
        }
    } while (opcion > 14 || opcion < 1);
    console.log("Opción válida seleccionada:", opcion);
    // Una vez que se ha seleccionado una opción valida, se ejecuta el código correspondiente a ese número.
    switch (opcion) {
        case 1:
            (0, redVeterinaria_1.altaVeterinaria)(arregloVeterinarias, listaClientes, listaGeneralMascotas);
            break;
        case 2:
            (0, sucursalVeterinaria_1.altaCliente)(listaClientes);
            break;
        case 3:
            (0, sucursalVeterinaria_1.altaPaciente)(listaClientes, listaGeneralMascotas);
            break;
        case 4:
            (0, redVeterinaria_1.altaProveedor)(listaProveedores);
            break;
        case 5:
            (0, redVeterinaria_1.modificarVeterinaria)(arregloVeterinarias, 5, listaClientes, listaGeneralMascotas);
            break;
        case 6:
            (0, sucursalVeterinaria_1.modificarCliente)(listaClientes, "telefono");
            break;
        case 7:
            (0, sucursalVeterinaria_1.modificarPaciente)(listaClientes);
            break;
        case 8:
            (0, redVeterinaria_1.modificarProveedor)(listaProveedores);
            break;
        case 9:
            (0, redVeterinaria_1.bajaVeterinaria)(arregloVeterinarias, 1112);
            break;
        case 10:
            (0, sucursalVeterinaria_1.bajaPaciente)(listaClientes);
            break;
        case 11:
            (0, sucursalVeterinaria_1.bajaCliente)(listaClientes);
            break;
        case 12:
            (0, redVeterinaria_1.bajaProveedor)(listaProveedores);
            break;
        case 13:
            console.log("Ingrese el ID del cliente para verificar si es VIP:");
            var idClienteVIP_1 = rls.questionInt("Ingrese el ID del cliente: ");
            listaClientes.forEach(function (cliente) {
                if (cliente.getId() === idClienteVIP_1) {
                    cliente.contadorVIP(cliente);
                }
            });
            break;
        case 14:
            console.log("Muchas gracias por usar el servicio de red veterinaria 'Los rescataditos'. ¡Vuelva pronto!");
            break;
    }
    // VUELVE AL MENU PRINCIPAL 
    var menu2 = rls.questionInt("ingrese 1 para volver al menu principal o 2 para salir : ");
    if (menu2 === 1) {
        console.log(opcion);
    }
    else {
        console.error("-----------------------------");
        console.error("A SALIDO.");
        console.error("-----------------------------");
        return "break";
    }
};
while (true) {
    var state_1 = _loop_1();
    if (state_1 === "break")
        break;
}
;
