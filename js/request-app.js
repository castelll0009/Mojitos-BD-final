var titulo_producto_vender;
var titulo_producto_vender_original;
var variante_selecionada_producto_vender;
var adicion_selecionada_producto_vender;
var cantidad_producto_vender;
var precio_producto_vender;
var descripcion_producto_vender;
var auxCantidad = 0;
var cantidad_total_productos_vender = 0;
var total_pagar_pedido;
var TOTAL_PAGAR_producto_vender;

var preloaderActivo = true;
let edit = false;

window.onload = function(){
    //alert("todan esta  cargado");
    $("#onload-preloader").fadeOut();
    $("body").removeClass("hidden-preloader");
    preloaderActivo = false;
}


$(document).ready(function() {      
    var contador = 0;
    if(contador <1){
        fetchTasks();
        contador++;    
                    
    }    
       
    console.log('jquery is working!');
    $('#task-result').hide();
    ////////BUSCAR PRODUCTOS  MOJITOS///////
    $('#search').keyup(function(){
        if($('#search').val()) {
            let search = $('#search').val(); //guardamos el valor de la busqueda en la variable search
            $.ajax({
                url: 'backend/task-search.php', //el archivo donde se hara el backen de la peticion search
                data: {search}, //el dato que se buscara en la base de datos $_POST['search']
                type: 'POST', //quiere decir que vamos a subir elemntos postearlos
                success: function (response){
                    console.log(response);
                    if(!response.error) {
                        let tasks = JSON.parse(response);
                        let template = '';
                        tasks.forEach(task => {
                          template += `
                                 <li><a href="#" class="task-item">${task.name}</a></li>
                                ` 
                        });
                        $('#task-result').show();
                        $('#containerTask').html(template);
                    }
                }
            })
        }
    });       
    
////////AGREGAR PRODUCTOS A MOJITOS -ADD o editar//// para guardar la ruta de la imagen///
    //reamos las variables que ocntendran las variantes en texo separadas por coma
    var text_variantes ="" ;
    var text_adiciones ="";
    var sel_variantes_text = document.querySelector("#sel-variantes-disponibles");
    var sel_adiciones_text = document.querySelector("#sel-variantes-disponibles");
    $('#task-form').submit(e => {        
        e.preventDefault();                   
        var contadorSelect = 0;
        var optionLength = $("#sel-variantes-disponibles option").length; //longuitud de  el select        
        while(contadorSelect < optionLength){            
            text_variantes   = text_variantes + sel_variantes_text.options[contadorSelect].text + ";";               
            contadorSelect++;         
        }
        text_variantes = text_variantes.substring(0, text_variantes.length - 1);        

        contadorSelect = 0;
        optionLength = $("#sel-adiciones-disponibles option").length; //longuitud de  el select        
        while(contadorSelect < optionLength){
            text_adiciones   = text_adiciones + sel_adiciones.options[contadorSelect].text + ";";                
            contadorSelect++;
        }
        text_adiciones = text_adiciones.substring(0, text_adiciones.length - 1);        

      
        const postData = { //objetos que vamos a enviar al servior usando POST             
            nombre_imagen:  $('#image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta
            category: $("#category option:selected").val(),        
            name: $('#name').val(), //sacamos el valor delos campos name price y description, amnd id
            price: $('#price').val(),        
            description: $('#description').val(),
            //variantes disponibles los agregamnos a un text separado por comas            
            pedidos_disponibles: text_variantes,  
            variantes: text_adiciones,          
            id: $('#taskId').val()
        };   
        let url  =  edit === false ? 'backend/task-add.php' : 'backend/task-edit.php';
        
    //    console.log("ruta imagen " + ruta_imagen);
        //console.log(imagen);
        //alert($("#category option:selected").val());
        /*
        console.log("NOMBRE IMAGEN" +  $('#image').val().replace(/C:\\fakepath\\/i, ''));
        console.log("MOSTRAR ARREGLO A SUBIR POR CONSOLA: ");
        console.log(postData);  //Mostramos el arreglo a subir por  consola
        */
        console.log("AAAAAAAAAAAAAAAAAA" + url);
        $.post(url, postData, (response) => {
        console.log(response); //mostramos el nuevo Json a subir a la base de datos
        //reseteamos lo campos
        console.log(response);
        $('#task-form').trigger('reset');     
        /*
        $("#sel-variantes-disponibles").find('option').remove();                          
        $("#sel-adiciones-disponibles").find('option').remove();                          
        */
        //enlistamos productos
        fetchTasks(); 
        });             
        location.reload();
        alert("Cambios realizados Exitosamente!");
    });

    //agregar variantes y adiciones

////////ENLISTAR PRODUCTOS A MOJITOS -Fetching Tasks///////
    function fetchTasks() {        
        $.ajax({
            url: 'backend/tasks-list.php',
            type: 'GET',       
//            dataType: 'json',
            success: function(response) {
               // console.log("RESPUESTAA tank-list :   " + response);         
                const tasks = JSON.parse(response);                             
                //const tasks = response;                      
                //console.log(tasks);
                let template = '';
                let template_cafes_mojitos = '';
                let template_frappes_mojitos = '';
                let template_bebidasCalientes_mojitos = '';
                let template_bebidasFrias_mojitos = '';
                let template_malteadas_mojitos = '';
                let template_megaMalteadas_mojitos = '';
                let template_wafflesDeSal_mojitos = '';
                let template_wafflesDulces_mojitos = '';
                let template_antojos_mojitos = '';                
                let template_cocteles_mojitos = '';
                tasks.forEach(task => {
                        //template   for admin , elemntos de la tabla
                    template += `
                    <tr taskId="${task.id}">
                        <td>${task.id}</td>
                        <td>${task.category}</td>
                        <td>
                            <a href="#" class="task-item">
                                ${task.name} 
                            </a>
                        </td>
                        <td>${task.price}</td>
                        <td>${task.description}</td>
                        <td>${task.pedidos_disponibles}</td>
                        <td>${task.variantes}</td>
                        <td>
                            <button class="task-delete btn btn-danger">
                            Delete 
                            </button>
                        </td>
                    </tr>
                    `        
                    //templates   for appi mojitos     , priodcutos del menu                     
                    //Identificar la categoria del elemento a introducir en cada template                    
                    if(task.category == "cafes"){
                        //template comidas mojitos
                        template_cafes_mojitos+= `
                        <div  productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles  ">
                            <img  src="${task.imagen}" >   
                            <h5  class="titulo-producto ">${task.name}<br>$${task.price}</h5>					  
                        </div>
                        `  
                    }else{
                        if(task.category == "frappes") {
                            //template frappes Mojitos
                            template_frappes_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="${task.imagen}" > 
                                <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                            </div>
                            `  
                        } else {
                            //bebidas calientes
                            if(task.category == "bebidasCalientes"){
                                template_bebidasCalientes_mojitos += `
                                <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                    <img  src="${task.imagen}" > 
                                    <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                </div>
                                `  
                            }else{
                                //bebidas frias
                                if(task.category == "bebidasFrias"){
                                    template_bebidasFrias_mojitos += `
                                    <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                        <img  src="${task.imagen}" > 
                                        <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                    </div>
                                    `  
                                }else{
                                    //malteadas
                                    if(task.category == "malteadas"){
                                        template_malteadas_mojitos += `
                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                            <img  src="${task.imagen}" > 
                                            <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                        </div>
                                        `  
                                    }else{
                                        //mega malteadas
                                        if(task.category == "megaMalteadas"){
                                            template_megaMalteadas_mojitos += `
                                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                <img  src="${task.imagen}" > 
                                                <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                            </div>
                                        `  
                                        }else{
                                            //wafles de sal
                                            if(task.category == "wafflesdeSal"){
                                                template_wafflesDeSal_mojitos += `
                                                <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                    <img  src="${task.imagen}" > 
                                                    <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                                </div>
                                                `  
                                            }else{
                                                //waffles dulces
                                                if(task.category == "wafflesDulces"){
                                                    template_wafflesDulces_mojitos += `
                                                    <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                        <img  src="${task.imagen}" > 
                                                        <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                                    </div>
                                                    `  
                                                }else{
                                                    //antojos
                                                    if(task.category == "antojos"){
                                                        template_antojos_mojitos += `
                                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                            <img  src="${task.imagen}" > 
                                                            <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                                        </div>
                                                        `  
                                                    }else{
                                                       //cocteles
                                                        // si no es ninguna de loas anteriores sabemos  que es un coctel                                                        
                                                        template_cocteles_mojitos += `
                                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                            <img  src="${task.imagen}" > 
                                                            <h5 class="titulo-producto">${task.name}<br>$${task.price}</h5>					  
                                                        </div>
                                                        ` 
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                             
                        }      
                    }                                                                                                                                                           
                });
                //remplazamos el contenido de cada template en el html
                $('#tasks').html(template);                 
                $('#cafes').html(template_cafes_mojitos);
                $('#frappes').html(template_frappes_mojitos);
                $('#bebidasCalientes').html(template_bebidasCalientes_mojitos);
                $('#bebidasFrias').html(template_bebidasFrias_mojitos);                
                $('#malteadas').html(template_malteadas_mojitos);                
                $('#megaMalteadas').html(template_megaMalteadas_mojitos);                
                $('#wafflesdeSal').html(template_wafflesDeSal_mojitos);                
                $('#wafflesDulces').html(template_wafflesDulces_mojitos);                
                $('#antojos').html(template_antojos_mojitos);                
                $('#cocteles').html(template_cocteles_mojitos);                
            }
        });            

    }

   ////////////// //ELIMINAR PRODUCTOS 
    $(document).on('click', ".task-delete", function(){
        if(confirm("Estas seguro que deseas borrar este producto")){
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('taskId');
            //console.log(id);
            $.post('backend/task-delete.php', {id}, function (response){
                console.log(response);
                fetchTasks();
            })
        }       
    });


    //////////EDITAR PRODUCTOS- cargar datos en el formulario
    $(document).on('click', ".task-item", function(){
        let  element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr("taskId");
         console.log(id);
         //primero obtenemos los datos del elemtno clickeado
         $.post('backend/task-single.php', {id}, function(response){
             edit = true;
             console.log(response);
             const task  = JSON.parse(response);
             console.log(task);
             //const task  = response;
             //entregamos los datos a las etiquetas
             $(".card-img-top").attr("src",task.imagen);       
             console.log(task.imagen);                
             $('#category').val(task.category);              
             $('#name').val(task.name);            
             $('#price').val(task.price);
             $('#description').val(task.description); 
             $('#taskId').val(task.id);
            //traspasamos las opciones disponibles
            var array_opciones = task.pedidos_disponibles.split(';'); //creamos un arreglo [ , , ]  de la cedena separada por comas
            //introduciomos cada posiciones del arreglo a cada select    
            //array_opciones.forEach(element => console.log(element));                        
            //creamos seleccionamos el select y  le creamos options que seran llenadas con los datos del arreglo, siempre que contador sea menor al tamaño del arreglo                                
            //Limpiear todo Select     opciones                            
            $("#sel-variantes-disponibles").find('option').remove();                          
            var auxCont = 0;  
            while(auxCont <  array_opciones.length){                 
                const option = document.createElement('option');
                const valor = array_opciones[auxCont]; //le pasamos al option creado el valor del arreglo y la posicion correspodientes
                option.value = valor;
                option.text = valor;
                document.querySelector("#sel-variantes-disponibles").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                
                auxCont++;
            }
            //traspasamos las Adiciones
            var array_adiciones = task.variantes.split(';'); //creamos un arreglo [ , , ]  de la cedena separada por comas
            //introduciomos cada posiciones del arreglo a cada select    
            //array_adiciones.forEach(element => console.log(element));                        
            //creamos seleccionamos el select y  le creamos options que seran llenadas con los datos del arreglo, siempre que contador sea menor al tamaño del arreglo                                
            //Limpiear todo Select     opciones                            
            $("#sel-adiciones-disponibles").find('option').remove();                          
            var auxCont = 0;  
            while(auxCont <  array_adiciones.length){                 
                const option = document.createElement('option');
                const valor = array_adiciones[auxCont]; //le pasamos al option creado el valor del arreglo y la posicion correspodientes
                option.value = valor;
                option.text = valor;
                document.querySelector("#sel-adiciones-disponibles").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                
                auxCont++;
            }            
         })         
       
    });

//    var descripcion_productos = document.querySelector("#id-detalles-pedido");
    //DESPLEGAR DETALLES
    var actualID = 0;
    var antiguoID = 0;
    var id= 0;
    $(document).on('click', '.desplegar-detalles' , function(){
        //sonidoClickProducto();
        //id producto clickeado        
        id =  $(this).attr("productoId");                   

        actualID = id;                                        
        $(this).css("border", "2px solid rgb(245, 245, 245)");      
        $(".swiper-slide").each(function(indice,elemento){                   
                $(elemento).css("border", "none");
                //desactivamos el focus de cada elemento
        });  
        $(this).css("border", "2px solid rgb(245, 245, 245)");      

        if(antiguoID == actualID){
           //no se borran los datos                                
        }else{
        //reiniciamos la variable cantidad-productos y la descripcion                           
        cantidad_productos.value = 1;        
        document.getElementById("id-detalles-pedido").value = "";       
        /*    
        if(!estadoMostrarDetalles){        
                $(".div-detalles").css("margin-bottom" ,"-20px");
            }       
            */
        }      

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
            //tenemos que llenar el select  con los datos del mysqul   , recuperamos la cadena en una string         
            var string_aux_variantes =  task.pedidos_disponibles;
            //introduciomos los datos de la cadena en el select
            var array_variantes = string_aux_variantes.split(';'); //creamos un arreglo [ , , ]  de la cedena separada por comas
            //introduciomos cada posiciones del arreglo a cada select    
            //array_variantes.forEach(element => console.log(element));                        
            //creamos seleccionamos el select y  le creamos options que seran llenadas con los datos del arreglo, siempre que contador sea menor al tamaño del arreglo                        
        
            //Limpiear Select      Variantes  
            //OPCIONES DISPONIBLES insercion  
            //LO que vamos a hacer: queremos que los productos                            
            $("#variantes-detalles-producto").find('option').remove();                          
            var contadorAux = 0;  
            while(contadorAux <  array_variantes.length){                 
                const option = document.createElement('option');
                const valor = array_variantes[contadorAux]; //le pasamos al option creado el valor del arreglo y la posicion correspodientes
                option.value = valor;
                option.text = valor;
                document.querySelector("#variantes-detalles-producto").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                
                contadorAux++;
            }
            
            var string_aux_adiciones =  task.variantes;             
            var array_adiciones = string_aux_adiciones.split(';'); //creamos un arreglo [ , , ]  de la cedena separada por comas             
            //array_adiciones.forEach(element => console.log(element));    
            //Limpiear Select      adiciones   
            $("#adiciones-detalles-producto").find('option').remove();            
            var contadorAux = 0;             
            while(contadorAux <  array_adiciones.length){
                const option = document.createElement('option');
                const valor = array_adiciones[contadorAux]; //le pasamos al option creado el valor del arreglo y la posicion correspodientes
                option.value = valor;
                option.text = valor;
                contadorAux++;
                document.querySelector("#adiciones-detalles-producto").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                
            }    
                
            //salvamos las variables para detalles de producots y calcular constos de compra  pedido

            titulo_producto_vender =  titulo_producto_vender_original=task.name;                        
            titulo_producto_vender = titulo_producto_vender.toUpperCase();                                   
            precio_producto_vender = task.price;       
            //descripcion_producto_vender = task.description;      
            //una vez cargados los nuevos datos desplegamos la plantilla de detalles     al dar clieck en algun item                    
            $(".div-detalles").toggleClass("mostrar-detalles");   
            if(estadoMostrarDetalles()){ //esta funbcion tiene dependiencias //ADVErTISEMENT

            }else{
                if(estadoMostrarDetalles){ // SI NO ESTA DESPLEGADO       
                    setTimeout(function(){ $(".div-detalles").toggleClass("mostrar-detalles");}, 100);                                                    
                } 
            }
                             
        });      
                
    });
    //para ocultar la plantilla de detalles
    $(document).on('click', '.div-detalles', () =>{        
        // obtenemos el ID del producto clickeado
        $(".div-detalles").toggleClass("mostrar-detalles");        
        estadoMostrarDetalles();     
    });   

                 
       
    function estadoMostrarDetalles(){
        var estaOculto = true;
        if($(".div-detalles").css("margin-bottom") == "-20px"){            
            estaOculto = false;            
        } else{            
            estaOculto = true;
            antiguoID = id;
        } 
        return  estaOculto;
    }
    
    
});
