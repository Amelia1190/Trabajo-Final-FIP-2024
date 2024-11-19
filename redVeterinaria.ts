import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";
import { existeId, crearId} from "./sucursalVeterinaria";
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
