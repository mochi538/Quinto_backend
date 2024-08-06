/* hay tres formas para obtener la clase por medio de las composiciones 
1. this.Bateria = Bateria;
2.this.Bateria = new Bateria;
3.por medio de un metodo como Bateria(); */

class Smartphone{
    constructor(marca, voltaje, modelo, numSim){
        this.bateria = new Bateria(marca,voltaje) //por medio de esta instancia se esta haciendo la composicion
        this.modelo = modelo;
        this.numSim = numSim;
        this.chips = []; //por medio de este arreglo se esta haciendo la agregacion 

    }

    agregarchip(chip){
        this.chips.push(chip); 

    }

    MostrarInformacion(){
        let datosChip= "";
        for(let i = 0; i < this.chips.length; i++){
          datosChip += this.chips[i].MostrarInformacion(); 
          
        }
        return  " modelo: " + this.modelo + " numSim: " + this.numSim + " chip: " + datosChip + " bateria: " +this.bateria.MostrarInformacion();
    }
 
}


class Bateria{
    constructor(marca, voltaje){
        this.marca = marca;
        this.voltaje = voltaje;
    }

    MostrarInformacion(){
        return  "marca: " + this.marca + " voltaje: " + this.voltaje;
    }

}



class Chip{
    constructor(empresa, numSim){
        this.empresa = empresa;
        this.numSim = numSim;
    }

    MostrarInformacion(){
        return  " empresa: " + this.empresa + " numSim: " + this.numSim;   
    }
}



let smartphone = new Smartphone("Samsung", "5000mah", "A20", "2");
let virgin = new Chip("virgin", "3158963210");
let movistar = new Chip("movistar", "3125296302");


smartphone.agregarchip(movistar);
smartphone.agregarchip(virgin);

console.log(smartphone.MostrarInformacion());

/*
En este codigo se esta haciendo una composicion entre Smartphone y Bateria,
se esta haciendo una agregacion entre Smartphone y Chip.
*/
