var sound = document.getElementById("sonido-logo");
var abrir_refri = document.getElementById("sonido-refri");
var cerrar_refri = document.getElementById("sonido-cerrar-refri");
var beepc = document.querySelector("#beepc");
var var_header= document.querySelector("header");


function sonidoLogo() {					
	sound.play();			
}	
function sonidoRefri(){
	abrir_refri.play();
}
function sonidoCerrarRefri(){
	cerrar_refri.play();
}

var zoom = false;
function vistaEscritorio(){	
	
	if(!preloaderActivo){
		
		if(zoom == false){
			//vista de escritorio de pedido
			document.body.style = "zoom: 50%";		
			beepc.style ="font-size : 3.3em; bottom: 20px ;	right: 20px;";		
			zoom = true;			
			//cambiamos  tamaño al iconop del carrito con toogle clas			
			togglesModoPedido();
			stop_swipers = true;										
		}else{
			//vista normal		
			document.body.style = "zoom: 100%";		
			beepc.style ="font-size : 1.7em";
			stop_swipers = false;
			//$("#icono-carrito-compras-main").classList.add("toggle-carrito-icon");  					
			togglesModoPedido();
			zoom = false;		
		}	
	activarSwiper();	
	}
}
function togglesModoPedido(){
	$(".icono-carrito-compras-i").toggleClass("toggle-carrito-icon");	
	$(".numero-mesa").toggleClass("toggle-numero-mesa");	
	$("header").toggleClass("toggle-header");	
	$(".detalles-derecha").toggleClass("toggle-detalles-derecha");	
	$(".precio-unidades").toggleClass("toggle-precio-unidades");	
	$(".botones-unidades").toggleClass("toggle-botones-unidades");	
	$(".cantidad-producto").toggleClass("toggle-cantidad-producto");	
	$(".btn-accion").toggleClass("toggle-btn-accion");
	$(".detalles-izquierda").toggleClass("toggle-detalles-izquierda");
	$(".img-detalles-producto").toggleClass("toggle-img-detalles-producto");	
	$("h2").toggleClass("toggle-h2");	
	$(".swiper-slide").children("h5").toggleClass("toggle-swiper-slide-h5");
	$("#descripcion-detalles-producto").toggleClass("toggle-descripcion-detalles-producto");	
	$(".table").toggleClass("toggle-table");	
	$(".btn-confirmar-orden").addClass("toggle-btn-confirmar-orden");	
	$(".descripcion-productos").toggleClass("toggle-descripcion-productos");	
	$(".contenedor-tabla-factura").toggleClass("toggle-contenedor-tabla-factura");	

}
/*///////////FUNCIONES///////////////////////////////////////*/
/*///////////FUNCIONES///////////////////////////////////////*/
//abriendo y cerrando el refigerador
var refri1 = document.querySelector(".refri1");
var refri2 = document.querySelector(".refri2");
var refriCerrado = true; 

function abrirCerrarRefri(){
	if(refriCerrado){	
		sonidoRefri();
		refriCerrado = false;
	}else{
		sonidoCerrarRefri();
		refriCerrado = true;
	
	}	
	refri1.classList.toggle("desaparecerRefri"); // desaparece refrigerador
	refri2.classList.toggle("aparecerRefri"); // Aparece refri2	
}


/*cambiar la apariencia de la barra superiro al mover la rueda del mouse hacia abajo*/
window.onscroll = function() {
  var y = window.scrollY;
  if(y > 32){	  	  
	var_header.style  =   "background-color :  rgb(0, 0, 0,0.7);";
  }else{
	var_header.style  =   " background-color: rgba(5, 5, 5, 0.342) " ;
  }
  
};


/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/
	
$(document).ready(function() {		
	
	$(document).ready(() => {
		$(".sona0").click(function(){
			var elem = $(".puntos0", this).text();
/*			$(".puntos0", this).css("display","none");*/

			if (elem == "...Leer Más") {
				//depliega
				$(".text0", this).slideDown();
				$(".puntos0" ,this).text("");													
				//solo afecta las resoluciones grandes como el PC				
				//ahora dependiendo del hover  cambiamos el estilo del Div-figure																																											
			  } else {
				//pliega
				$(".puntos0", this).text("...Leer Más");		
				$(".text0", this).slideUp();														
			  }				  	
		});
	});
///////////////////////////////////////////////////////////////////

});