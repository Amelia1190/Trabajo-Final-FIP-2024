
import { Paciente } from "./paciente";
import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedor";
import { altaVeterinaria, altaProveedor, bajaProveedor, modificarProveedor, modificarVeterinaria, bajaVeterinaria } from "./redVeterinaria";
import {altaCliente, bajaCliente, altaPaciente, bajaPaciente, modificarCliente, modificarPaciente} from "./sucursalVeterinaria"
import { Veterinaria } from "./sucursalVeterinaria";
import * as rls from 'readline-sync'


//clientes

let listaClientes: Cliente[] = [];

const cliente1 = new Cliente( "Amelia", 228452658, 5625)
const cliente2 = new Cliente ("Carolina", 2284754715, 4785)
// Crear una instancia de la clase Cliente
const cliente = new Cliente("Juan", 123456789, 1);

// Simular varias visitas del cliente
for (let i = 0; i < 10; i++) {
  cliente.contadorVIP(cliente);
}

//agrego objeto cliente al arreglo
listaClientes = [];
listaClientes.push(cliente);
listaClientes.push(cliente1);
listaClientes.push(cliente2);

//pacientes

let listaGeneralMascotas: Paciente[] = [];

const paciente1 = new Paciente ("Lola", "gato", 5625)
const paciente2= new Paciente ("Tito", "pez", 4785)

listaGeneralMascotas.push(paciente1);
listaGeneralMascotas.push(paciente2);


//sucursales vete

let arregloVeterinarias: Veterinaria[]=[];

const sucursal1= new Veterinaria("Patitas", "Belgrano 3454", 1112,[ new Cliente("Juan", 123456789, 1), new Cliente("Ana", 987654321, 2),
  ], [ new Paciente("Lola", "gato", 5625), new Paciente("Tito", "pez", 4785),]);


const sucursal2= new Veterinaria ("Full Mascotas", "Alsina 2100", 1113, [new Cliente("Pedro", 111111111, 3),new Cliente("Luisa", 222222222, 4),
    ],[new Paciente("Moro", "perro", 1234),new Paciente("Pipo", "conejo", 5678),] );

// Agregar objetos Veterinaria al arreglo
arregloVeterinarias.push(sucursal1);
arregloVeterinarias.push(sucursal2);



//provee
let listaProveedores: Proveedor[] = [];

const proveedor1 = new Proveedor("Roberto Sanchez Dogui", 3386,95565 );
const proveedor2 = new Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
const proveedor3 = new Proveedor("Distribuidora sabatini", 2284556523, 29864);


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
        modificarCliente(listaClientes, "telefono");
        
        break;
    case 7:
        modificarPaciente(listaClientes);

        break;
    case 8:
        modificarProveedor(listaProveedores);
        break;
    case 9: 
        bajaVeterinaria(arregloVeterinarias, 1112 );

        break;
    case 10:
        bajaPaciente(listaClientes);

        break;
    case 11:
        bajaCliente (listaClientes); 

        break;
    case 12:
        bajaProveedor (listaProveedores);

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
        console.log ("Muchas gracias por usar el servicio de red veterinaria 'Los rescataditos'. ¡Vuelva pronto!");

        break;
           }
   
 // VUELVE AL MENU PRINCIPAL 
let menu2: number = rls.questionInt("ingrese 1 para volver al menu principal o 2 para salir : ");
if (menu2 === 1) {
    console.log(opcion);
} else {
    console.error("-----------------------------");
    console.error("A SALIDO.");
    console.error("-----------------------------");
    break;
}
};
