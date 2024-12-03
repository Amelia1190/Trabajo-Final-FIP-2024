import { Cliente } from "./Cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";
import { existeId, crearId} from "./sucursalVeterinaria";
import * as rls from 'readline-sync';

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
  /*PROVEEDORES*/


//---Alta  Proveedor

export function altaProveedor(arrProveedor: Proveedor[]){
    let nombre: string = rls.question("Ingrese Apellido y Nombre del proveedor: ");
    let telefono: number = rls.questionInt("Ingrese el n° de telefono del proveedor: ");
      
    let id: number = crearId(3500);
    while(existeId(arrProveedor,id)==true){
      id=crearId(3500);
    }
  
    let nProveedor: Proveedor = new Proveedor(nombre, telefono, id);

    //agrego al arreglo de proveedores
    arrProveedor.push(nProveedor);
      console.log(" proveedor agregado con éxito.");

  //me muestra lOS proveedores
  console.log("Lista de Proveedores:");
  arrProveedor.forEach((proveedor, index) => {
    console.log(`Lugar en la lista: ${index + 1}:`);
    console.log(`Nombre: ${proveedor.getNombre()}`);
    console.log(`Telefono: ${proveedor.getTelefono()}`);
    console.log(`ID: ${proveedor.getId()}`);
    console.log("------------------------");
  });

  }
  
  // --- Modificar datos de Proveedor
export function modificarProveedor(arregloProveedores: Proveedor[]) {
  
  const idProveedor = rls.questionInt("Ingrese el ID del proveedor que desea modificar: ");

  // Buscar el proveedor en el arreglo
  const posicion = arregloProveedores.findIndex((proveedor) => proveedor.getId() === idProveedor);

  if (posicion !== -1) {
    console.log("Ingrese los nuevos datos del proveedor:");
    const nombre = rls.question("Ingrese el nombre modificado: ");
    const telefono = rls.questionInt("Ingrese el nuevo teléfono: ");

    // Modificar el proveedor
    const proveedorMod = new Proveedor(nombre, telefono, idProveedor);
    arregloProveedores[posicion] = proveedorMod;

    console.log("Proveedor modificado con éxito.");
  } else {
    console.log("Proveedor no encontrado.");
  }
}
 
  //--- baja Proveedor 
  
  export function bajaProveedor(proveedor: Proveedor[]){ 
    let bajaId:number=rls.questionInt("Ingrese Id a dar de baja: ")
    for (let i= 0; i< proveedor.length; i++){
      if (bajaId === proveedor[i].getId()){
        proveedor.splice(i,1)
        console.log("Se dio de baja el Proveedor")
      }
    }
    console.log(proveedor)
  }
  
  /*sucursales de Veterinarias*/
      
    
//---alta Veterinaria
export function altaVeterinaria(arregloVeterinarias: Veterinaria[],listaClientes: Cliente[],listaGeneralMascotas: Paciente[]){
  console.log("Ingrese los datos de la nueva sucursal:");
  let nombre :string = rls.question("Ingrese el nombre de la sucursal: ");
  let direccion = rls.question("Ingrese la dirección de la sucursal: ");
  let id: number = crearId(3500);

  while(existeId(arregloVeterinarias,id)==true){
    id=crearId(3500);
  }

  // Crear una nueva sucursal
  const nuevaSucursal = new Veterinaria(nombre,direccion,id,listaClientes,listaGeneralMascotas);

  // Agregar la nueva sucursal al arreglo
  arregloVeterinarias.push(nuevaSucursal);

  console.log("Sucursal agregada con éxito.");
//me muestra las sucursales
  console.log("Lista de sucursales:");
  arregloVeterinarias.forEach((sucursal, index) => {
    console.log(`Sucursal ${index + 1}:`);
    console.log(`Nombre: ${sucursal.getNombre()}`);
    console.log(`Dirección: ${sucursal.getDireccion()}`);
    console.log(`ID: ${sucursal.getId()}`);
    console.log("------------------------");
  });
}


  
  //Modificar veterinaria
  
  export function modificarVeterinaria(arregloVete: Veterinaria[], posicion: number, arrClientes: Cliente[], arrPacientes:Paciente[]){
      let nombre : string = rls.question("Ingrese el cambio de nombre:");
      let direccion: string = rls.question("ingrese nueva dirección: ");
  
    let id: number = arregloVete[posicion].getId()    
  
      let veterinariaModificada : Veterinaria = new Veterinaria (nombre, direccion, id, arrClientes, arrPacientes);
      arregloVete[posicion] = veterinariaModificada;
      console.log(arregloVete)
  
  }

  //--- baja Veterinaria  por Id
  
  export function bajaVeterinaria(arregloVete:Veterinaria[], id: number):void{
  
    for (let i= 0; i< arregloVete.length; i++){
      if (id === arregloVete[i].getId()){
        arregloVete.splice(i,1)
      }
    }
    console.log(arregloVete)
  }
  
  