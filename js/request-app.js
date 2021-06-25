$(document).ready(function(){    
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
    const postData = {
        name: $('#name').val(),
        price: $('#price').val(),
        description: $('#description').val(),
        id: $('#taskId').val()
    };
    /*const url = edit === false ? 'task-add.php' : 'task-edit.php';*/
    console.log(postData, url);
    $.post(url, postData, (response) => {
        console.log(response);
        $('#task-form').trigger('reset');
        fetchTasks();
    });
    });


});