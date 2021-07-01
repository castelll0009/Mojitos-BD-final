
function desplegarDetalles() {
    //desplejar la sinta desde abajo   
    $(".desplegar-detalles").click(function(){
        $(".div-detalles").toggleClass("mostrar-detalles");
    });

    $(".div-detalles").click(function(){ 
        $(".div-detalles").toggleClass("mostrar-detalles");
    });   
}