import { Cliente } from "./cliente"
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";
import { existeId, crearNumRandom} from "./sucursalVeterinaria";
import * as readlineSync from 'readline-sync';

/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
Sucursales de Veterinarias, Clientes,Pacientes (mascotas) yProveedores 

Proveedores: la red debe contar con la opción de alta, baja y modificación de los mismos. 

Veterinarias: La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.

IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
Si ya existe se debe volver a generar.*/


  //Clase RedVeterinarias

  export  class RedVeterinaria{

    private veterinarias: Veterinaria [];
    private proveedores:  Proveedor [];


//constructor
    public constructor(){
        this.veterinarias =[];
        this.proveedores = [];
    }

    //getters
    public getVeterinarias() :Veterinaria []{
        return this.veterinarias;
    }
    
    public getProveedores() : Proveedor []{
        return this.proveedores;
    }

  
    //setters
    public setVeterinarias(veterinarias: Veterinaria[]) : void {
        this.veterinarias = veterinarias;

    }
    
    public setProveedores(proveedores: Proveedor []) {
        this.proveedores = proveedores;
    
  }

  }

//--------------------------------------- PROVEEDORES


//Función para Alta  Proveedor

export function altaProveedor(arrProveedor: Proveedor[]){
    let nombre: string = readlineSync.question("Ingrese Apellido y Nombre del proveedor: ");
    let telefono: number = readlineSync.questionInt("Ingrese el n° de telefono del proveedor: ");
      
    let id: number = crearNumRandom(20000);
    while(existeId(arrProveedor,id)==true){
      id=crearNumRandom(20000);
    }
  
    let nProveedor: Proveedor = new Proveedor(nombre, telefono, id);
    arrProveedor.push(nProveedor);
    console.log(arrProveedor);
  }
  
  
  //Función para modificar datos de Proveedor
  export function modificarProveedor(arregloProveedores: Proveedor[], posicion: number){
    let nombre: string = readlineSync.question("Ingrese el nombre modificado: ");
    let telefono: number = readlineSync.questionInt("Ingrese el numero nuevo: ");
    let id: number = arregloProveedores[posicion].getId()
    
    let proveedorMod: Proveedor = new Proveedor(nombre, telefono, id)
    delete arregloProveedores[posicion]
    arregloProveedores[posicion] = proveedorMod;
    console.log(arregloProveedores)
  }
  
  //Función para dar de baja Proveedor 
  
  export function bajaProveedor(proveedor: Proveedor[]){ 
    let bajaId:number=readlineSync.questionInt("Ingrese Id a dar de baja: ")
    for (let i= 0; i< proveedor.length; i++){
      if (bajaId === proveedor[i].getId()){
        proveedor.splice(i,1)
        console.log("Se dio de baja el Proveedor con id ingresado")
      }
    }
    console.log(proveedor)
  }
  
  //----------------------------------------sucursales de Veterinarias
  
  
  
  //alta Veterinaria
  
  export function altaVeterinaria(arrVeterinaria: Veterinaria[], arrClientes: Cliente[], arrPacientes: Paciente[]){
      let nombre : string = readlineSync.question("Ingrese el nombre de la veterinaria: ");
      let direccion: string = readlineSync.question("ingrese dirección: ")
      let id: number = crearNumRandom(20000);
      
    while(existeId(arrVeterinaria,id)==true){
      id=crearNumRandom(20000);
    }
      
      let listaClientes: Cliente[] = arrClientes;
      let listaGeneralPacientes: Paciente[]= arrPacientes;
  
    let nuevaVeterinaria: Veterinaria = new Veterinaria(nombre, direccion, id, listaClientes, listaGeneralPacientes);
    arrVeterinaria.push(nuevaVeterinaria)
      console.log(arrVeterinaria)
  
  }
  
  //Modificar veterinaria
  
  export function modificarVeterinaria(arregloVete: Veterinaria[], posicion: number, arrClientes: Array<Cliente>, arrPacientes: Array<Paciente>){
      let nombre : string = readlineSync.question("Ingrese el nombre nuevo: ");
      let direccion: string = readlineSync.question("ingrese nueva dirección: ");
  
    let id: number = arregloVete[posicion].getId()    
  
      let veterinariaModificada : Veterinaria = new Veterinaria (nombre, direccion, id, arrClientes, arrPacientes);
      arregloVete[posicion] = veterinariaModificada;
      console.log(arregloVete)
  
  }
  
  
  //Funcion baja Veterinaria  
  
  export function bajaVeterinaria(arregloVete:Veterinaria[], id: number):void{
  
    for (let i= 0; i< arregloVete.length; i++){
      if (id === arregloVete[i].getId()){
        arregloVete.splice(i,1)
      }
    }
    console.log(arregloVete)
  }
  