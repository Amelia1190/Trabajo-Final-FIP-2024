// Nuestro cliente es una red de veterinarias y desea
// poder acceder a la siguiente información:
// ● Sucursales de Veterinarias
// ● Clientes
// ● Pacientes (mascotas)
// ● Proveedores

// ● Veterinarias: nombre, dirección, id
// (un número generado  aleatoriamente  al  momento  del  alta).
//  La red debe tener la posibilidad de dar de alta, modificar 
//  datos o dar de baja las mismas.


import{Cliente} from "./clientes";
import{Paciente} from "./pacientes";
import{Proveedor} from "./proveedores";


export class sucursales {
    protected nombre: string;
    protected direccion: string;
    protected ID: number;
    private arrClientes: Cliente [] = [];
    private arrPacientes: Paciente [] = [];
    private arrProveedores: Proveedor [] = [];

    constructor(nombre:string, direccion:string, id:number, clientes:Cliente[], pacientes:Paciente[],proveedores:Proveedor[]){     
        this.nombre=nombre;
        this.direccion=direccion;
        this.ID=id;
        this.arrClientes= clientes;
        this.arrPacientes= pacientes;
        this.arrProveedores= proveedores;  
    }

     //metodos getters

     getNombre(){
        return this.nombre;
    }
    getDireccion(){
        return this.direccion;
    }
    getID(){
        return this.ID;
    }
    getPacientes(){
        return this.arrPacientes;
    }
    getClientes(){
        return this.arrClientes;
    }
    getProveedores(){
        return this.arrProveedores;
    }

    //metodos setters
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    setDireccion(direccion:string){
        this.direccion=direccion;
    }
    setID(id:number){
        this.ID=id;
    }
    setClientes(arrClientes:Cliente[]){
        this.arrClientes=arrClientes;
    }
    setPacientes(arrPacientes:Paciente[]){
        this.arrPacientes=arrPacientes;
    }
    setProveedores(arrProveedores:Proveedor[]){
        this.arrProveedores=arrProveedores;
    }
    
    //otros metodos
    darDeAlta(){
        
        console.log("Se ha dado de alta la sucursal "+this.nombre);
    }
    darDeBaja(){
        console.log("Se ha dado de baja la sucursal "+this.nombre);
    }   
    modificarDatos(nombre:string, direccion:string){      // consultar si al tener este metodo deberiamos sacar los setters de nombre y direccion
        this.nombre=nombre;
        this.direccion=direccion;
        console.log("Datos modificados");
        console.log("Nuevo nombre: "+this.nombre);
        console.log("Nueva direccion: "+this.direccion);
    }
}
