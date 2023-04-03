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




