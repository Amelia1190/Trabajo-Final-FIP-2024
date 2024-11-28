/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos. 
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
 Si ya existe se debe volver a generar.*/

 // Clase Proveedor
  
 export class Proveedor {
    private nombre: string;
    private telefono: number;
    private id:number;
    //public id:  number=Math.floor(Math.random() * 15000) + 1;

    //constructor
    public constructor (nombre:string, telefono: number,id:number){
        this.nombre = nombre;
        this.telefono = telefono;
       this.id = id; 
       //this.id =Math.floor(Math.random() * 15000) + 1;

    }


    //getters
    public getNombre(): string{
        return this.nombre
    }

    public getTelefono(): number{
        return this.telefono
    }

    public getId(): number{
       return this.id
    }

    
    //setters
    public setNombre(nombre: string): void{
        this.nombre= nombre
    }
    
    public setTelefono(nuevoTelefono: number): void{
        this.telefono = nuevoTelefono
    }

    public setId(nuevoId:number):void {
            this.id = nuevoId;
    }

/*//saber informacion del proveedor
    public obtenerInformacion(): string {
        return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.telefono}`;
      }*/
<<<<<<< HEAD
}
=======


    }
>>>>>>> main
