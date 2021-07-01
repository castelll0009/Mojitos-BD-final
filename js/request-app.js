$(document).ready(function() {  
    var contador = 0;
    if(contador <1){
        fetchTasks();
        contador++;        
    }    
    $(document).on('click', '.desplegar-detalles',  (e)=>{
            //desplejar la sinta desde abajo   
        $(".div-detalles").toggleClass("mostrar-detalles"); 
        const element = $(this)[0].activeElement;
        console.log("DSADASDSADSDSADSA  " + element); 
        const id = $(element).attr('productoId');
        console.log(element);
        console.log($(element).attr('productoId'));
        
        console.log(id);
     
    });
    $(document).on('click', '.div-detalles', () =>{        
        $(".div-detalles").toggleClass("mostrar-detalles"); 

    });
   
    

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
    

////////AGREGAR PRODUCTOS A MOJITOS -ADD///////
    $('#task-form').submit(e => {
    e.preventDefault();
    const postData = { //objetos que vamos a enviar al servior usando POST           
        //imagen: $("#archivo").val(),         
        category: $("#category option:selected").text(),        
        name: $('#name').val(), //sacamos el valor delos campos name price y description, amnd id
        price: $('#price').val(),        
        description: $('#description').val(),
        pedidos_disponibles: $("#pedidos_disponibles option:selected").text(),  
        variantes: $("#variantes option:selected").text(),          
        id: $('#taskId').val()
    };    
    console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAA sTRING:   ");
    //console.log(imagen);
    console.log(category);
    console.log("MOSTRAR ARREGLO A SUBIR POR CONSOLA: ");
    console.log(postData);  //Mostramos el arreglo a subir por  consola
    $.post('backend/task-add.php', postData, (response) => {
      console.log(response);
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
                        <div  productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles obtener-detalles desplegar-detalles">							
                            <img  src="imgs/burger.jpg" >   
                            <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                        </div>
                        `  
                    }else{
                        if(task.category == "bebidas") {
                            //template bebidas Mojitos
                            template_bebidas_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="imgs/burger.jpg" > 
                                <h5 class="titulo-producto">${task.name} $${task.price}</h5>					  
                            </div>
                            `  
                        } else { // si no es ninguna de loas anteriores sabemos  que es un postre
                            //template Postres Mojitos
                            template_postres_mojitos += `
                            <div productoId="${task.id}" productoCategory="${task.category}" class="swiper-slide desplegar-detalles">							
                                <img  src="imgs/burger.jpg" > 
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
    /*
    //desplegar detalles     
    $(document).on('click', '.obtener-detalles', (e) => {
        const element = $(this)[0];
        console.log("DSADASDSADSDSADSA  " + element);         
        const id = $(element).attr('productoId');
        console.log(id);
        // una vez idetificado el id del elemento clickeado vamos a reemplazar la div-detalles con los elementos del producto clickeado, directamente desde la base de datos
         //Modificamos la plantilla que se despliega hacia arriba con los detalles del producto clickeado
          $.post('task-single.php', {id}, (response) => {
            const task = JSON.parse(response);
            $('#titulo-detalles-producto').val(task.name);
            $('#precio-detalles-producto').val("$" + task.price);
            $('#descripcion-detalles-producto').val(task.description);                   
          });
          e.preventDefault();
    });     
    */ 
    
});