var titulo_producto_vender;
var variante_selecionada_producto_vender;
var variante_selecionada_producto_vender2;
var cantidad_producto_vender;
var precio_producto_vender;
var descripcion_producto_vender;
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
    //AGREGAR IMAGEN A MOJITOS
    //para subir imagen
    /*
    var frm = $("#frmSubirImagen");
    var btnEnviar = $("button[name=btn-submit]");
    fmr.bind("submit", function(){ //recupera todos los datos del formulario
        var fmrData = new FormData; //
        alert("entro"); 
        frmData.append("archivo2", $("input[name=archivo2]")[0].files[0]);
        $.ajax({
            url: 'backend/subir-img.php',        
            type: 'POST',
            data: fmrData,
            processData: false,
            contentType: false,
            cache: false,
            success: function (data){
            // ya se envio el archivo al formulario 
            console.log(data);
            }            
        });
        return false;    // no se envia el formulario proque queremos hacerlo con el click al boton
    });
    */
  
////////AGREGAR IMAGEN DE LOS PRIDUCTOS //// para guardar la ruta de la imagen///

////////AGREGAR PRODUCTOS A MOJITOS -ADD//// para guardar la ruta de la imagen///
    $('#task-form').submit(e => {
        alert("entro2"); 
    e.preventDefault();    
    const postData = { //objetos que vamos a enviar al servior usando POST             
        nombre_imagen:  $('#archivo2').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta
        category: $("#category option:selected").text(),        
        name: $('#name').val(), //sacamos el valor delos campos name price y description, amnd id
        price: $('#price').val(),        
        description: $('#description').val(),
        pedidos_disponibles: $("#pedidos_disponibles option:selected").text(),  
        variantes: $("#variantes option:selected").text(),          
        id: $('#taskId').val()
    };   

      
//    console.log("ruta imagen " + ruta_imagen);
    //console.log(imagen);
    console.log("NOMBRE IMAGEN" +  $('#archivo2').val().replace(/C:\\fakepath\\/i, ''));
    console.log("MOSTRAR ARREGLO A SUBIR POR CONSOLA: ");
    console.log(postData);  //Mostramos el arreglo a subir por  consola
    $.post('backend/task-add.php', postData, (response) => {
      console.log(response); //mostramos el nuevo Json a subir a la base de datos
      $('#task-form').trigger('reset');     
      fetchTasks(); 
    });     
        
});
////////ENLISTAR PRODUCTOS A MOJITOS -Fetching Tasks///////
    function fetchTasks() {
        $.ajax({
            url: 'backend/tasks-list.php',
            type: 'GET',
            success: function(response) {
                console.log(response)            
                const tasks = JSON.parse(response);            
                console.log(tasks);
                let template = '';
                let template_comidas_mojitos = '';
                let template_bebidas_mojitos = '';
                let template_postres_mojitos = '';
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
                    // <img  src="imgs/${task.imagen}" >  
                    //Identificar la categoria del elemento a introducir en cada template                    
                    if(task.category == "comidas"){
                        //template comidas mojitos
                        template_comidas_mojitos+= `
                        <div  productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles obtener-detalles ">
                            <img  src="${task.imagen}" >   
                            <h5  class="titulo-producto ">${task.name} $${task.price}</h5>					  
                        </div>
                        `  
                    }else{
                        if(task.category == "bebidas") {
                            //template bebidas Mojitos
                            template_bebidas_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="${task.imagen}" > 
                                <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                            </div>
                            `  
                        } else { // si no es ninguna de loas anteriores sabemos  que es un postre
                            //template Postres Mojitos
                            template_postres_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="${task.imagen}" > 
                                <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                            </div>
                            `     
                        }      
                    }                                                                                                                                                           
                });
                $('#tasks').html(template);                 
                $('#comidasMojitos').html(template_comidas_mojitos);
                $('#bebidasMojitos').html(template_bebidas_mojitos);
                $('#postresMojitos').html(template_postres_mojitos);                
            }
        });        
    }
//    var descripcion_productos = document.querySelector("#id-detalles-pedido");
    //desplegar detalles
    $(document).on('click', '.desplegar-detalles' , function(){
        //despliegue detalles con toggle          
        $(".div-detalles").toggleClass("mostrar-detalles");  
        //desplejar la sinta desde abajo                   
            /*var index = $(this).index();
            console.log(index);
            $('.desplegar-detalles').eq(index).css({'display': 'none'});
            */
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
          //calculamos 
            
        });                 
        
        
    $(document).on('click', '.div-detalles', () =>{        
        $(".div-detalles").toggleClass("mostrar-detalles"); 
    });
    
});