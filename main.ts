import { Paciente } from "./paciente";
import { Cliente } from "./cliente"
import { Proveedor } from "./proveedor";
import { altaVeterinaria, altaProveedor, bajaProveedor, modificarProveedor, modificarVeterinaria, bajaVeterinaria } from "./redVeterinaria";
import {altaCliente, bajaCliente, altaPaciente, bajaPaciente, modificarCliente, modificarPaciente} from "./sucursalVeterinaria"
import { Veterinaria } from "./sucursalVeterinaria";
import * as rls from 'readline-sync'

// Crear una instancia de la clase Cliente
//cliente 1
const cliente1 = new Cliente("Amelia", 2284526458, 5625, 3)
const paciente = new Paciente("Lola", "gato", 5625)
const paciente1 = new Paciente("rocky", "perro", 5625)
cliente1.agregarPaciente(paciente);
cliente1.agregarPaciente(paciente1);

//cliente 2
const cliente2 = new Cliente("Carolina", 2284754715, 4785, 4)
const paciente2 = new Paciente("Tito", "pez", 4785)
const paciente3 = new Paciente("Boby", "perro", 4785)
const paciente4 = new Paciente("Luna", "gato", 4785)
cliente2.agregarPaciente(paciente2);
cliente2.agregarPaciente(paciente3);
cliente2.agregarPaciente(paciente4);

//cliente 3

const cliente3 = new Cliente("Juan", 2284345689, 1510, 10)
const paciente5 = new Paciente("Firulais", "perro", 1510)
const paciente6 = new Paciente("Pelusa", "gato", 1510)
cliente3.agregarPaciente(paciente5);
cliente3.agregarPaciente(paciente6);

//cliente 4

const cliente4 = new Cliente("Mateo", 2289876543, 5678, 3)
const paciente7 = new Paciente("Rex", "perro", 5678)
cliente4.agregarPaciente(paciente7);

// Agregamos clientes a la lista
let listaClientes: Cliente[] = [];
listaClientes.push(cliente1);
listaClientes.push(cliente2);
listaClientes.push(cliente3);
listaClientes.push(cliente4);

//Agregamos pacientes a la lista
let listaGeneralMascotas: Paciente[] = [];
listaGeneralMascotas.push(paciente);
listaGeneralMascotas.push(paciente1);
listaGeneralMascotas.push(paciente2);
listaGeneralMascotas.push(paciente3);
listaGeneralMascotas.push(paciente4);
listaGeneralMascotas.push(paciente5);
listaGeneralMascotas.push(paciente6);
listaGeneralMascotas.push(paciente7);

//sucursales vete

let arregloVeterinarias: Veterinaria[]=[];

const sucursal1= new Veterinaria("Patitas", "Belgrano 3454", 1112);
const sucursal2= new Veterinaria ("Full Mascotas", "Alsina 2100", 1113 );

// Agregar objetos Veterinaria al arreglo
arregloVeterinarias.push(sucursal1);
arregloVeterinarias.push(sucursal2);



//provee
let listaProveedores: Proveedor[] = [];

const proveedor1 = new Proveedor("Roberto Sanchez Dogui", 2284565886,95565 );
const proveedor2 = new Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
const proveedor3 = new Proveedor("Andres Perez Whiskas", 2284556523, 29864);



// Agregar objetos Proveedor al arreglo
listaProveedores.push(proveedor1);
listaProveedores.push(proveedor2);
listaProveedores.push(proveedor3);



while (true){
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
console.log("13. Verificar si es VIP");
console.log("14.salir");

console.log("----------------------------------------------------------------")

//Controla que la opcion ingresada sea válida y si no es valida vuelve a pedir que ingrese una opcion.

let opcion: number;
do {
    opcion = rls.questionInt("Ingrese la opcion numerica que desee: ");
    if (opcion > 14|| opcion < 1) {
        console.log("Por favor ingrese un numero entre 1 y 14");
    }

}
while (opcion > 14|| opcion < 1);
console.log("Opción válida seleccionada:", opcion);

// Una vez que se ha seleccionado una opción valida, se ejecuta el código correspondiente a ese número.
switch (opcion) {
    case 1:
      altaVeterinaria(arregloVeterinarias);
      break;
    case 2:
      altaCliente(listaClientes);
      break;
    case 3:
      listaGeneralMascotas = altaPaciente(listaClientes, listaGeneralMascotas);
      break;
    case 4:
      altaProveedor(listaProveedores);
      break;
    case 5:
      modificarVeterinaria(arregloVeterinarias);
      break;
    case 6:
      modificarCliente(listaClientes, "telefono");
      break;
    case 7:
      modificarPaciente(listaClientes);
      break;
    case 8:
      modificarProveedor(listaProveedores);
      break;
    case 9:
      bajaVeterinaria(arregloVeterinarias);
      break;
    case 10:
      bajaPaciente(listaClientes);
      break;
    case 11:
      bajaCliente(listaClientes);
      break;
    case 12:
      bajaProveedor(listaProveedores);
      break;
    case 13:
      console.log("Ingrese el ID del cliente para verificar si es VIP:");
      const idClienteVIP = rls.questionInt("Ingrese el ID del cliente: ");
      listaClientes.forEach(cliente => {
        if (cliente.getId() === idClienteVIP) {
          cliente.contadorVIP(cliente);
        }
      });
      break;
    case 14:
      console.log("Muchas gracias por usar el servicio de red veterinaria 'Los rescataditos'. ¡Vuelva pronto!");
      break;
  }

  // VUELVE AL MENU PRINCIPAL
  let menu2: number = rls.questionInt("Ingrese 1 para volver al menu principal o 2 para salir: ");
  if (menu2 === 1) {
    console.log(opcion);
  } else {
    console.error("-----------------------------");
    console.error("Gracias por visitarnos. ¡Que tengas un buen día!.");
    console.error("-----------------------------");
    break;
  }
}