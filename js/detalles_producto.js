  //definimos antidad productos como global, variables auxiliares para calcular toal cantida y pagar en facturacion carrito
  var auxTotal= 0;
  var contElementosPedido = 0;
  var total_pagar_pedido = 0;
  var cantidad_productos = document.querySelector(".cantidad-producto");
  $(document).ready(function() {        
    /* Seleccionar descripciones  de productos detener propagacion*/            
    var descripcion_productos = document.querySelector(".descripcion-productos");
    descripcion_productos.addEventListener("click", function(){          
      event.stopPropagation();        
         
  });
           
/* Seleccionar variantes de producto detener propagacion*/
var variantes_productos = document.querySelector(".variantes-producto");
  variantes_productos.addEventListener("click", function(){        
    event.stopPropagation();  
  });

  var variantes_productos2 = document.querySelector(".variantes-producto2");
  variantes_productos2.addEventListener("click", function(){  
    event.stopPropagation();  
  });

/* Seleccionar input cantidad  de productos detener propagacion*/

  cantidad_productos.addEventListener("click", function(){      
    event.stopPropagation();       
});

/**/ 
var var_cantidad_productos = 1;//se inicializa una variables en 1
var disminuir_productos = document.querySelector(".disminuir-productos");
  disminuir_productos.addEventListener("click", function(){  
    event.stopPropagation(); 
    if(cantidad_productos.value > 1){
      cantidad_productos.value--; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    }        
});
// variable aumentar productos

var aumentar_productos = document.querySelector(".aumentar-productos");
  aumentar_productos.addEventListener("click", function(){  
    event.stopPropagation();     
      cantidad_productos.value++; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.    
});

/* comprar para los diferentes productos*/
var boton_comprar = document.querySelector(".btn-ordenar");
var boton_agregar = document.querySelector(".btn-agregar");
var boton_confirmar_orden = document.querySelector(".btn-confirmar-orden");
var titulos_productos = document.querySelector(".titulo-detalles-producto");
var precios_productos = document.querySelector(".precio-detalles-producto");
  var descripcion_productos = document.querySelector("descripcion-detalles-producto");

//variables para crear URL y enviar pedido a Whatsapp
var numero_telefono = 573202486769;
var URL_orden = window.location;
var cadenaURL = "";

//FUNCION PARA AGREGAR PRODUCTO AL CARRITO DE PEDIDOS

/*var nombre_pedido = document.querySelector(".titulo-producto").innerHTML;*/
var nombre_pedido;
var cantidad_pedido;
var precio_pedido;
var counter = 0; // para el index del producto
boton_agregar.addEventListener("click", function(){
  event.stopPropagation();       
  agregarProductoCarrito();

});

function agregarProductoCarrito(){     
    //recuperamos el Nombre,Cantidad y el precio del producto agregar al  pedidoo carrito
    nombre_pedido = titulo_producto_vender_original; 
    cantidad_pedido= cantidad_productos.value;
    precio_pedido = precio_producto_vender; 
    //creamos un nuevo template  tr que contendra los 3  valores        
    //AGREGAR FILA CARRITO CALCULAR TOTALES  , agregar un elemento al carrito  
    auxCantidad = cantidad_total_productos_vender;
    auxTotal = parseInt(total_pagar_pedido);  
    counter = addNewRow();    
    function addNewRow(){
     if(nombre_pedido != undefined && cantidad_pedido  != undefined &&  precio_pedido != undefined){
        counter++;     
        contElementosPedido++; 
        if(contElementosPedido < 7){
          //por ahora quitamos la propiedad contenteitable de la t cantiodadeditable contenteditable
          $('.table').append(`<tr id="fila${counter}"><td> ${counter} 
          </td><td> ${nombre_pedido}
          </td><td  class="cantidadEditable"  onclick="cambiosCantidadPedido()" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)">${cantidad_pedido}
          </td><td> ${precio_pedido}
          </td><td><i onclick="eliminarFilaPedido(${counter})" class="fas fa-trash-alt"></i></td></tr>`);      
          auxCantidad +=  parseInt(cantidad_pedido);        
          auxTotal += parseInt(cantidad_pedido) * parseInt(precio_pedido);
          //calculamos los valores cantidad total y total pagar 
          cantidad_total_productos_vender  = parseInt(auxCantidad);
          total_pagar_pedido = auxTotal;      
          document.getElementById("cantidad-total-pedido").innerHTML = parseInt(cantidad_total_productos_vender);
          document.getElementById("total-pagar-pedido").innerHTML = total_pagar_pedido;          
          $.jGrowl(`Has agregado ${nombre_pedido} al carrito de compras`,{life : 2000});
        }else{      
          contElementosPedido--;//producia un error que iba agotando el pedido  
          alert('Limite de productos por factura alcanzado!, puedes crear otro pedido'); 
        }
          
     }else{
       alert("Su producto no ha sido agregado al carrito, Porfavor intentelo de nuevo ;)")
     }    
        return counter;      
    }   
    //funcion para   
}
//CUANDO PRESIOAMOS EN ORDENAR
boton_comprar.addEventListener("click", function(){  
   //enviamos el pedido a whatsap   
   //al hacer el pedido se despliega la factura o carrito con el pedido del cliente
   $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");     
   agregarProductoCarrito();

    alert("Observa el carrito de compras antes de confirmar tu orden");
      //boton Confirmar Orden    
     
 

});

//CONFIRMAR ORDEN
boton_confirmar_orden.addEventListener("click", function(){  
   if(confirm("¿Estas seguro que deseas finalizar tu compra?, tu pedido sera enviado al Whatsapp del vendedor.") ){
        //el usuario acepto hacer la compra, recuperamos los datos de su pedido           
        /*
        titulo_producto_vender = titulos_productos.innerHTML.toUpperCase();     
        variante_selecionada_producto_vender = variantes_productos.options[variantes_productos.selectedIndex].text;          
        variante_selecionada_producto_vender2 = variantes_productos2.options[variantes_productos.selectedIndex].text;          
        precio_producto_vender = precios_productos.value;           
        descripcion_producto_vender = descripcion_productos.value;      
        cantidad_producto_vender = cantidad_productos;
        TOTAL_PAGAR_producto_vender = (cantidad_productos * precio_producto_vender );        
        */       
        var_cantidad_productos = cantidad_productos.value;                                    
        descripcion_producto_vender = document.getElementById("id-detalles-pedido").value;
        cantidad_producto_vender = cantidad_productos.value;            
        TOTAL_PAGAR_producto_vender = (cantidad_productos.value * precio_producto_vender );  
    
        ///se crea el enlace y se envia al numero designado 
        /*
        alert(titulo_producto_vender);
        alert(variante_selecionada_producto_vender);
        alert(precio_producto_vender);
        alert(descripcion_producto_vender);
        alert(cantidad_producto_vender);
        alert(TOTAL_PAGAR_producto_vender);
        */
        /*ANCHETAS:dulce y licor PRECIO:$60000 DESCRIPCION:quiero que diga te amo ma CANTIDAD:2 TOTAL A PAGAR:$120000    ->>Pendiente de envio comprobante de pago<<- */
        /*
        cadenaURL = "https://wa.me/"+numero_telefono+"?text=💝💝💝🦄🦄🦄%0AUNI-STORE (PEDIDO ONLINE)%0A🦄🦄🦄💝💝💝%0A%0A"+titulo_producto_vender+": "+variante_selecionada_producto_vender+", "+variante_selecionada_producto_vender2 +"%0APRECIO:$ "+precio_producto_vender+"%0ADESCRIPCIÓN:"+
        descripcion_producto_vender+"%0ACANTIDAD: "+cantidad_producto_vender+"%0ATOTAL%20A%20PAGAR>> $ "+TOTAL_PAGAR_producto_vender+"%0A%0A->>Pendiente de envio comprobante de pago<<-";
        URL_orden =  window.location= cadenaURL;    
        */
        cadenaURL = "https://wa.me/"+numero_telefono+"?text=🍺🍸🍨%0AMOJITOS (PEDIDO ONLINE)%0A🍺🍸🍨%0A%0A"+titulo_producto_vender+"%0APRECIO:$ "+precio_producto_vender+"%0ADESCRIPCIÓN:"+
        descripcion_producto_vender+"%0ACANTIDAD: "+cantidad_producto_vender+"%0ATOTAL%20A%20PAGAR>> $ "+TOTAL_PAGAR_producto_vender+"%0A%0A->>Pango pendiente<<-";
        URL_orden =  window.location= cadenaURL;   
      }    

});
//activamos el swiper slide despues de enlistar los productos, evitamos error de funcionalidad
var contSwiper = 0;
if(contSwiper < 5){
  setTimeout(function(){activarSwiper()},5000);
  contSwiper++;
}

});
