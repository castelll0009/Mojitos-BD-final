  //definimos antidad productos como global
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
var titulos_productos = document.querySelector(".titulo-detalles-producto");
var precios_productos = document.querySelector(".precio-detalles-producto");
  var descripcion_productos = document.querySelector("descripcion-detalles-producto");

//variables para crear URL y enviar pedido a Whatsapp
var numero_telefono = 573202486769;
var URL_orden = window.location;
var cadenaURL = "";


boton_comprar.addEventListener("click", function(){  
   //enviamos el pedido a whatsap   
   if(confirm("¿Esta seguro de realizar esta compra?") ){
    //el usuario acepto hacer la compra, recuperamos los datos de su pedido
    alert("Su pedido sera enviado al Whatsapp del vendedor");       
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
  }else{
    //el usuario no quiere hacer aun  la compra
  }    

});
//activamos el swiper slide despues de enlistar los productos, evitamos error de funcionalidad
var contSwiper = 0;
if(contSwiper < 5){
  setTimeout(function(){activarSwiper()},5000);
  contSwiper++;
}

});
