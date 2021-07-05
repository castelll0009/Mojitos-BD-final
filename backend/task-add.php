<?php

  include('database.php');

if(isset($_POST['name'])) {
   # echo $_POST['name'] . ', ' . $_POST['description'];
  /*
  //subir imagen      
  if($_FILES['archivo']['error'] > 0) //validar si se cargo un archivo o no
  {

  }else{
    $nom_archivo= $_FILES['archivo']['name'];
    $ruta_imagen= "imgs/" .$nom_archivo;
    $archivo = $_FILES['archivo']['tmp_name'];
    $subir = move_uploaded_file($archivo, $ruta_imagen);
    
  }  
  console.log($ruta_imagen);
  */    
  $task_category = $_POST['category'];
  $task_name = $_POST['name'];
  $task_price = $_POST['price'];
  $task_description = $_POST['description'];
  $task_pedidos_disponibles = $_POST['pedidos_disponibles'];
  $task_variantes = $_POST['variantes'];
  //con imagen
  //$query = "INSERT into productos(imagen, category, name, price, description, pedidos_disponibles, variantes) VALUES ('$imagen' '$task_category','$task_name','$task_price', '$task_description', '$task_pedidos_disponibles', '$task_variantes')";    
  $ruta_imagen= "EJEMPLO RUTA IMG";
  $query = "INSERT into productos(imagen, category, name, price, description, pedidos_disponibles, variantes) VALUES ('$ruta_imagen', '$task_category','$task_name','$task_price', '$task_description', '$task_pedidos_disponibles', '$task_variantes')";  
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('Query Failed.');
  }

  echo "Task Added Successfully";  

}

?>
