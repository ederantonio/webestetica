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
											'paq_titulo'=>'Boda',
											'paq_precio'=>'2180',/* Aqui tiene una expresion regular definida para que al inicio anteponga signo de pesos '$'*/
											'paq_estatus'=>'1',
											'paq_source'=>'pboda.jpg',
											'paq_source2'=>'sboda.jpg',
										),

										'paquetes'=>array
										(
											
												array('est_titulo'=>'corte de cabello',
												'especificaciones'=>'despunte',),

												array('est_titulo'=>'Peinado',
												'especificaciones'=>'para cabello largo,paracabello corto,recogidos,flequillo',),
												
												array('est_titulo'=>'maquillaje',
												'especificaciones'=>'lorem',),
											
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
											'paq_titulo'=>'Maquillaje de noche',
											'paq_precio'=>'790',
											'paq_estatus'=>'1',
											'paq_source'=>'pmaqnoche.jpg',
											'paq_source2'=>'smaqnoche.jpg',
										),

										'paquetes'=>array
										(
												array('est_titulo'=>'Decoracion de uñas',
												'especificaciones'=>'consequat. Duis aute irure in, reprehenderit',),

												array('est_titulo'=>'maquillaje',
												'especificaciones'=>'Excepteur sint occaecat, cupidatat non',),
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
											'paq_titulo'=>'Color de cabello',
											'paq_precio'=>'1200', 
											'paq_estatus'=>'1',
											'paq_source'=>'ptinte.jpg',
											'paq_source2'=>'stinte.jpg',
										),

										'paquetes'=>array
										(
												array('est_titulo'=>'Corte de cabello',
												'especificaciones'=>'Lorem ipsum sit amet, consectetur adipisicing elit,',),

												array('est_titulo'=>'Mdecoloracion de cabello',
												'especificaciones'=>'Aenim ad minim veniam,
                                    			 quis nostrud exercitation ullamco ',),
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
											'paq_titulo'=>'Peindados',
											'paq_precio'=>'2900', 
											'paq_estatus'=>'1',
											'paq_source'=>'ppeinados.jpg',
											'paq_source2'=>'speinados.jpg',
										),

										'paquetes'=>array
										(
												array('est_titulo'=>'peinado',
												'especificaciones'=>'Lorem ipsum sit amet, consectetur adipisicing',),

												array('est_titulo'=>'maquilaje',
												'especificaciones'=>'orem ipsum sit amet, consectetur adipisicing,
                                    			tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                                    			quis nostrud exercitation ullamco laboris nisi ut ',),

												array('est_titulo'=>'decoracion de uñas',
												'especificaciones'=>'Lorem ipsum sit amet, consectetur adipisicing,',),

												array('est_titulo'=>'decoloración',
												'especificaciones'=>'orem ipsum sit amet, consectetur adipisicing, sed do eiusmod
                                    			tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                                    			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    			consequat.',),
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
											'paq_titulo'=>'Tendencias',
											'paq_precio'=>'1630', 
											'paq_estatus'=>'1',
											'paq_source'=>'ptendencia.jpg',
											'paq_source2'=>'stendencia.jpg',
										),

										'paquetes'=>array
										(
												array('est_titulo'=>'Tendencia',
												'especificaciones'=>'onsequat. Duis aute irure in reprehenderit, in voluptate velit ',),

												array('est_titulo'=>'Color',
												'especificaciones'=>'voluptate velit esse,
                                    			cillum eu fugiat ',),

												array('est_titulo'=>'peinado',
												'especificaciones'=>'ad minim veniam,
                                    			 quis nostrud ',),

												array('est_titulo'=>'tratamiento',
												'especificaciones'=>'Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                                    			tempor incididunt ut ',),
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
											'paq_titulo'=>'Rizado',
											'paq_precio'=>'680', 
											'paq_estatus'=>'1',
											'paq_source'=>'prizos.jpg',
											'paq_source2'=>'srizos.jpg',
										),

										'paquetes'=>array
										(
												array('est_titulo'=>'rizos-alisado',
												'especificaciones'=>'consectetur adipisicing elit',),

												array('est_titulo'=>'tratamientos',
												'especificaciones'=>'quis nostrud exercitationa',),

												array('est_titulo'=>'extensiones',
												'especificaciones'=>'Duis aute irure in reprehenderit',),
										)
									);
									echo json_encode($array,JSON_UNESCAPED_UNICODE);
									break;	
							}/* ####### cierre de switch #######*/
			break;
 		}/* ####### Cierre del switch #######*/
}/* ####### Cierre de else ####### */

?>