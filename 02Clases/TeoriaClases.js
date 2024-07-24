/* Clases: determinada por la vida real? xd, dentro de estos exiten atributos y métodos (Te acuerdad :3) clase: choce, metodos: antar, atributos: color, placa; los atributos solo pueden ser modificados o alterados por un constructor */
/* Constructor: inicializar todas las propiedades de las clases */
class Auto/* Sirmpre debe ir con mayúscula */{
    /* El constructor es un método */
    constructor (valormarca , valormodelo, valorcolor, valoraño){
        /* Atributos */
        this.marca = valormarca
        this.modelo = valormodelo
        this.color = valorcolor 
        this.año = valoraño
    }
    arrancar(){
        console.log(this.marca , this.modelo)
    }
    detener(){
        console.log(this.color, this.año)
    }
}


/* Para maneja la instancia se debe crear un objeto (Recuerdas?:3)*/

let miauto1 = new Auto("Tesla", "Model S","Rojo", 2012)
let miauto2 = new Auto("Volkswagen", "Volkswagen T-Cross","azul", 2019)

miauto1.arrancar()
miauto2.arrancar()


/* Crear la clase persona con numero de documetno, nombre, edad y el metodo saludo */

class Persona{
    constructor (Id , nombre, edad, apellido ){
        this.Id = Id
        this.nombre = nombre
        this.edad = edad 
        this.apellido = apellido
    }
    sinsaludo(){
        console.log(this.nombre)
    }
    saludo(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
let personaInstancia1 = new Persona(123, "Luz" , 14 , "Noceda")
let personaInstancia2 = new Persona(345, "Amity", 14, "Blight")
let personaInstancia3 = new Persona(678, "Gus", 12, "Porter")
let personaInstancia4 = new Persona(890,"Hunter", 16, "")
let personaInstancia5 = new Persona(222, "Willow", 14, "Park")

personaInstancia1.saludo()
personaInstancia2.saludo()
personaInstancia3.saludo()
personaInstancia4.saludo()
personaInstancia5.saludo()

personaInstancia1.sinsaludo()
personaInstancia2.sinsaludo()
personaInstancia3.sinsaludo()
personaInstancia4.sinsaludo()
personaInstancia5.sinsaludo()
