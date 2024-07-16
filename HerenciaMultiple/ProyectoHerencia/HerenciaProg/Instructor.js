import Profesor from './Profesor.js'
import Programador from './Programador.js'
class Instru {
    constructor(){
        this.profesor = new Profesor(2)
        this.programador = new Programador("PHP")
    }
    usarProgramador(){
        return `${this.programador.infoProgramador()}`
    }
    usarProfesor(){
        return `${this.profesor.infoProfe()}`

    }
}
export default Instru