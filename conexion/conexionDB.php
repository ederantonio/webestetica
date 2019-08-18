<?php
	

$con=mysqli_connect("localhost", "root","", "db_servpaq");
mysqli_set_charset($con,"utf8");//para la codificacion de caracteres
if(mysqli_connect_errno($con)) {
echo "fallo al conectar a MYSQL:".mysqli_connect_error();


	}/*else{
		echo "conexion exitosa!";
	}*/



?>