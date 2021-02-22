<?php
// $con=mysqli_connect("sql308.epizy.com", "epiz_27473161","exHFZmX1t79TcSd", "epiz_27473161_servpaq");
$con=mysqli_connect("localhost", "root","", "db_servpaq") or die('consulta fallida:'.mysql_connect_error());
// mysqli_set_charset($con,"utf8");//para la codificacion de caracteres
if (mysqli_connect_errno()) {// regresa el ultimo codigo de error de mysql_connect
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit;
}
?>