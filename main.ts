import * as rls from 'readline-sync';
import {sucursales} from "./sucursales";
import {Cliente} from "./clientes";
import {Paciente} from "./pacientes";
import {Proveedor} from "./proveedores";


//Declaración de variables
let clientes: Cliente [] = [];
let pacientes: Paciente [] = [];    
let proveedores: Proveedor [] = [];




//Menú del sistema
console.log("Bienvenido/a a la red de veterinarias 'Los rescataditos'¿Qué desea hacer?: ");
console.log("----------------------------------------------------------------")
console.log("1. Ingresar una nueva sucursal");
console.log("2. Ingresar un nuevo cliente");
console.log("3. Ingresar un nuevo paciente");
console.log("4. Ingresar un nuevo proveedor");
console.log("5. Consultar datos de una sucursal");
console.log("6. Consultar datos de un cliente");
console.log("7. Consultar datos de un paciente");
console.log("8. Consultar datos de un proveedor");
console.log("9. Dar de alta una sucursal");
console.log("10. Dar de baja una sucursal");    
console.log("11. Modificar datos de una sucursal");
console.log("12. Salir");

console.log("----------------------------------------------------------------")

//Controla que la opcion ingresada sea válida y si no es valida vuelve a pedir que ingrese una opcion.

let opcion: number;
do {
    opcion = rls.questionInt("Ingrese la opcion numerica que desee: ");
    if (opcion > 12 || opcion < 1) {
        console.log("Por favor ingrese un numero entre 1 y 12");
    }

}
while (opcion > 12 || opcion < 1);
console.log("Opción válida seleccionada:", opcion);

// Una vez que se ha seleccionado una opción valida, se ejecuta el código correspondiente a ese número.
switch (opcion) {
    case 1:
        console.log("Ingrese los datos de la sucursal:");
        let nombre: string = rls.question("Nombre: ");
        let direccion: string = rls.question("Direccion: ");
        let id: number = rls.questionInt("ID: ");
        let sucursal: sucursales = new sucursales(nombre, direccion, id, clientes, pacientes, proveedores);
        console.log("Datos ingresados:", sucursal.getNombre(), sucursal.getDireccion(), sucursal.getID());
        break;    
    case 2:
}