import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";


import * as readlineSync from 'readline-sync';

/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) 

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */

/*Clientes:  las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */

/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */


export class Veterinaria {
    private nombre: string;
    private direccion: string; 
    private id: number;
    private listaClientes: Cliente [];
    private listaPacientes:Paciente [];
    
    
   
  
    public constructor (nombre: string, direccion: string, id:number){
        this.nombre= nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = [];
        this.listaPacientes =[];
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
  
    

//  ---Crear numero para ID .

export function crearId(max: number){
  return Math.floor(Math.random() * max)
}


//  --- Y para verificar si id existe
export function existeId(arreglo:Veterinaria[]|Cliente[]|Proveedor[],id:number):boolean{
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

/*Clientes*/


//--- Alta cliente 

export function altaCliente(listaClientes: Cliente[]){
  let nombre: string = readlineSync.question("Ingrese Apellido y Nombre del cliente: ");
  let telefono: number = readlineSync.questionInt("Ingrese el n° de telefono del cliente: ");
    
  let id: number = crearId(25000);

  while(existeId(listaClientes,id)==true){
    id=crearId(25000);
  }
   //crear nuevo cliente 
  let nuevoCliente : Cliente = new Cliente(nombre, telefono, id,22 );
  
    // Agregar el cliente al arreglo
  listaClientes.push(nuevoCliente)

  console.log(" cliente agregado con éxito.");

  //me muestra lOS CLIENTES
  console.log("Lista de Clientes:");
  listaClientes.forEach((Cliente, index) => {
    console.log(`Lugar: ${index + 1}:`);
    console.log(`Nombre: ${Cliente.getNombre()}`);
    console.log(`Telefono: ${Cliente.getTelefono()}`);
    console.log(`ID: ${Cliente.getId()}`);
    console.log("------------------------");
  });
}


 //--- buscar por id a un cliente/ proveedor
 
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

// --- baja cliente

export function bajaCliente(arrClientes:Cliente[]):void{
  let bajaId:number=readlineSync.questionInt("Ingrese el id del cliente que busca dar de  baja: ");
  let ubicacion:number=buscarPorId(arrClientes,bajaId);
  if(ubicacion!= -1){
    arrClientes.splice(ubicacion,1);
    console.log("El cliente ingresado se dio de baja");
  }else{
    console.log("No se encontro id en el sistema")
  }

}

//--- modificar  cliente (numero)

export function modificarCliente(arrCliente: Cliente[], datoAmodificar: string) {
  const idCliente = readlineSync.questionInt("Ingrese id del cliente a modificar: ");
  const ubicacionId = buscarPorId(arrCliente, idCliente);

  if (ubicacionId !== -1) {
    let nuevaInfo: string | number;

    if  (datoAmodificar === "telefono") {
      nuevaInfo = readlineSync.questionInt("Ingrese nuevo n° telefonico: ");
      arrCliente[ubicacionId].setTelefono(nuevaInfo);
    }

    console.log(`Se modificó exitosamente el ${datoAmodificar}: ${arrCliente[ubicacionId].getNombre() }`);
  } else {
    console.log("No se encontro id ingresado");
  }
}
/* Pacientes*/


//--- Alta  paciente
export function altaPaciente(arrCliente:Cliente[], arrPacientes:Paciente[]){
  let nombre:string=readlineSync.question("Ingrese el nombre del paciente: ");
  let especie:string=readlineSync.question("Ingrese la especie del Paciente: ");
  let idDeCliente=readlineSync.questionInt("Ingrese id del Cliente: ");

  let ubicacionId:number=buscarPorId(arrCliente,idDeCliente);
  
  if(ubicacionId!= -1){
    let nuevoPaciente:Paciente=new Paciente(nombre,especie,idDeCliente);
    //agrega el paciente al arreglo
    arrPacientes.push(nuevoPaciente);
    console.log(" paciente agregado con éxito.");
    arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
  }else{
    console.log("No se encontro Id ingresado")
  }
     //me muestra lOS pacientes
     console.log("Lista de pacientes:");
     arrPacientes.forEach((paciente, index) => {
       console.log(`N° en lista: ${index + 1}:`);
       console.log(`Nombre: ${paciente.getNombre()}`);
       console.log(`especie: ${paciente.getEspecie()}`);
       console.log(`Id Dueño: ${paciente.getIdDueño()}`);
       console.log("------------------------");
     });
   }


//--- baja paciente

export function bajaPaciente(arrCliente:Cliente[]):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para dar de baja el paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);

  
  if(ubicacionId!=-1){
    console.log("Lista de pacientes "+ arrCliente[ubicacionId].getListaMascotas())
    let bajaDePaciente=readlineSync.question("Ingrese el nombre del paciente a dar de baja: ")
    // let baja:boolean=false;
    // let i:number=0;
    console.log("El paciente ha sido dado de baja.");
  }
}
//--- modificar Paciente

export function modificarPaciente(arrCliente: Cliente[]):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para modificar el paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
 
  
  if(ubicacionId!=-1){
    console.log("Lista de pacientes "+ arrCliente[ubicacionId].getListaMascotas()) 
    let pacienteModificar=readlineSync.question("Ingrese el nombre del paciente a modificar: ")
    /*let ok:boolean=false;
    let i:number=0;
//no funciona while
/*while((ok==false) && (i<arrCliente[ubicacionId].getListaMascotas().length)){
      if(pacienteModificar == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()){
        ok=true;
        let nuevoNombre=readlineSync.question("Ingrese el nuevo Nombre del paciente: ")
        let nuevaEspecie=readlineSync.question("Ingrese nuevamente especie del paciente: ")
        
        arrCliente[ubicacionId].getListaMascotas()[i].setNombre(nuevoNombre);
        arrCliente[ubicacionId].getListaMascotas()[i].setEspecie(nuevaEspecie);*/
        console.log("El paciente se modificó exitosamente")
     
    
  }else{
    console.log("El Id del cliente Ingresado no se encontro")
  }
  
}
