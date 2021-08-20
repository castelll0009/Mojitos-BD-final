
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
    JSON_productos.nombre[index-1] = undefined;
    JSON_productos.precio[index-1] = undefined;
    JSON_productos.cantidad[index-1] = undefined;
    JSON_productos.variante[index-1] = undefined;          
    JSON_productos.adicion[index-1] = undefined;
    JSON_productos.descripcion[index-1] = undefined;
    JSON_productos.subtotal[index-1] = undefined;
    contElementosPedido--;       
  }
  
  //CONFIRMAR ORDEN
  //variables para crear URL y enviar pedido a Whatsapp
  var numero_telefono = 573202486769;
  var URL_orden = window.location;
  var cadenaURL = "";
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
    
        //enlistamos productos desde el carrito 

        cadenaURL = "https://wa.me/"+numero_telefono+"?text=🍺🍸🍨%0AMOJITOS (PEDIDO ONLINE)%0A🍺🍸🍨%0A%0A"
        //listado de objetos agregados al carrito en formato JSON
        +titulo_producto_vender
        +"%0APRECIO:$ "+precio_producto_vender
        +"%0VARIANTE:"+variante_selecionada_producto_vender
        +"%0ADICION:"+adicion_selecionada_producto_vender
        +"%0ADESCRIPCIÓN:"+descripcion_producto_vender
        +"%0ACANTIDAD: "+cantidad_producto_vender
        //calculamos el total a pagar
        +"%0ATOTAL%20A%20PAGAR>> $ "+TOTAL_PAGAR_producto_vender
        +"%0A%0A->>Pango pendiente<<-";
        URL_orden =  window.location= cadenaURL;   
      }    
    }else{
      $.jGrowl(`¿Vas a comer viento?, Agrega productos al carrito porfavor`);
    }
    
  });
  

  

