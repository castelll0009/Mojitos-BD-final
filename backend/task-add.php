<?php

  include('database.php');

if(isset($_POST['name'])) {
   # echo $_POST['name'] . ', ' . $_POST['description'];  
  
  $ruta_carpeta =  "../imgs/";
  $ruta_guardar_archivo = $ruta_carpeta . basename($_FILES["archivo2"]["name"]);
  $nombre_archivo = basename($_FILES["archivo2"]["name"]);  

  if(move_uploaded_file($_FILES["archivo2"]["tmp_name"], $ruta_guardar_archivo)){
    print "Imagen cargada en la ruta $ruta_guardar_archivo";
  }else{
    print "no se pudo cargar el archivo $ruta_guardar_archivo";
  }
    
  //$ruta_imagen_string = strval($ruta_guardar_archivo);

//otros datos
  $task_nombre_imagen = $_POST['nombre_imagen'];
  $task_category = $_POST['category'];
  $task_name = $_POST['name'];
  $task_price = $_POST['price'];
  $task_description = $_POST['description'];
  $task_pedidos_disponibles = $_POST['pedidos_disponibles'];
  $task_variantes = $_POST['variantes'];
  //con imagen
  //ajustamos la ruta de la imagen a subir
  $ruta_imagen_string = $ruta_carpeta . $task_nombre_imagen;
  print $ruta_imagen_string;

  //$query = "INSERT into productos(imagen, category, name, price, description, pedidos_disponibles, variantes) VALUES ('$imagen' '$task_category','$task_name','$task_price', '$task_description', '$task_pedidos_disponibles', '$task_variantes')";    
  //$ruta_imagen= "EJEMPLO RUTA IMG";
  $query = "INSERT into productos(imagen, category, name, price, description, pedidos_disponibles, variantes) VALUES ('$ruta_imagen_string', '$task_category','$task_name','$task_price', '$task_description', '$task_pedidos_disponibles', '$task_variantes')";  
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('Query Failed.');
  }

  echo "Task Added Successfully $ruta_imagen_string";  

}

?>
