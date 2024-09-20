/*3.Los tramos del IVA en un país son los siguientes:
Básico: 10%
Reducido: 5%
Superreducido: 2%
Escribe un programa que pregunte al usuario el importe de una compra y 
el tipo de IVA aplicado (básico, reducido, superreducido) y muestre por pantalla 
el total con IVA incluido. (10p)*/
//Se declaran las variables donde se gurdaran los datos
let compra = parseFloat(prompt("Importe de Compra: "));
let iva = (prompt("Introduce el tipo de IVA (básico, reducido, superreducido): "));
let totaliva;
//Se realizan las comparaciones
if(iva== bàsico){
//Se realiza la formula de iva 
    iva = (compra*10)/(100)
//Se suma la compra con el iva correspondiente
    totaliva=compra+iva;
//Se imprime el resutado total con iva
    console.log("el total con iva basico es:",totaliva);

}else if (iva== reducido){
    iva = (compra*5)/(100)
    totaliva=compra+iva
    console.log("el total con iva reducido es:",totaliva);
    
}else if (iva== superreducido){
    iva = (compra*2)/(100)
    totaliva=compra+iva
    console.log("el total con iva superreducido es:",totaliva);

}else{
    console.log("Tipo de IVA erroneo");
}