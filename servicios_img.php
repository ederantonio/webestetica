<?php
/*include'./conexion/conexionDB.php';*/
include('./conexion/conexionDB.php');
if(mysqli_connect_errno()){/* si existe una falla en la conexion con esta funcion manda el letrero*/
	echo "Fallo la conexon a la base de datos";
}
/* 
	$data = json_decode(file_get_contents("http://localhost/pruebas/test.json"),true);
	va adecodificar lo que trae la url
	y con print_r($data) para formato de array

	para iterar el arreglo

	for($i=0;$i<cont($data);$i+){
	 echo $data[$i]["nombre"]."<br>"
	}






*/
else
{

	$varAjax=$_POST['peticion'];/* Dato traído de ajax llega traer_imagenes o traer_info*/
	/*$varAjax="traer_imagenes";*/
	switch ($varAjax) 
	{/* evaluamos la opcion*/
		case 'traer_imagenes':
			$consulta=mysqli_query($con,"SELECT * FROM servicios_img");
			$array_data=array();/* se declara el array*/
			/*if(mysqli_num_rows($consulta)>0)con este mysqli_num_rows se obtiene el numero de registros si es mayor a cero 	significa que hay registros
			{*/
		while($data=mysqli_fetch_assoc($consulta))
		{	/* con este mysqli_fetch_assoc se obtiene  un array con indices numericos y asociativos*/
			$array_data[]=$data;
		}	
			/*print_r($array_data); con print_r muestra los resultados asignados al array de php*/
		echo json_encode($array_data,JSON_UNESCAPED_UNICODE);/* con json_unescaped_unicode resuelve los eslaches y simbolos*/
		/*}*/
		break;
		
		case 'traer_infoservicio':
			$var=$_POST['idsp'];/* 1*/
			$data = json_decode($var);
			$consulta=mysqli_query($con,"SELECT id_servicio,ser_titulo,ser_source_secundario,ser_descripcion FROM servicios_img WHERE id_servicio='$data'");
			while($result=mysqli_fetch_assoc($consulta))
		{	/* con este mysqli_fetch_assoc se obtiene  un array con indices numericos y asociativos*/
			$array_data[]=$result;
		}	
			/*print_r($array_data); con print_r muestra los resultados asignados al array de php*/
		echo json_encode($array_data,JSON_UNESCAPED_UNICODE);
			break;

			
	}
	 
	


}

 



 	 




 
?>