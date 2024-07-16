class VehiculoElectrico{
    constructor(nivelBateria){
        this.nivelBateria = nivelBateria
    }
    cargarBateria(cantAumento){
        let nivel = parseInt(this.nivelBateria);
        let cantAumento = cantAumento
        let niveltotal = nivel + cantAumento

        if (niveltotal < 100 && niveltotal > 0){
            return `Carga del vehiculo: ${niveltotal}`
        } else if (niveltotal >= 100){
            return `Carga del vehículo completa: ${niveltotal}`
        }
    }
    usarBateria(cantDis){
        let nivel = parseInt(this.nivelBateria);
        let cantDis = cantDis
        let niveltotal = nivel - cantDis

        if (niveltotal < 100 && niveltotal > 0){
            return `Decremento de carga a: ${niveltotal}%`
        } else if (niveltotal <= 0){
            return `Sin carga : ${niveltotal}%`
        }
        
    }
}

export default VehiculoElectrico