<?php
/*include'./conexion/conexionDB.php';*/
include('./conexion/conexionDB.php');
if(mysqli_connect_errno()){ 
	echo "Fallo la conexon a la base de datos";
}
 
else
{

	$varAjax=$_POST['peticion']; 
	/*$varAjax="traer_imagenes";*/
	switch ($varAjax) 
	{ 
		case 'traer_imagenes':
			$consulta=mysqli_query($con,"SELECT * FROM servicios_img");
			$array_data=array(); 
		while($data=mysqli_fetch_assoc($consulta))
		{	 
			$array_data[]=$data;
		} 	 
		echo json_encode($array_data,JSON_UNESCAPED_UNICODE);  
		break;
		
		case 'traer_infoservicio':
			$var=$_POST['idsp'];/* 1*/
			$data = json_decode($var);
			$consulta=mysqli_query($con,"SELECT id_servicio,ser_titulo,ser_source_secundario,ser_descripcion FROM servicios_img WHERE id_servicio='$data'");
			while($result=mysqli_fetch_assoc($consulta))
		{	 
			$array_data[]=$result;
		} 	 
		echo json_encode($array_data,JSON_UNESCAPED_UNICODE);
		break; 	
	}
	 
	


}

 



 	 




 
?>