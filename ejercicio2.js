 /*
      // Funciones en JavaScript
     
      function funcionDeclarada(){
        console.log("uno");
        console.log("dos");
        console.log("tres");
      }

      function funcionConRetorno(){

        return "Esta funcion devuelve una cadena de texto";
      }

      function funcionConParametros(nombre, apellido, edad){
        console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`)
      }
    
      // Invocacion de una funcion
      funcionDeclarada();      
      console.log(funcionConRetorno());
      funcionConParametros("Andres","Lugo",32);
    
      
    
    //funcion expresada: Se puede crear funciones a las que directamente se les declara una variable o constante.

      const funcionExpresada= function () {
        console.log("Esta es una función expresada")        
      }
      funcionExpresada();

      const objeto1={
        nombre:"Edinson",
        apellido: "Solano",
        edad: 32,
        pasatiempos: ["Correr","Ir al Gymnasio","Jugar LOL"],
        contacto:{
          twitter: "@cgoalexander731",
          gmail:"cgoalexander731@gmail.com",
          telefono:"3282882828"
        },
        saludo: function(){
          console.log("Hola Mundo")
        }
      }
      
    //Bucles en Js
      let contador=0;
      while(contador <10)
      {
        console.log(contador); 
        contador+=1;
      }

      do{
        console.log(contador)
      }
      while(contador<10)

      let numeros=[10,20,30,40,60,70,80,90]
      
      for(let i=0; i<numeros.length;i++){
        console.log("El número es " + numeros[i])
      }   


      let objeto2=[
          {
            nombre: "Andrea",
            apellido: "Perez",
            edad: 32
          },
          {
            nombre: "Marcela",
            apellido: "Rodriguez",
            edad: 31
          },
          {
            nombre: "Paola",
            apellido: "Lopez",
            edad: 23
          },
          {
            nombre: "Erika",
            apellido: "Suarez",
            edad: 27
          }
      ]
      
      


      for(const atributo in objeto1){
        console.log(`${atributo}: ${objeto1[atributo]}`)
      }

      for(const elemento of objeto2){
        for(const atributo in elemento){
          console.log(`${atributo}: ${elemento[atributo]}`);
        }        
      }

      //manejo de errores

      try {
        let numero ="y";
        if (isNaN(numero)) {
          throw new Error("El caracter introducido no es un numero");          
        }
        console.log(numero*numero)

      } catch (error) {
        console.log(`Se produjo el siguiente error: ${error}`);
        
      }


      //Uso de las palabras reservadas Break y Continue

      const Numero=[1,2,3,4,5,6,7,8,9,0];


      for(let i=0; i<Numero.length; i++){
        if (Numero===5) {
          break;         
        }
        console.log(Numero[i]);
      }

      for(let i=0; i<Numero.length; i++){
        if (Numero===5) {
          continue;         
        }
        console.log(Numero[i]);
      }


      //destructuracion
      const arreglo= [1,2,3];

      //objetos literales 
      let nombre = "Tatus",
        edad = 3;

      const mascota = {
        nombre: nombre,
        edad: edad,
        sonido(){
          console.log("Guau Guau");
        }
      }
      console.log(mascota);
      mascota.sonido();


      //REST y operador SPREAD

      function sumar(a,b, ...c){
        let resultado= a+b;

        c.forEach(
          function(n){
            resultado+=n
          }
        );       
        return resultado;
      }
      console.log(`El resultado es: ${sumar(1,2,3,4,5,6,7,8,9)}`);

      //spread operator
      const arr1=[1,2,3,4,5],
        arr2=[6,7,8,9,0];

        console.log(...arr1,...arr2);
*/
/*

      //Propiedades

      const objetoPadre={
        nombre: "Snoopy",
        sonar(){
          console.log("Hago sonidos porque estoy vivo")
        }
      }


      const objetoPadre2={
        nombre: "Lola Bunny",
        sonar(){
          console.log("Hago sonidos porque estoy vivo");
        }
      }

      console.log(objetoPadre,objetoPadre2)


      function Animal(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;

        this.sonar= function(){
          console.log("Hago sonidos porque estoy vivo");
        }

        this.saludar = function(){
          console.log(`Hola mi nombre es ${this.nombre}`);
        }
      }



      function Animal(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
      }
        Animal.prototype.sonar= function(){
          console.log("Hago sonidos porque estoy vivo");
        }

        Animal.prototype.saludar = function(){
          console.log(`Hola mi nombre es ${this.nombre}`);
        }
      
        const snoopy = new Animal("Snoopy","Macho");

        const Lola = new Animal("Lola Bunny","Hembra");

        console.log(snoopy);
        console.log(Lola);

        snoopy.sonar();
        Lola.saludar();

    // Herencia Prototipica

        function Perro(nombre,genero,tamanio){
          this.super=Animal;
          this.super(nombre, genero);
          this.tamanio=tamanio;
        }
        // la funciona perro esta heredando de Animal
        perro.prototype= new Animal(); 

        const snoopy1 = new Animal("Snoopy","Macho");

        const Lola1 = new Animal("Lola Bunny","Hembra");

        console.log(snoopy);
        console.log(Lola);

        snoopy.sonar();
        snoopy.saludar();
        Lola.sonar();
        Lola.saludar();
*/
/*
        class Animal{
        constructor(nombre,genero){
          this.nombre= nombre;
          this.genero= genero;
        }

        sonar(){
          console.log("Hago sonidos porque me da la gana");
        }

        saludar(){
          console.log(`Hola mi nombre es ${this.nombre}`)
        }
      }

      const tatus = new Animal("Tatus","Macho");
      const paca = new Animal ("Paca","Hembra");

      tatus.sonar();
      tatus.saludar();

      paca.sonar();
      paca.saludar();

      console.log (tatus, paca);
*/
function Resultado(){
  document.getElementById('resultado').innerHTML = '';
  let resultado1= Number(numero1.value) + Number(numero2.value);
  console.log(resultado1);
  return resultado.append(resultado1);
}


const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const calcular = document.querySelector("#calcular");
const h1 = document.querySelector("h1");
const resultado = document.querySelector("#resultado");

h1.innerHTML="MI PRIMERA PAGINA CON EL CURSO DE PLATZI";

const imagenes = document.createElement("img");



imagenes.setAttribute("src", "./fotos/pensum pruebas QA.jpg");
//h1.append(imagenes);


