// class telephone {
//   constructor(marca){
//     this.marca = marca;
//     this.frase = `Le nouveau telephone <b>${marca}</b> est arrive! `
//   }

//   verFrase(){
//     document.write(this.frase + '<br>')
//   }

// }

// let monTelephone = new telephone('Samsung S6');

// monTelephone.verFrase();
//VAMOS A VER HERENCIA
//---------------------
class Telephone {
  constructor(marca){
    this.marca = marca;
    this.frase = `Le nouveau telephone <b>${marca}</b> est arrive! `
  }

  verFrase(){
    document.write(this.frase + '<br>')
  }
}
//HERENCIA:
//child =>
class modeloNuevo extends Telephone {
  constructor(marca,modeloNuevo){
    super(marca);
    this.modeloNuevo = modeloNuevo;
  }

  verFrase2(){
    document.write(this.verFrase() + 'Le nouveau Model est GOOGL-Pixel' + this.modeloNuevo)
  }
}



//let monTelephone = new Telephone('Samsung S6');
let monTelephone = new Telephone('google Pixel');


monTelephone.verFrase();