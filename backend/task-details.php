<?php

  include('database.php');

  $query = "SELECT * from productos";
  $result = mysqli_query($connection, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'name' => $row['name'],
      'price' => $row['price'],
      'description' => $row['description'],      
      'pedidos_disponibles' => $row['pedidos_disponibles'],
      'variantes' => $row['variantes']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>
