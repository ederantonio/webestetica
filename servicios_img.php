<?php
/*include'./conexion/conexionDB.php';*/
include ('./conexion/conexionDB.php');  
 

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
		 
		// echo("<script>console.log('PHP: " . json_encode($array_data) . "');</script>");
 
		echo json_encode($array_data);  
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
	 
	


 

 



 	 




 
?>