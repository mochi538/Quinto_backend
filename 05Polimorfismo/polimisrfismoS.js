class Calculador{
    suma(a, b, c){
        if(a != null && b == null &&  c == null){
            return  a + a; 
        }
        if(a != null && b != null &&  c == null){
            return  a + b;  
        }      
         if(a != null && b != null &&  c != null){
            return  a + b + c; 
        }       
    

    } 
}

let calculador = new Calculador();
console.log(calculador.suma(1))
