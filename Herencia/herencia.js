class Personna{
  constructor(genero,edad,escolaridad,pais,ciudad,estadoCivil){
    this.genero = genero;
    this.edad = edad;
    this.escolaridad = escolaridad;
    this.pais = pais;
    this.ciudad = ciudad ;
    this.estadoCivil = estadoCivil;
    this.frase = `Soy <b>${genero}</b> y tengo <b>${edad}</b> anos de edad. Ya termine la <b>${escolaridad}</b> en <b>${pais}</b> y  ahora estoy viviendo en la ciudad de <b>${ciudad}</b>. Mi estado civil es <b>${estadoCivil}</b>`;
  }
  
  
  verFrase(){
    document.write(this.frase +'<br>');
  }
}




let hombre = new Personna('hombre', 34, 'Universidad', 'Argentina', 'Buenos Aires','Soltero' + '<br>');
let mujer = new Personna('mujer', 18, 'secunadaria', 'Peru', 'Lima','Soltera' + '<br>');
let lgtb = new Personna('LGTB', 45, ' licenciatura', 'Guatemala', 'Panajachel','Casado' + '<br>');

hombre.verFrase();
mujer.verFrase();
lgtb.verFrase();
