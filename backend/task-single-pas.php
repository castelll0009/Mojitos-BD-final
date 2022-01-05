<?php

include('database.php');

if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $query = "SELECT * from tbl_pasteleria_productos WHERE id = $id";  
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('Query SELECT Failed.');
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'id' => $row['id'],
      'imagen' => $row['imagen'],
      'category' => $row['category'],
      'name' => $row['name'],
      'price' => $row['price'],
      'description' => $row['description'],
      'pedidos_disponibles' => $row['pedidos_disponibles'],
      'variantes' => $row['variantes']      
    );
  }
  $jsonstring = json_encode($json[0]);
  echo $jsonstring;  
  /*
  $id = mysqli_real_escape_string($connection, $_POST['id']);    
  $query = "SELECT * from productos WHERE id = {$id}";
  
  $result = mysqli_query($connection, $query);
  if(!result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
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
  $jsonstring = json_encode($json[0]);
  echo $jsonstring;
  */
}

?>
