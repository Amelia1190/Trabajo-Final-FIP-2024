/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos. 
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
 Si ya existe se debe volver a generar.*/

 // Clase Proveedor
  
 export class Proveedor {
    private nombre: string;
    private telefono: number;
    private id:number;
   // El constructor es un método especial que se llama cuando se crea una nueva instancia de la clase.
// el constructor crea una nueva instancia de la clase  yprovedor
// establece sus propiedades nombre y telefono con los valores proporcionados.
    //constructor
    public constructor (nombre:string, telefono: number,id:number){
        this.nombre = nombre;
        this.telefono = telefono;
       this.id = id; //El this es una palabra clave que se utiliza para referirse a la instancia actual de la clase.
       // Permite acceder a las propiedades y métodos de la clase desde dentro de la clase.

    }


    //getters
    public getNombre(): string{ //devuelve el valor nombre de la propiedad nombre del objeto
        return this.nombre
    }
//Estas dos funciones son llamadas "getters" o "métodos de acceso" en la programación orientada a objetos.
// Su propósito es permitir acceder a las propiedades de un objeto de manera controlada.

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


    }