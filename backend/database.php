<?php //gestina las peticiones que se hacen desde el request-app.js 
    //No conectamos a la base de datos
    $connection = mysqli_connect(
        //host,user,pasword,nombre base datos,
        'bey7jfoaqc2cukiettfo-mysql.services.clever-cloud.com', 'uivq6qdjzpey0dej', 'dnfpmdT4NimRywJikAl', 'bey7jfoaqc2cukiettfo'
    );

    
    if($connection){
        echo "database is connected";
    }   

?>