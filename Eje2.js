/* 2. Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y
 tus ingresos mensuales deben estar entre 500€ y 2000€. 
 Escribe un  programa que pregunte al usuario su edad y sus ingresos mensuales y muestre 
 por pantalla si el usuario es elegible para el subsidio o no. (10p) */

//Se declaran las variables 
 let edad =parseInt(prompt("Ingresa tu Edad "));
 let ingresos = parseFloat(prompt("Ingresa tu Salario Mensual "));
//Se reliza un condicional
 if(edad >= 18 && ingresos >=500 && ingresos <=2000){
    console.log(" Aplicas para subsidiar ")
 }else if (edad < 18 && ingresos < 500 ) {
    console.log("No eres elegido para el subsido ")
 }else{
    console.log("Ingresa un Valor Real")
 }
 