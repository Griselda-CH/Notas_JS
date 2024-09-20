
/*let viaje= prompt("A que pais quisiera viajar")
let dinero= parseInt("Dinero dispible para viajar en pesos")*/


let pregunta_pais= prompt("¿ A que pais quieres viajar? ");
let dinero= parseFloat(prompt("¿ Con cuanto persives para vacacionar en moneda Mexicana?"));
let calculo;


if(pregunta_pais=="Alemania"){
//Aqui se realiza la conversion de pesos mexicanos a euros
    calculo= dinero*0.046;
console.log("El total en EUROS es",calculo)
//Creo una variable ahora, y por la funcion new date obtengo la feche y mediante ello se obtiene
//la hora actual
const ahora = new Date();
//Calculo el cambio de horario del pais en milisegundos
const cambioHorario = 8;
//La variable nuevaHora guarda la hora que se calculo y con la funcion getTime reinicia el tiempo 
//despues de las 12
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000);
//Mostramos el resultado con la funcion toLocaleString en formato de hora 
console.log("La hora en alemania es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es aleman ");

}else if(pregunta_pais=="Australia"){
    calculo= dinero*0.076;
console.log("El total de Dolares Australianos",calculo)
const ahora = new Date();
const cambioHorario = 16;
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000); 
console.log("La hora en austria es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es ingles australiana ");

}else if(pregunta_pais=="Argentina"){
    calculo= dinero*49.75;
console.log("El total de pesos Argentinos  es",calculo);
const ahora = new Date();
const cambioHorario = 3;
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000);
console.log("La hora en Argentina es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es español ");

}else{
    console.log("Pais No Disponible ")
    
}





