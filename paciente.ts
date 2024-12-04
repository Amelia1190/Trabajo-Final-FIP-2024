


  /*Pacientes (mascotas): nombre, especie (si no es perro o gato, deberá registrarse como exótica), 
  id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */


   // Clase Paciente
   export class Paciente{
    private nombre: string;
    private especie: string;
    private idDueño: number; 

    //constructor

    public constructor(nombre: string, especie: string,idDueño: number){
        this.nombre = nombre;
        this.especie = especie;
        this.idDueño = idDueño;
    }

    //getters
    public getNombre():string{
        return this.nombre
    }
    
    public getEspecie():string{
        return this.especie
    }

   public getIdDueño():number{
        return this.idDueño
    }
    
    
    

    //setters
    public setEspecie(Especie:string):void{
        this.especie=Especie
    }

    public setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre
    }

//es Exotica
public esExotica(): string {
    if (this.especie !== "perro" && this.especie !== "gato") {
      return `La Mascota  ${this.nombre} es exótica`;
    } else {
      return `la Mascota  ${this.nombre} no es exótica`;
    }
 }
}