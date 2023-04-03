class maison { //METODO(this.xxxxxxx = xxx;)
    constructor(salon, chambre, cuisine){
    this.salon = salon;
    this.chambre= chambre;
    this.cuisine = cuisine;
    this.informacion = `Dans la Maison a un salon avec <b>${this.salon}</b> 54", aussi dans la chambre on peut trouver <b>${this.chambre}</b> et dans la cuisine, il y a <b>${this.cuisine}</b> `;
    }
    //METODO()cuando reamos una function dentro de la class... lo contrario se llama function()..PARA CREAR METOD() devemos utilizar (this.xxxxxxx = xxx;)
    //ON VA FAIRE UN MANIER DIFFERENT : ejercicio 2 "NO PODEMOS UTILIZAR FUNCTION FLECHA DENTRO METODO. solo this"
    verInformacion(){
      document.write(this.informacion);
    }
}

//Ici va la declaration sur qui va se voir
let dansMaison = new maison('Televiseur', 'Lit', 'Four' + '<br>');
//aussi on puet faire plusieurs:
let dansMaison2 = new maison('Sofa', 'Oreilles', 'Assiettes' + '<br>');
let dansMaison3 = new maison('Chaises', 'Closet', 'Coutaux' + '<br>');

// document.write(dansMaison.informacion + '<br>');
// document.write(dansMaison2.informacion + '<br>');
// document.write(dansMaison3.informacion + '<br>');

//ahora si podemos ahorarnos todo lo de arriba con este metodo:
dansMaison.verInformacion();
dansMaison2.verInformacion();
dansMaison3.verInformacion();
document.write("------------------ <br>")
// otro ejemplo:
class concessionnaire {
  constructor(marca, color, year, prix){
    this.marca = marca;
    this.color = color;
    this.year = year;
    this.prix = prix;
    this.frase = `The car of marca <b>${marca}</b> that it is of <b>${color}</b> color and it was manufactured in the year: <b>${year}</b> and its price was <b>${prix}$</b> and it was * SOLD * yesterday! `;
  }
   verInformacion(){
     document.write(this.frase + "<br>");
   }
}
//vamos a declararla:
let auto = new concessionnaire('Mazda', 'Black', 2014, 15000 + ' <br> ');
let auto2 = new concessionnaire('Jeep', 'Gris', 2018, 23000 + ' <br> ');
let auto3 =new concessionnaire('Honda', 'Civic', 2020,8000 + ' <br>');
//vamos a llamarla:
auto.verInformacion();
auto2.verInformacion();
auto3.verInformacion();
document.write("------------------ <br>")
//ejercicios:
class wine {
  constructor(nameProduct, color, ml, country, price){
     this.nameProduct = nameProduct;
     this.color = color;
     this.ml = ml;
     this.country = country;
     this.prices = price;
     this.frase =`This Wine: <b>${nameProduct}</b> is a <b>${color}</b> the <b>${ml}</b> ml and the came from <b>${country}</b> a it has a good price: <b>${price}$</b> dollars;`
  }
  verFrase(){
    document.write(this.frase);
  }
}
//declararla:
let wines = new wine('Alma negra Mendoza', 'Red wine', 750, 'Argentina','21.25' + '<br>');
let wines2 = new wine('Animus Douro', 'Red wine', 750, 'Portugal','13.25' + '<br>');
let wines3 = new wine('Beronia Rioja Reserva', 'Red wine', 750, 'Spain','22.75' + '<br>');

wines.verFrase();
wines2.verFrase();
wines3.verFrase();
document.write("------------------ <br>");

class animales {
  constructor(especie, edad,color){
     this.especie = especie;
     this.edad = edad;
     this.color = color;
     this.frase1 = `Soy: <b>${especie}</b> tengo una edad de <b>${edad} anos </b> y soy de color <b>${color}</b>`
  }
  verFrase(){
      document.write(this.frase1 + '<br>');
  }
}

let perro = new animales('Perro', 5, 'Beige'  + '<br>');
let gato = new animales('Gato', 3, 'Negro' + '<br>');
let gorrion =new animales('Gorrion', 1,'Azul y Rojo' + '<br>');

perro.verFrase();
gato.verFrase();
gorrion.verFrase();





