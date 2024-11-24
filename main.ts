
import { Paciente } from "./paciente"
import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";
import { altaVeterinaria, RedVeterinaria, altaProveedor, bajaProveedor, modificarProveedor, modificarVeterinaria, bajaVeterinaria } from "./redVeterinaria";
import {altaCliente, bajaCliente, altaPaciente, bajaPaciente, modificarNombreCliente, modificarTelefonoCliente, modificarPaciente} from "./sucursalVeterinaria"
import { Veterinaria } from "./sucursalVeterinaria";
import * as rls from 'readline-sync'


//clientes

let listaClientes: Cliente[] = [];

const cliente1 = new Cliente( "Amelia", 228452658, 5625)
const cliente2 = new Cliente ("Carolina", 2284754715, 4785)

listaClientes = [cliente1, cliente2]

//pacientes

let listaGeneralMascotas: Paciente[] = [];

const paciente1 = new Paciente ("Lola", "gato", 5625)
const paciente2= new Paciente ("Tito", "pez", 4785)

listaGeneralMascotas = [paciente1, paciente2]

//sucursales vete

let arregloVeterinarias: Veterinaria[]=[];

const sucursal1= new Veterinaria("Patitas", "Belgrano 3454", 1112, listaClientes, listaGeneralMascotas)
const sucursal2= new Veterinaria ("Full Mascotas", "Alsina 2100", 1113, listaClientes, listaGeneralMascotas)

arregloVeterinarias =[sucursal1, sucursal2]
//provee
let listaProveedores: Proveedor[] = [];

let RedVete = new RedVeterinaria();

const proveedor1 = new Proveedor("Roberto Sanchez Dogui", 3386,95565 );
const proveedor2 = new Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
const proveedor3 = new Proveedor("Distribuidora sabatini", 2284556523, 29864);

listaProveedores = [proveedor1, proveedor2, proveedor3]




// RedVete.eliminarProveedores(29864);


// //veterinaria

// const veterinaria = new Veterinaria("huellitas,","perez 455",6456465, listaClientes, listaGeneralMascotas);

// const paciente1 = new Paciente("rocko", "perro",4564,48562);
// const paciente2 = new Paciente("Tomm","gato", 4455,7856)
// const paciente3 = new Paciente("nina", "Gato",4456,5862);

// veterinaria.altaPaciente(paciente1);
// veterinaria.altaPaciente(paciente2);
// veterinaria.altaPaciente(paciente3);


// veterinaria.bajaPaciente(4564);
// // Listar 
// console.log("Lista de pacientes en el registro:");
// console.log(veterinaria.getListaPacientes()); // Llama al método para obtener la lista de vehículos.



//----------------------------CLIENTES----------------------




// //Funcion para cargar un nuevo Cliente

// console.log("CARGAR UN NUEVO CLIENTE")
// let listaClientes: Cliente[] = [];
// altaCliente(listaClientes);
// console.table(listaClientes);

// //Funciones eliminar, modificar

// console.log("ELIMINAR UN CLIENTE");
// bajaCliente(listaClientes);
// console.log("MODIFICAR DATOS DE CLIENTES")
// modificarNombreCliente(listaClientes);
// modificarTelefonoCliente(listaClientes);
// console.table(listaClientes);

// //-------------------PACIENTES---------------


// let listaGeneralMascotas: Paciente []=[];

// //Funcion para cargar un nuevo Paciente

// console.info("CARGAR UN NUEVO PACIENTE");
// altaPaciente(listaClientes, listaGeneralMascotas);
// console.log(listaGeneralMascotas);

// //Funciones eliminar

// console.info("ELIMINAR PACIENTE");

// eliminarPaciente(listaClientes,listaGeneralMascotas);

// console.log("MODIFICAR PACIENTE");
// modificarPaciente(listaClientes,listaGeneralMascotas);

// //------------------------VETERINARIAS------------------




// //Funcion para cargar un nuevo Veterinaria
// console.info("CARGAR UNA NUEVA VETERINARIA");
//  let arregloVeterinarias: Veterinaria[] = []
// crearVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas);

// //Funciones eliminar, modificar
// console.log("ELIMINAR UNA VETERIANARIA");
// eliminarVeterinaria(arregloVeterinarias, 3);
// console.log("MODIFICAR UNA VETERIANARIA");
// modificarVeterinaria(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas);


// //----------------------PROVEDORES--------------------------



// //Funcion para cargar un nuevo Proveedor 

// console.info("CARGAR UN NUEVO PROVEEDOR");
// let arregloProveedores: Proveedor[] = [];
// crearProveedor(arregloProveedores);

// //Funciones eliminar, modificar Proveedor

// console.info("ELIMINAR UN PROVEEDOR")
// borrarProveedor(arregloProveedores);
// console.info("MODIFICAR UN PROVEEDOR")
// modificarProveedor(arregloProveedores, 2);



//Menú del sistema
console.log("Bienvenido/a a la red de veterinarias 'Los rescataditos'¿Qué desea hacer?: ");
console.log("----------------------------------------------------------------")
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
console.log("13. Salir")

console.log("----------------------------------------------------------------")

//Controla que la opcion ingresada sea válida y si no es valida vuelve a pedir que ingrese una opcion.

let opcion: number;
do {
    opcion = rls.questionInt("Ingrese la opcion numerica que desee: ");
    if (opcion > 13 || opcion < 1) {
        console.log("Por favor ingrese un numero entre 1 y 12");
    }

}
while (opcion > 13 || opcion < 1);
console.log("Opción válida seleccionada:", opcion);

// Una vez que se ha seleccionado una opción valida, se ejecuta el código correspondiente a ese número.
switch (opcion) {
    case 1:
        altaVeterinaria( arregloVeterinarias, listaClientes, listaGeneralMascotas);    
        break;
    case 2:
        altaCliente(listaClientes);
        break;
    case 3:
        altaPaciente(listaClientes, listaGeneralMascotas);
        break;
    case 4:
        altaProveedor(listaProveedores);
        break;
    case 5:
        modificarVeterinaria(arregloVeterinarias, 5, listaClientes, listaGeneralMascotas);
        break;
    case 6:
        modificarNombreCliente(listaClientes);
        modificarTelefonoCliente(listaClientes);
        break;
    case 7:
        modificarPaciente(listaClientes);
    case 8:
        modificarProveedor(listaProveedores, 1);
    case 9: 
        bajaVeterinaria(arregloVeterinarias, 1112 );
    case 10:
        bajaPaciente(listaClientes, listaGeneralMascotas);
    case 11:
        bajaCliente (listaClientes); 
    case 12:
        bajaProveedor (listaProveedores);
    case 13:
        console.log ("Muchas gracias por usar el servicio de red veterinaria 'Los rescataditos'. ¡Vuelva pronto!")
   
}
 

