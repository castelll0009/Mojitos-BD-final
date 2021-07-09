<?php
include('database.php');

if(isset($_POST["submit"])){
    $check = getimagesize($_FILES["archivo2"]["tmp_name"]);
    if($check !== false){
        $image = $_FILES['archivo2']['tmp_name'];
        $imgContent = addslashes(file_get_contents($image));

        //Insert image content into database
        $query = "INSERT into productos2 (imagen) VALUES ('$imgContent')";      
        //$result = mysqli_query($connection, $query);
        $result = $connection->query($query);
      
        if (!$result) {
          die('Query Failed.');
        }else{
          echo "File uploaded successfully.";
        }
    }else{
        echo "Please select an image file to upload.";
    }
}
?>


