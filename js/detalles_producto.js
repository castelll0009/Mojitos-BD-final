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

var titulos_productos = document.querySelector(".titulo-detalles-producto");
var precios_productos = document.querySelector(".precio-detalles-producto");
var descripcion_productos = document.querySelector("descripcion-detalles-producto");


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
        if(contElementosPedido < 11){
          //por ahora quitamos la propiedad contenteitable de la t cantiodadeditable contenteditable
          $('.table').append(`<tr id="fila${counter}"><td> ${counter} 
          </td><td> ${nombre_pedido}
          </td><td  class="cantidadEditable"  onclick="cambiosCantidadPedido()" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)">${cantidad_pedido}
          </td><td> ${precio_pedido}
          </td><td><i onclick="eliminarFilaPedido(${counter})" class="fas fa-trash-alt"></i></td></tr>`);      
          auxCantidad +=  parseInt(cantidad_pedido);        
          var auxSubtotal = parseInt(cantidad_pedido) * parseInt(precio_pedido);
          auxTotal += auxSubtotal;
          //calculamos los valores cantidad total y total pagar 
          cantidad_total_productos_vender  = parseInt(auxCantidad);
          total_pagar_pedido = auxTotal;      
          document.getElementById("cantidad-total-pedido").innerHTML = parseInt(cantidad_total_productos_vender);
          document.getElementById("total-pagar-pedido").innerHTML = total_pagar_pedido;          
          $.jGrowl(`Has agregado ${nombre_pedido} al carrito de compras`,{life : 2000});
          //agregamos el producto al arrayList de productos del carrito json
          JSON_productos.nombre[counter-1] = nombre_pedido;
          JSON_productos.precio[counter-1] = precio_pedido;
          JSON_productos.cantidad[counter-1] = cantidad_pedido;
          JSON_productos.variante[counter-1] = $("#variantes-detalles-producto option:selected").val();          
          JSON_productos.adicion[counter-1] = $("#adiciones-detalles-producto option:selected").val();
          JSON_productos.descripcion[counter-1] = $('#id-detalles-pedido').val();
          JSON_productos.subtotal[counter-1] = (auxSubtotal);
          console.log("//////////////*****ELIMINAR*********************////////////////////////////////////*");
          console.log(contElementosPedido);
          var j = 0; // recorrer el json
          for(i = 0; i < contElementosPedido; i++){
            if(JSON_productos.nombre[j] == "NULL"){
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
          /*
          alert(JSON_productos.nombre[counter-1]);
          alert(JSON_productos.subtotal[counter-1]);
          */
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
//activamos el swiper slide despues de enlistar los productos, evitamos error de funcionalidad
var contSwiper = 0;
if(contSwiper < 5){
  if(!stop_swipers){
    setTimeout(function(){activarSwiper()},5000);
    contSwiper++;
  }
 
}

});
