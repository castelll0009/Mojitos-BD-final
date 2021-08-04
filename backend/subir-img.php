<?php
/*
$ruta_carpeta =  "../imgs/";
$nombre_archivo = "archivo2" .date("dHis") .".". pathinfo($_FILES["archivo2"]["name"],PATHINFO_EXTENSION);
$ruta_guardar_archivo = $ruta_carpeta . $nombre_archivo;
$nombre_archivo =basename($_FILES["archivo2"]["name"]);  

if(move_uploaded_file($_FILES["archivo2"]["tmp_name"], $ruta_guardar_archivo)){

  echo "Imagen cargada en la ruta $ruta_guardar_archivo";
}else{
  echo "no se pudo cargar el archivo $ruta_guardar_archivo";
}
*/
$ruta_carpeta =  "../imgs/";
$ruta_guardar_archivo = $ruta_carpeta . basename($_FILES["archivo2"]["name"]);
$nombre_archivo =basename($_FILES["archivo2"]["name"]);  

if(move_uploaded_file($_FILES["archivo2"]["tmp_name"], $ruta_guardar_archivo)){

  print "Imagen cargada en la ruta $ruta_guardar_archivo";
}else{
  print "no se pudo cargar el archivo $ruta_guardar_archivo";
}



