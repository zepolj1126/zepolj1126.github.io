<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST['submit'])) {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];

  $to = "ennsjeni@gmail.com";
  $subject = "ennscribe.com message";
  $message = "Name: " .$name. "\n" .$msg;
  $headers = "From: " .$email;

  if (mail($to, $subject, $message, $headers)) {

      echo "<h1 align='center'>Message sent successfully!</h1>";
  } else {
      echo "Something went wrong!";
  }
}




 ?>
