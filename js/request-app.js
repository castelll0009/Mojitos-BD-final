var titulo_producto_vender;
var titulo_producto_vender_original;
var variante_selecionada_producto_vender;
var variante_selecionada_producto_vender2;
var cantidad_producto_vender;
var precio_producto_vender;
var descripcion_producto_vender;
var auxCantidad = 0;
var cantidad_total_productos_vender = 0;
var total_pagar_pedido;
var TOTAL_PAGAR_producto_vender;

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
  
////////AGREGAR IMAGEN DE LOS PRIDUCTOS //// para guardar la ruta de la imagen///

////////AGREGAR PRODUCTOS A MOJITOS -ADD//// para guardar la ruta de la imagen///
    $('#task-form').submit(e => {        
        e.preventDefault();    
        const postData = { //objetos que vamos a enviar al servior usando POST             
            nombre_imagen:  $('#image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta
            category: $("#category option:selected").val(),        
            name: $('#name').val(), //sacamos el valor delos campos name price y description, amnd id
            price: $('#price').val(),        
            description: $('#description').val(),
            pedidos_disponibles: $("#pedidos_disponibles option:selected").text(),  
            variantes: $("#variantes option:selected").text(),          
            id: $('#taskId').val()
        };   

        
    //    console.log("ruta imagen " + ruta_imagen);
        //console.log(imagen);
        alert($("#category option:selected").val());
        console.log("NOMBRE IMAGEN" +  $('#image').val().replace(/C:\\fakepath\\/i, ''));
        console.log("MOSTRAR ARREGLO A SUBIR POR CONSOLA: ");
        console.log(postData);  //Mostramos el arreglo a subir por  consola
        $.post('backend/task-add.php', postData, (response) => {
        console.log(response); //mostramos el nuevo Json a subir a la base de datos
        $('#task-form').trigger('reset');     
        fetchTasks(); 
        });     
        
    });

    //agregar variantes y adiciones
    
////////ENLISTAR PRODUCTOS A MOJITOS -Fetching Tasks///////
    function fetchTasks() {        
        $.ajax({
            url: 'backend/tasks-list.php',
            type: 'GET',       
//            dataType: 'json',
            success: function(response) {
                console.log("RESPUESTAA tank-list :   " + response);         
                const tasks = JSON.parse(response);                             
                //const tasks = response;      
                console.log("AAAAAAAAAAQUI NO LLEGO NUNCA");
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
                            <h5  class="titulo-producto ">${task.name} $${task.price}</h5>					  
                        </div>
                        `  
                    }else{
                        if(task.category == "frappes") {
                            //template frappes Mojitos
                            template_frappes_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="${task.imagen}" > 
                                <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                            </div>
                            `  
                        } else {
                            //bebidas calientes
                            if(task.category == "bebidasCalientes"){
                                template_bebidasCalientes_mojitos += `
                                <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                    <img  src="${task.imagen}" > 
                                    <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                </div>
                                `  
                            }else{
                                //bebidas frias
                                if(task.category == "bebidasFrias"){
                                    template_bebidasFrias_mojitos += `
                                    <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                        <img  src="${task.imagen}" > 
                                        <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                    </div>
                                    `  
                                }else{
                                    //malteadas
                                    if(task.category == "malteadas"){
                                        template_malteadas_mojitos += `
                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                            <img  src="${task.imagen}" > 
                                            <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                        </div>
                                        `  
                                    }else{
                                        //mega malteadas
                                        if(task.category == "megaMalteadas"){
                                            template_megaMalteadas_mojitos += `
                                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                <img  src="${task.imagen}" > 
                                                <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                            </div>
                                        `  
                                        }else{
                                            //wafles de sal
                                            if(task.category == "wafflesdeSal"){
                                                template_wafflesDeSal_mojitos += `
                                                <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                    <img  src="${task.imagen}" > 
                                                    <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                                </div>
                                                `  
                                            }else{
                                                //waffles dulces
                                                if(task.category == "wafflesDulces"){
                                                    template_wafflesDulces_mojitos += `
                                                    <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                        <img  src="${task.imagen}" > 
                                                        <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                                    </div>
                                                    `  
                                                }else{
                                                    //antojos
                                                    if(task.category == "antojos"){
                                                        template_antojos_mojitos += `
                                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                            <img  src="${task.imagen}" > 
                                                            <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                                                        </div>
                                                        `  
                                                    }else{
                                                       //cocteles
                                                        // si no es ninguna de loas anteriores sabemos  que es un coctel                                                        
                                                        template_cocteles_mojitos += `
                                                        <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                                            <img  src="${task.imagen}" > 
                                                            <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
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
//    var descripcion_productos = document.querySelector("#id-detalles-pedido");
    //DESPLEGAR DETALLES
    $(document).on('click', '.desplegar-detalles' , function(){
        //reiniciamos la variable cantidad-productos y la descripcion
        cantidad_productos.value = 1;
        document.getElementById("id-detalles-pedido").value = "";
        //despliegue detalles con toggle                
        //desplejar la sinta desde abajo                   
            /*var index = $(this).index();
            console.log(index);
            $('.desplegar-detalles').eq(index).css({'display': 'none'});
            */
            const id =  $(this).attr("productoId");                                           
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

             titulo_producto_vender =  titulo_producto_vender_original=task.name;                        
             titulo_producto_vender = titulo_producto_vender.toUpperCase();                                   
             precio_producto_vender = task.price;       
            //descripcion_producto_vender = task.description;      
            //una vez cargados los nuevos datos desplegamos la plantilla de detalles                         
            $(".div-detalles").toggleClass("mostrar-detalles");                           
            });
           
          //calculamos 
            
        });                 
                
    $(document).on('click', '.div-detalles', () =>{        
        $(".div-detalles").toggleClass("mostrar-detalles"); 
    });
    
    
});
