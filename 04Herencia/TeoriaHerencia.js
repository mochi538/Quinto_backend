class Persona {
    constructor(nombre, edad, correo){
        this.nombre = nombre
        this.edad = edad
        this.correo=correo
    }
    InfoPersona(){
        return `persona= nombre:${this.nombre}, edad:${this.edad}, correo:${this.correo}`
    }
}
class Alumno extends Persona{
    constructor(nombre, edad, correo, matricula){
        super(nombre, edad, correo)
        this.matricula = matricula
    }
    InfoAlumno(){
        return `Alumno= nombre:${this.nombre}, edad:${this.edad}, correo:${this.correo}, matrícula:${this.matricula}`
    }
}
class Profesor extends Persona{
    constructor(nombre, edad, correo, id){
        super(nombre, edad, correo)
        this.id = id
    }
    set setMateria(materia){
        this.materia=materia
    }
    get getMateria(){
        return this.materia
    }

    InfoProfesor(){
        return `Profesor= nombre:${this.nombre}, edad:${this.edad}, correo:${this.correo}, Id:${this.id}`
    }
}


let alumno = new Alumno("José", 14, "jose@gmail.com", true, "Si tiene")
console.log(alumno.InfoAlumno())

let profesor = new Profesor("Alex", 41, "Alex@gmail.com", 123456789)
console.log(profesor.InfoProfesor())
console.log(profesor.InfoPersona())
profesor.setMateria = "Español"
console.log(profesor.getMateria)


