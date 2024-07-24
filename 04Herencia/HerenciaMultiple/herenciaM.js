
class Profe {
    constructor(años_experiencia){
        this.años_experiencia = años_experiencia

    }
    infoProfe(){
        return `Años de Experiencia del Profesor: ${this.años_experiencia}`
    }
}

class Programador{
    constructor(lenguaje){
        this.lenguaje=lenguaje
    }
    infoProgramador(){
        return `Lenguaje del Programador: ${this.lenguaje}`
    }
}
class Instru {
    constructor(){
        this.profesor1 = new Profe(2)
        this.programador1 = new Programador("PHP")
    }
    usarProgramador(){
        return `${this.programador1.infoProgramador()}`
    }
    usarProfesor(){
        return `${this.profesor1.infoProfe()}`

    }

}

let instru = new Instru()
console.log(instru.usarProfesor())
console.log(instru.usarProgramador())
