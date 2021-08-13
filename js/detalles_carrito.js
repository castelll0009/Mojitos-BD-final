/*
'use strict';

var app = angular.module('TablaDemo', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
  $scope.lista = [{
    productosCarrito: 'Hamburguesa',
    cantidadCarrito: '1',
    precioCarrito: '8000'
  }];

  $scope.eliminar = function(row) {
    if (confirm("¿Seguro que desea eliminar?")) {
      $scope.lista.splice(row, 1);
    }
  };

  $scope.agregar = function() {
    $scope.lista.push({
      productosCarrito: '',
      cantidadCarrito: '',
      precioCarrito: ''
    })
  };

  $scope.recuperarValores = function() {
    console.log($scope.lista);
    $("#JSON").text(JSON.stringify($scope.lista));
  };
}]);

app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css("cursor", "pointer");
      element.attr('contenteditable', 'true');

      element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
      });

      element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);
*/

var cantidad_editable= document.querySelector(".cantidadEditable");
cantidad_editable.addEventListener("click", function(){          
  event.stopPropagation();             
});

//FUNCION para desplegar los detalles del carrito
$(document).on('click', '.btn-ver' , function(){                
    //despliegue detalles con toggle          
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");  
    //desplejar la sinta desde abajo                   
        /*var index = $(this).index();
        console.log(index);
        $('.desplegar-detalles').eq(index).css({'display': 'none'});
        */
       /*
        const id =  $(this).attr("productoId");            
        console.log(id) ;                       
        // una vez idetificado el id del elemento clickeado vamos a reemplazar la div-detalles con los elementos del producto clickeado, directamente desde la base de datos            
        //Modificamos la plantilla que se despliega hacia arriba con los detalles del producto clickeado
        $.post('backend/task-single.php', {id}, (response) => { //hacer la peticion al archivo task-single.php para obtener los elementos del item co Id especifico
        const task = JSON.parse(response); //obtenemos los items en formato JSON
        console.log(task);
        console.log(task.name);
       
        //entregamos los datos a las etiquetas
        $("#img-detalles-producto").attr("src",task.imagen);            
        $('#titulo-detalles-producto').html(task.name);            
        $('#precio-detalles-producto').html("$" + task.price);
        $('#descripcion-detalles-producto').html(task.description);                   
         //salvamos las variables para detalles de producots y calcular constos de compra  pedido

         titulo_producto_vender = task.name;
         titulo_producto_vender = titulo_producto_vender.toUpperCase();                                   
         precio_producto_vender = task.price;       
        //descripcion_producto_vender = task.description;                               
                                     
        });
         */                    
});       
         
$(document).on('click', '.div-detalles-carrito', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});

