
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
  //TODO
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
    contElementosPedido--;       
  }
  
  

  

