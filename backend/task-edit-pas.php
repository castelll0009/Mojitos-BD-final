<?php
      include('database.php');  

      $id =  $_POST['id'];
      $task_nombre_imagen = $_POST['nombre_imagen'];
      $task_category = $_POST['category'];
      $task_name = $_POST['name'];
      $task_price = $_POST['price'];
      $task_description = $_POST['description'];
      $task_pedidos_disponibles = $_POST['pedidos_disponibles'];
      $task_variantes = $_POST['variantes'];

      $ruta_carpeta =  "../imgs/";      
      $ruta_imagen_string = $ruta_carpeta . $task_nombre_imagen;      
      print "$id $task_name  $ruta_imagen_string $task_nombre_imagen $task_category $task_price $task_pedidos_disponibles $task_variantes";

      
      $query = "UPDATE productos
                  SET imagen = '$ruta_imagen_string', category = '$task_category', name = '$task_name', price ='$task_price',
                  description = '$task_description', pedidos_disponibles = '$task_pedidos_disponibles', variantes = '$task_variantes' 
                  WHERE id = '$id'";                                     
 

      $result = mysqli_query($connection, $query);
      if(!$result){
            die('Query Failed');
      }

      echo "Update Task Successfully";

?>