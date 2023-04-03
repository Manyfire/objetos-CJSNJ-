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
    this.frase = `Le telephone <b>${marca}</b> est arrive! `
  }

  verFrase(){
    document.write(this.frase + '<br>')
  }
}
//HERENCIA:
//child =>
class modeloNuevo extends Telephone {
  constructor(marca, modeloNuevo){
    super(marca);//palabra reservada"super"
    this.modeloNuevo = modeloNuevo;
    this.frase = `Mon dernier cellulaire: <b>${marca}</b> est brisé la semaine dèrniere Mais aujourd'hui est arrivé mon nouveux cellulaire: <b>${modeloNuevo}</b>`
  }

  verFrase2(){
    document.write(this.verFrase() + this.modeloNuevo())
  }
}

let monTelephone = new modeloNuevo('Samsung S6','iphone 12');
document.write(monTelephone.verFrase2());
//---------------------------------------------------------------
//window.addEventListener('load', function(){//load:hacta que no se carge la pagina no va ejecutarla.
  class family {
    constructor(dady,mamy,brother) {
      this.dady = dady;
      this.mamy = mamy;
      this.brother = brother;
      this.frase = `This is the beauty family ${this.dady},${this.mamy},${this.brother}`
    }
    frases(){
      document.write(this.frase + '<br>')
      //return `This is the beauty family ${dady},${mamy},${brother}`//error this.
    }
  }
  //Classe Hereda => super()
  class newFamily extends family{
    constructor(dady,mamy,brother,newFamily){
      super(dady,mamy,brother,newFamily);
      this.newFamily = newFamily;
      this.frase =`mi family is:${dady},${mamy},${brother},${newFamily}`
    }
    fraseComply(){
      document.write(this.frases() + this.newFamily())
      //return this.frese() + 'a new person came to the new family' + this.newFamily
    }
  }

  let newPerson = new newFamily('George','Melanie','john','Isabelle')
  document.write(newPerson.fraseComply())
  //frase.innerHTML = newPerson.fraseComply()

//},true)

/*
para hacer herencia se necesita la palabra reservada: "EXTENDS"
La classe HERENCIA va tomar todos los metodos de la classe padre*/