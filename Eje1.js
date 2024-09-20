/* 1.Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario su peso en kilogramos
y su altura en metros. Calcula el Índice de Masa Corporal (IMC) usando la fórmula
IMC = peso / (altura * altura) y muestra la categoría correspondiente según
el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p) */
//Ventana emergente
//Se declaran las variables donde se gurdaran los datos
let peso = parseFloat(prompt("Ingresa tu peso en Kilogramos"));
let altura = parseFloat(prompt("Ingresa tu altura en Metros"));
//Aqui realizamos una comparacion si los datos ingresado son = a 0 imprimira un mensaje 
if (peso == "0" || altura =="0"){
    console.log("Datos Invalidos");
    console.log("IMC Invalido");
//Aqui estamos realizando la formula de IMC     
} else { 
    const imc = peso / (altura ** 2);
//Aqui aplicada la formula imprime el imc
    console.log("Tu IMS es.",imc);                             
//Realiza la comparacion con lasCategorias
if (imc < 18.49) {
    console.log("Tu categoria es: peso bajo");
} else if (imc >= 18.49 && imc < 24.99) {
    console.log("Tu categoria es: peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Tu categoria es: sobrepeso");
} else if (imc >= 30 && imc < 39.99) {
    console.log("Tu categoria es: obesidad");
} else  {
    console.log("obesidad extrema");
} 

}

  
 

/* 2. Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y
 tus ingresos mensuales deben estar entre 500€ y 2000€. Escribe un 
 programa que pregunte al usuario su edad y sus ingresos mensuales y muestre 
 por pantalla si el usuario es elegible para el subsidio o no. (10p) */


