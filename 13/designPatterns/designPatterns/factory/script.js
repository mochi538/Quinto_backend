class Camioneta {
    constructor() {
        this.tipo = "camioneta";
        this.description = "Terreneitor..."
        this.img = "../img/pickup_toyota.jpg"
    }

    mostrarInfo() {
        return `Camioneta:
        ${this.description}`
    }
}

class Deportivo {
    constructor() {
        this.tipo = "Deportivo";
        this.description = "El rasho makuin... :o"
        this.img = "../img/deportivo.jpg"
    }

    mostrarInfo() {
        return `Deportivo:
        ${this.description}`
    }
}

class Clasico {
    constructor() {
        this.tipo = "Clasico";
        this.description = "El señor de la nocheeee..."
        this.img = "../img/mustang.jpg"
    }

    mostrarInfo() {
        return `Clasico:
        ${this.description}`
    }
}

class VehiculoFactory {
    solicitarVehiculo(tipo) {
        switch (tipo) {
            case "camioneta":
                let camioneta = new Camioneta();
                return camioneta
            case "deportivo":
                let deportivo = new Deportivo();
                return deportivo
            case "clasico":
                let clasico = new Clasico();
                return clasico
            default:
                console.log("Esa wea no existe...")
        }
    }
}
document.querySelector('#crearBtn').addEventListener("click", () => {
    let tipoVehiculo = document.querySelector('#tipoVehiculo').value
    let vehiculoFactory = new VehiculoFactory();
    let vehiculo = vehiculoFactory.solicitarVehiculo(tipoVehiculo);
    let resultado = document.querySelector("#resultado")
    console.log(vehiculo.mostrarInfo())
    resultado.innerHTML = `
        <h4 class="title">Tipo:</h4>
        <p class="text">${vehiculo.tipo}</p>
        <h4 class="title">Descripción:</h4>
        <p class="text">${vehiculo.description}</p>
        <img class="img" src="${vehiculo.img}">
    `
})
