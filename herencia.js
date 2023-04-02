class animales {
    constructor(especie, edad,color){
       this.especie = especie;
       this.edad = edad;
       this.color = color;
       this.frase = `Soy: <b>${especie}</b> tiene una edad de <b>${edad} anos </b> y soy de color <b>${color}</b> + '<br>'`
    }
    
    animal(){
        document.write(this.frase + '<br>');
    }
}

let perro = new animales('Perro', 5, 'Beige' + '<br>');
let gato = new animales('Gato', 3, 'Negro' + '<br>');
let gorrion =new animales('Gorrion', 1,'Azul y Rojo' + '<br>');



