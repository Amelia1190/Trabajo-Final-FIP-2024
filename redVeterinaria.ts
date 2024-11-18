// Nuestro cliente es una red de veterinarias y desea
// poder acceder a la siguiente información:
// ● Sucursales de Veterinarias
// ● Clientes
// ● Pacientes (mascotas)
// ● Proveedores

export class redVeterinaria {
    nombre: string;
    direccion: string;
    ID: number;
    

    constructor(nombre:string, direccion:string, id:number){
        this.nombre=nombre;
        this.direccion=direccion;
        this.ID=id;

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