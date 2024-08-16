function ConstruirSitio(){
    this.crearElemento = function(texto, tipo){
        let html;
        if(tipo === 'input'){
            html = new InputHTML(texto)
        }else if(tipo === 'img'){
            html = new ImgHTML(texto)
        }else if(tipo === 'h1'){
            html = new HeadHtml(texto)
        }else if(tipo === 'p'){
            html = new parrafoHTML(texto)
        }
        return html;
    }
}
const HeadHtml = function(texto){
    this.texto = texto
}
const sitioweb = new ConstruirSitio();

const elementoWeb = [];
elementoWeb.push(sitioweb.crearElemento('Bienvenido', 'h1'));
console.log(elementoWeb)