<?php //gestina las peticiones que se hacen desde el request-app.js 
    //No conectamos a la base de datos
    $connection = mysqli_connect(
        //host,user,pasword,nombre base datos,
        'blzwwwafrtnoulyompah-mysql.services.clever-cloud.com', 'uflmxyisjbdu7w7l', 'k5ulb9EJWmdqIgYLjNHF', 'blzwwwafrtnoulyompah'
    );

    
    if($connection){
        echo "database is connected";
    }   else{
        echo "no se pudo conectar a la BD";
    }

?>