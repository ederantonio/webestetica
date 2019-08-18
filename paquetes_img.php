<?php
include ('./conexion/conexionDB.php');
if(mysqli_connect_errno())
{
	echo 'fallo la conexion a la base de datos';
}
else
{
		$varAjax=$_POST['peticion'];/* 'traer paquetes'*/
		switch ($varAjax)
		{
			case 'traer_paquetes':
				$consulta=mysqli_query($con,"SELECT * FROM paquetes_img");
				$array_data=array();
				while($data=mysqli_fetch_assoc($consulta))
				{
					$array_data[]=$data;
				}
				echo json_encode($array_data,JSON_UNESCAPED_UNICODE);
			break;


			case 'traer_infopaquete':
			$var=$_POST['idsp'];/* llega '1'*/
			$data = json_decode($var);
			/*$file=file_get_contents('paquetes.json');
			$json=json_decode($file,true);*/
							switch ($var) 
							{
								case '1':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'1',
											'paq_titulo'=>'Ser Mujer',
											'paq_precio'=>'2180',/* Aqui tiene una expresion regular definida para que al inicio anteponga signo de pesos '$'*/
											'paq_estatus'=>'1',
											'paq_source'=>'principal-ser_mujer2018-08-15 09_41_52.jpg',
											'paq_source2'=>'secundaria-ser_mujer2018-08-15 09_41_52.jpg',
										),

										'estudios'=>array
										(
											
												array('est_titulo'=>'ginecologia',
												'especificaciones'=>'papanicolau',),

												array('est_titulo'=>'imagenologia',
												'especificaciones'=>'Mamografía,Densitometría (columna y cadera),Ultrasonido Pélvico,Ultrasonido Mamario',),
												
												array('est_titulo'=>'muestra de sangre',
												'especificaciones'=>'quimica',),
											
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;
								
								case '2':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'2',
											'paq_titulo'=>'Cáncer de mama',
											'paq_precio'=>'790',
											'paq_estatus'=>'1',
											'paq_source'=>'principal-cancer_de_mama20180815094249.jpg',
											'paq_source2'=>'secundaria-cancer_de_mama2018-08-15 09_42_49.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Ultrasonido Mamario,Mamografía',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno CA 15.3',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;

								case '3':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'3',
											'paq_titulo'=>'Cáncer de mama / Osteoporosis',
											'paq_precio'=>'1200', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-cdm_osteoporosis20180815095840.jpg',
											'paq_source2'=>'secundaria-cdm_osteoporosis20180815095840.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Ultrasonido Mamario,Mamografía',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno CA 15.3',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '4':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'4',
											'paq_titulo'=>'Adulto Mayor Femenino',
											'paq_precio'=>'2900', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-adulto_mayor_femenino20180815095913.jpg',
											'paq_source2'=>'secundaria-adulto_mayor_femenino20180815095913.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Enfermería',
												'especificaciones'=>'Peso y talla,Electrocardiograma,Presión arterial',),

												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Densitometría (columna y cadera),Ultrasonido Mamario,Tele de Tórax (1 posición),Mamografía,Ultrasonido de abdomen total',),

												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina,Microalbuminuria',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Perfil Hepático,Antígeno CA 15.3,Perfil Reumático,Química Sanguínea IV,Perfil de Lípidos,Biometría Hemática,Perfil Iónico,Antígeno CA 125,Hemoglobina Glicosilada',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '5':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'5',
											'paq_titulo'=>'Paquete Integral Masculino',
											'paq_precio'=>'1630', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-paquete_integral_masculino20180815100033.jpg',
											'paq_source2'=>'secundaria-paquete_integral_masculino20180815100033.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Enfermería',
												'especificaciones'=>'Peso y talla,Electrocardiograma,Presión arterial',),

												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Tele de Tórax (1 posición),Ultrasonido de abdomen inferior',),

												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina,Microalbuminuria',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno específico de próstata,Química Sanguínea IV,Hemoglobina Glicosilada,Biometría Hemática,Perfil de Lípidos,Perfil Hepático',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '6':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'6',
											'paq_titulo'=>'Chequeo de Próstata',
											'paq_precio'=>'680', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-chequeo_de_prostata20180815100138.jpg',
											'paq_source2'=>'secundaria-chequeo_de_prostata20180815100138.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Ultrasonido prostáticol',),

												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno específico de próstata',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '7':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'7',
											'paq_titulo'=>'Paquete Infantil',
											'paq_precio'=>'385', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-paquete_infantil20180815100243.jpg',
											'paq_source2'=>'secundaria-paquete_infantil20180815100243.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Reacciones febriles,Química sanguínea básica (glucosa,colesterol y triglicéridos),Biometría Hemática',),

												array('est_titulo'=>'Muestra heces fecales',
												'especificaciones'=>'Coproparasitoscópico único',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '8':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'8',
											'paq_titulo'=>'Mujer Joven, Mujer Sana',
											'paq_precio'=>'890', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-mujer_joven_mujer_sana20180815100326.jpg',
											'paq_source2'=>'secundaria-mujer_joven_mujer_sana20180815100326.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Ginecología',
												'especificaciones'=>'Papanicolaou',),

												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Ultrasonido Mamario',),

												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno CA 15.3,Química Sanguínea VI,Biometría Hemática',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

								case '9':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'9',
											'paq_titulo'=>'Adulto Mayor Masculino',
											'paq_precio'=>'2260', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-adulto_mayor_masculino20180815100402.jpg',
											'paq_source2'=>'secundaria-adulto_mayor_masculino20180815100402.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Enfermería',
												'especificaciones'=>'Presión arterial,Peso y talla,Electrocardiograma en reposo',),

												array('est_titulo'=>'Imagenología',
												'especificaciones'=>'Ultrasonido de abdomen total,Densitometría (columna y cadera),Tele de Tórax (1 posición),Rodillas comparativas',),

												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Microalbuminuria,Examen general de orina',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Perfil de Lípidos,Biometría Hemática,Antígeno carcinoembrionario,Perfil Iónico,Antígeno específico de próstata,Perfil Hepático,Hemoglobina Glicosilada,Química Sanguínea IV',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;

								case '10':
									$array=array
									(
										'informacion'=>array
										(
											'id_paquete'=>'10',
											'paq_titulo'=>'Básico Masculino',
											'paq_precio'=>'470', 
											'paq_estatus'=>'1',
											'paq_source'=>'principal-basico_masculino20180815100448.jpg',
											'paq_source2'=>'secundaria-basico_masculino20180815100448.jpg',
										),

										'estudios'=>array
										(
												array('est_titulo'=>'Muestra de orina',
												'especificaciones'=>'Examen general de orina',),

												array('est_titulo'=>'Muestra de sangre',
												'especificaciones'=>'Antígeno específico de próstata,Química Sanguínea VI,Biometría Hemática',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	

							}/* ####### cierre de switch #######*/
			break;
 		}/* ####### Cierre del switch #######*/
}/* ####### Cierre de else ####### */

?>