
/*
var JSON_array_productos_vender ={
  nombre: [""],
  precio: [""],
  cantidad: [""],
  precio: [""],
  variante: [""],
  adicion: [""],
  descripcion: [""],
  subtotal: [""]
};
*/
const  JSON_array_productos_vender = '{"nombre":[],"precio":[],"cantidad":[],"precio":[],"variante":[],"adicion":[],"descripcion":[],"subtotal":[]}';
const JSON_productos = JSON.parse(JSON_array_productos_vender);


//FUNCION para desplegar los detalles del carrito
$(document).on('click', '.btn-ver' , function(){                
    //despliegue detalles con toggle          
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");        
});       
         
$(document).on('click', '.div-detalles-carrito', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});

$(document).on('click', '#icono-carrito-compras-main', () =>{        
  $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});

//DETECTAR EL CAMBIO DE CANTIDAD PRODUCTOS celda td
function cambiosCantidadPedido(){
  //TODO cambiar catidad
  var elem;
  var antCantidad;
  var nuevaCantidad;  

  //detectamos cuando se esribe un elemento
  /*
  $(".cantidadEditable").keydown(function(){        
    antCantidad = $(this).text();
    $(this).text("");
    cantidad_total_productos_vender -= parseInt(antCantidad);
  });
  $(".cantidadEditable").keyup(function(){
         
      if( $(this).text().length <= 1  || $(this).text() > 20  ) {
        $(this).text("1");            
     }          
      nuevaCantidad =   $(this).text();      
      cantidad_total_productos_vender  +=  parseInt(nuevaCantidad);    
      document.getElementById("cantidad-total-pedido").innerHTML = parseInt(cantidad_total_productos_vender);    
  }); 
  */  
  }
  function eliminarFilaPedido(index) {     
    var cantidad_elemento_eliminar = $(`#fila${index} td:nth-child(3)`).text();
    var precio_elemento_eliminar = $(`#fila${index} td:nth-child(4)`).text(); 
    /*var auxTotalEliminar =   parseInt( parseInt(cantidad_elemento_eliminar) * parseInt(precio_elemento_eliminar));   */
    cantidad_total_productos_vender -= cantidad_elemento_eliminar ;
    total_pagar_pedido -= (precio_elemento_eliminar * cantidad_elemento_eliminar);
    document.getElementById("cantidad-total-pedido").innerHTML = parseInt(cantidad_total_productos_vender);
    document.getElementById("total-pagar-pedido").innerHTML = total_pagar_pedido;
    $("#fila" + index).remove();     
    //contenedor de elemetos pedidos debe diminuir -1 y ademas se debe desontar el total del
    //productoi eliminado del total a pagar
    //eliminamos del JSON_productos el elementos
    var auxIndexDel = 0;
    auxIndexDel = (index-1);    
    JSON_productos.nombre[auxIndexDel] = "NULL";
    JSON_productos.precio[auxIndexDel] = "NULL";
    JSON_productos.cantidad[auxIndexDel] = "NULL";
    JSON_productos.variante[auxIndexDel] = "NULL";          
    JSON_productos.adicion[auxIndexDel] = "NULL";
    JSON_productos.descripcion[auxIndexDel] = "NULL";
    JSON_productos.subtotal[auxIndexDel] = "NULL";
    contElementosPedido--;  

    console.log("//////////////*****ELIMINAR*********************////////////////////////////////////*");
    console.log(contElementosPedido);
    var j = 0; // recorrer el json
    for(i = 0; i < contElementosPedido; i++){      
      if(JSON_productos.nombre[j] == "NULL"){
       console.log("elemento NULL SALTADo i:" +i+" j: "+ j);
       i--;
      }else{
        console.log("//////////////////////////////////////////////////");
        console.log("EMPEZAMOOSSS " + i);
        console.log(JSON_productos.nombre[j]);
        console.log(JSON_productos.precio[j]);
        console.log(JSON_productos.cantidad[j]);
        console.log(JSON_productos.variante[j]);
        console.log(JSON_productos.adicion[j]);
        console.log(JSON_productos.descripcion[j]);
        console.log(JSON_productos.subtotal[j]);      
      }            
      j++;        
    }               
  }
  
  //CONFIRMAR ORDEN
  //variables para crear URL y enviar pedido a Whatsapp
  var numero_telefono = 573202486769;
  var URL_orden = window.location;
  var cadenaURL = "";
  var cadenaEncabezado = "";
  var cadenaListaProductos ="";
  
  var boton_confirmar_orden = document.querySelector(".btn-confirmar-orden");
  boton_confirmar_orden.addEventListener("click", function(){  
    event.stopPropagation();    
    if(document.getElementById("total-pagar-pedido").innerText  != 0 ){
      if(confirm("¿Estas seguro que deseas finalizar tu compra?, tu pedido sera enviado al Whatsapp del vendedor.") ){
        //el usuario acepto hacer la compra, recuperamos los datos de su pedido                    
        var_cantidad_productos = cantidad_productos.value;                                    
        descripcion_producto_vender = document.getElementById("id-detalles-pedido").value;
        cantidad_producto_vender = cantidad_productos.value;            
        TOTAL_PAGAR_producto_vender = (cantidad_productos.value * precio_producto_vender );      
        //enlistamos productos desde el carrito  que estaban en el JSON
        var numero_mesa = document.querySelector(".numero-mesa").innerHTML;        
        cadenaEncabezado = "https://wa.me/"+numero_telefono+"?text=🍺🍸🍨%0AMOJITOS (PEDIDO ONLINE)%0A"+numero_mesa+"%0A🍺🍸🍨%0A%0A";
        
        //enlistamos los productos en una cadena desde el JSON_produtos
        var j = 0; // recorrer el json
        for(i = 0; i < contElementosPedido; i++){
          if(JSON_productos.nombre[j] == "NULL"){
          i--;
          }else{
            cadenaListaProductos +=`_______________________%0A${JSON_productos.nombre[j]}%0APRECIO: $${JSON_productos.precio[j]}%0AVARIANTE: ${JSON_productos.variante[j]}%0AADICION: ${JSON_productos.adicion[j]}%0ADESCRIPCIÓN: ${JSON_productos.descripcion[j]}%0ACANTIDAD: ${JSON_productos.cantidad[j]}%0ASUBTOTAL: $${JSON_productos.subtotal[j]}%0A%0A`;              
          }            
          j++;                          
      }   
      cadenaURL += cadenaEncabezado; 
      cadenaURL += cadenaListaProductos;
      cadenaURL +=`_______________________%0ATOTAL A PAGAR: ${document.getElementById("total-pagar-pedido").innerText} %0A%0A->>Pago pendiente<<-`;
      console.log(cadenaURL);
      //acion enviar pedido WHapsap
      URL_orden =  window.location = cadenaURL; 
      }
      
    }else{
      $.jGrowl(`¿Vas a comer viento?, Agrega productos al carrito porfavor`);
    }
    
    
  });
  

  

