
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
    $("#fila" + index).remove();     
    contElementosPedido--;       
  }
  

  

