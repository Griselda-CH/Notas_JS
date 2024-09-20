/*4..Escribe un programa que pregunte al usuario el total de su compra y si tiene
 un código de descuento. Si el código es "DESCUENTO10", se aplicará un 10% de descuento.
  Si el código es "DESCUENTO20", se aplicará un 20% de descuento. Muestra el total 
  después de aplicar el descuento, si corresponde, y un mensaje si el código no es válido.
   (10p)*/

///Se declaran las varibles 
   let compra= parseFloat(prompt("Total de su compra "));
   let pregunta= prompt("Tiene un código de descuento (sí/no)");
   let descuento;
   let  resultado;
//Se reliza la condicional de codigo
 if(pregunta == "si"){
    let codigo;
///En la varible codigo se almacena el descuento que ingresen
   codigo = prompt("Ingresa tu còdigo de descuento ");
///Se realiza condicional de descuento 
   if(codigo == "Descuento10")
    {
//Se realiza la formula de descuento
    descuento = (compra*10)/100
//Se resta el descuento a total de compra  correspondiente
    resultado= compra -descuento;
//Se imprime el total de compre con el descuento correspondiente incluido
    console.log("Se aplico el 10% de descuento el total es: ",resultado);
    }   
else if (codigo == "Descuento20")
    {
    descuento = (compra*20)/100
    resultado= compra -descuento;
    console.log("Se aplico el 20% de descuento el total es: ",resultado);
    }
 else{
    console.log("codigo no valido");
 }
}

else{
    console.log("no tienes descuento",compra);

}
