class VehiculoCombustion{
    constructor(nivelCombustion){
        this.nivelCombustion = nivelCombustion 
    }
    llenarTanque(cantidadAumento){
        let cantAumento = parseInt(cantidadAumento)
        let nivel = parseInt(this.nivelCombustion);
        let niveltotal = cantAumento + nivel;

            if (niveltotal < 100 && niveltotal > 0){
                return `Carga de combustion: ${niveltotal}`
            } else if (niveltotal == 100){
                return `El nivel de combustible está completo: ${niveltotal}`
            }else if (niveltotal > 100){
                return `Combustion completa: 100, sobra esta cantidad: ${niveltotal-100}`
            }
        }
    usarCombustible(cantDis){
        let nivel = parseInt(this.nivelCombustion);
        let cantDis = cantDis
        let niveltotal = nivel - cantDis

        if (niveltotal < 100 && niveltotal > 0){
            return `Decremento de combustible a: ${niveltotal}%`
        } else if (niveltotal <= 0){
            return `Sin combustible: ${niveltotal}%`
        }
        
    }
    
}


export default VehiculoCombustion