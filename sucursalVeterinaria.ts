import { Cliente } from "./Cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";


import * as readlineSync from 'readline-sync';

/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) 

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */

/*Clientes:  las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */

/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */


export class Veterinaria {
    altaPaciente(paciente1: Paciente) {
        throw new Error("Method not implemented.");
    }
    bajaPaciente(arg0: number) {
        throw new Error("Method not implemented.");
    }
    private nombre: string;
    private direccion: string; 
    private id: number;
    private listaClientes: Cliente [];
    private listaPacientes:Paciente [];
    agregarCliente: any;
    eliminarCliente: any;
   
  
    public constructor (nombre: string, direccion: string, id:number,listaClientes: Cliente [],listaPacientes:Paciente []){
        this.nombre= nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = listaClientes;
        this.listaPacientes =listaPacientes;
    }
  
    //getters
    public getNombre():string{
        return this.nombre
    }
  
    public getDireccion():string{
        return this.direccion
    }
  
     public getId(): number{
        return this.id
    }
  
    public getListaClientes():Cliente[] {
        return this.listaClientes;                        //retorna lista de Clientes
    }
  
    public getListaPacientes():Paciente[]{                //retorna lista de Pacientes
        return this.listaPacientes;
    }
   
 

  
    //setters
    public setId(nuevoId:number):void {
        this.id = nuevoId;
    }
  
    public setListaClientes(listaClientes: Cliente[]){
        this.listaClientes = listaClientes;
    }
    public setListaPacientes(listaPacientes:Paciente[]){
        this.listaPacientes = listaPacientes;
    }

 }

  
    

// Crear numero random .

export function crearNumRandom(max: number){
  return Math.floor(Math.random() * max)
}


// -----------------FUNCION PARA CLIENTES------------------

//funcion para verificar si id existe
export function existeId(arreglo:Cliente[]|Proveedor[]|Veterinaria[],id:number):boolean{
  let existe:boolean= false;
  let i:number=0;
  while((existe==false)&&(i<arreglo.length)){
    if(id==arreglo[i].getId()){   //
      existe=true
    }
    i=i+1
  }
  return existe
 }


//-----------Funcion para crear cliente nuevo--------

export function altaCliente(arrCliente: Cliente[]){
  let nombre: string = readlineSync.question("Ingrese nombre y apellido del cliente: ");
  let telefono: number = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    
  let id: number = crearNumRandom(1000);

  while(existeId(arrCliente,id)==true){
    id=crearNumRandom(1000);
  }
    
  let nuevoCliente : Cliente = new Cliente(nombre, telefono, id );
  arrCliente.push(nuevoCliente)
  
  return arrCliente
}
 //Funcion buscar por id a un cliente/ proveedor
 
 export function buscarPorId(arreglo:Cliente[]|Proveedor[],id:number){
  let ubicacion:number=-1;
  let ok:boolean=false;
  let i:number=0;
  while((ok==false) && (i< arreglo.length)){
    if(id==arreglo[i].getId()){
      ubicacion=i;
      ok=true;
    }else{
      i=i+1
    }
  }
  return ubicacion
}

//Funcion para borrar un cliente

export function bajaCliente(arrClientes:Cliente[]):void{
  let borrarId:number=readlineSync.questionInt("Ingrese el id del cliente a dar de baja: ");
  let ubicacion:number=buscarPorId(arrClientes,borrarId);
  if(ubicacion!= -1){
    arrClientes.splice(ubicacion,1);
    console.log("Se elimino cliente correctamente");
  }else{
    console.log("No se encontro id ingresado")
  }

}

//Funciones para modificar datos de cliente (numero telefonico y nombre)
export function modificarNombreCliente(arrCliente:Cliente[]){
  
  let idCliente:number=readlineSync.questionInt("Ingrese id del cliente a modificar el nombre: ");
  
  let ubicacionId:number=buscarPorId(arrCliente,idCliente);
  if(ubicacionId!=-1){
    let nuevoNombre:string=readlineSync.question("Ingrese el nuevo nombre: ");
    arrCliente[ubicacionId].setNombre(nuevoNombre)
    console.log("Se modifico exitosamente el nombre:  " + arrCliente[ubicacionId].getNombre())
  }else{
    console.log("No se encontro id ingresado")
  }
}

export function modificarTelefonoCliente(arrCliente: Cliente[]){
  let idCliente:number=readlineSync.questionInt("Ingrese Id del cliente a modificar el numero telefonico: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
  if(ubicacionId!=-1){
    let nuevoTelefono:number=readlineSync.questionInt("Ingrese nuevo numero telefonico: ");
    arrCliente[ubicacionId].setTelefono(nuevoTelefono);
    console.log("Se modifico exitosamente el numero telefonico: " + arrCliente[ubicacionId].getTelefono());
  }else {
    console.log("No se encontro id ingresado")
  }
}

//---------------------------FUNCION PARA PACIENTE-----------------------


//Funcion para crear nuevo paciente
export function altaPaciente(arrCliente:Cliente[], arrPacientes:Paciente[]){
  let nombre:string=readlineSync.question("Ingrese el nombre del paciente: ");
  let especie:string=readlineSync.question("Ingrese la especie del Paciente: ");
  let idDeCliente=readlineSync.questionInt("Ingrese id del Cliente: ");

  let ubicacionId:number=buscarPorId(arrCliente,idDeCliente);
  
  if(ubicacionId!= -1){
    let nuevoPaciente:Paciente=new Paciente(nombre,especie,idDeCliente);
    arrPacientes.push(nuevoPaciente);
    arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
  }else{
    console.log("No se encontro Id ingresado")
  }
  return arrPacientes
}

//Funcion eliminar paciente

export function bajaPaciente(arrCliente:Cliente[],arrPacientes:Paciente[]):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para dar de baja el paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
 
  
  if(ubicacionId!=-1){
    console.log("Lista de pacientes "+ arrCliente[ubicacionId].getListaMascotas())
    let borrarPaciente=readlineSync.question("Ingrese el nombre del paciente a dar de baja: ")
    let eliminar:boolean=false;
    let i:number=0;

    while((eliminar==false) && (i<arrCliente[ubicacionId].getListaMascotas().length)){
      if(borrarPaciente == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()){
        eliminar=true;
        arrCliente[ubicacionId].getListaMascotas().splice(i,1)
      }else{
        i=i+1
      }
    }

  }
  
  
}

//funcion para modificar Paciente

export function modificarPaciente(arrCliente: Cliente[]):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para Modificar el paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
 
  
  if(ubicacionId!=-1){
    console.log("Lista de pacientes "+ arrCliente[ubicacionId].getListaMascotas()) 
    let pacienteModificar=readlineSync.question("Ingrese el nombre del paciente a Modificar: ")
    let ok:boolean=false;
    let i:number=0;

    while((ok==false) && (i<arrCliente[ubicacionId].getListaMascotas().length)){
      if(pacienteModificar == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()){
        ok=true;
        let nuevoNombre=readlineSync.question("Ingrese el nuevo nombre del paciente: ")
        let nuevaEspecie=readlineSync.question("Ingrese nuevamente especie del paciente: ")
        arrCliente[ubicacionId].getListaMascotas()[i].setNombre(nuevoNombre);
        arrCliente[ubicacionId].getListaMascotas()[i].setEspecie(nuevaEspecie);
        console.log("El paciente se modifico exitosamente")
      }else{
        i=i+1
      }
    }
  }else{
    console.log("El Id del cliente Ingresado no se encontro")
  }
  
}
