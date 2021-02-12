<?php
// $con=mysqli_connect("sql308.epizy.com", "epiz_27473161","exHFZmX1t79TcSd", "epiz_27473161_servpaq");
$con=mysqli_connect("localhost", "root","", "db_servpaq");
// mysqli_set_charset($con,"utf8");//para la codificacion de caracteres
if(!$con) {
echo "fallo al conectar a MYSQL:".mysqli_connect_error();
exit;
}/*else{
		echo "conexion exitosa!";
	}*/


 
?>