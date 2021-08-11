<?php

include('database.php');  
  $query = "SELECT * from productos";
  $result = mysqli_query($connection, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }else{    
  }

  $json = array(); // creamos un arreglo y lo llenamos con los datos de la Base de datos  
  while($row = mysqli_fetch_array($result)) { // recoremos cada fila  y de cada fila sacamos: caregoy, name, price, descrition, 
    $json[] = array(
      'imagen' => $row['imagen'],
      'category' => $row['category'],
      'name' => $row['name'],
      'price' => $row['price'],
      'description' => $row['description'],
      'pedidos_disponibles' => $row['pedidos_disponibles'],
      'variantes' => $row['variantes'],
      'id' => $row['id']
    );
  }
  //header("Content-Type: application/json");  
  echo $jsonstring = json_encode($json);    
  //echo $jsonstring;  
  return $jsonstring;
  
?>
