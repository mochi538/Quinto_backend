/* Objetos: Adaptar objetos de la vida real a código, puede parecer un array con la diferencia de que los datos almacenados pueden ser de diferentes tipos  */
/*  Los datos ingresados son calves y esos tienen un valor*/
var Empleado = {
    numdoc:2345,
    nombre:"Valentina",
    apellido:"Altamarino"
}
console.log(Empleado.nombre)

Empleado.nombre="Pedro Pedro Pedro"
console.log(Empleado.nombre)



/*  crear un objeto libro cuyas claves son titulo autor y año y un metodo llamado descripcion, este decuelve las claves */

var Libro ={
    titulo:"I'm",
    autor:"a",
    año:"año año xd",
    descripcion(){
        console.log(this.titulo, this.autor, this.año);
    },
    añoLibro(){
        console.log(this.año);
        
    }
    /* this= este, en este caso esa clave pertenece a esta clase. */
}


descripcion: 
Libro.descripcion();
Libro.añoLibro();

/* Deporte con balín y sin balón*/

var deportes={
    balon: ['Fut' , "Baloncesto","Voley","Béisbol","Rugby","Balón mano"],
    sinbalon: ["ciclismo","Esgrima","Natación","Atletismo","Esquí","Escalada","Equitación"],
    voley(){
        console.log(this.balon[2])
    }
}
deportes.voley();
console.log(deportes.balon)


console.log(deportes.balon.push("Otro deporte"));
console.log(deportes.balon)


/* Persona */
/* Se crea el objeto dentro del objeto pendeje */

let persona = {
    nombre:"Luis",
    edad:"17",
    estudios:{titulo:'Princesa certificada'},
    profesion:{nombre:"Princesa"},
    tieneProf(){
        console.log(this.profesion.nombre)
    },
    tieneEst(){
        console.log(this.estudios.titulo)
    }
}
persona.tieneEst();
persona.tieneProf();
