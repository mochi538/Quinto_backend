let noentiendoXd;
class Singlenton {
  constructor(datoo) {
    if (!noentiendoXd) {
      noentiendoXd = this;
      this.datos1 = datoo;
    } else {
      return noentiendoXd; /* Ya entendí, sirve  si necesitas exactamente un solo dato, no te permite crear más :v ^ */
    }
  }
  get datos2() {
    return this.datos1;
  }
}

console.log(new Singlenton("Dato1").datos2);
console.log(new Singlenton("Dato2").datos2);
console.log(new Singlenton("Dato2").datos2);

/* Aunque usemos una misma instancia los datos quedan almacenados */

/* class Car {
    constructor() {
      if (typeof Car.instance === 'object') {
        return Car.instance;
      }
        Car.instance = this;
      return this;
      
    }
  }
  console.log(new Car("objetc"))
 */
