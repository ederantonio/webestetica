<?php
include "./conexion/conexionDB.php";
$peticion=$_POST['peticion']; 

switch($peticion) 
{
    case 'depuraciondehoras': //fecha y hora
        $fecha = $_POST['eventDate'];
        $fechahora = explode(" ", $fecha);
        $fec = $fechahora[0];
        $hor = $fechahora[1];
        $sql = "SELECT fecha FROM citas WHERE fecha = '".$fec."' AND hora = '".$hor."'";
        $total = mysqli_num_rows(mysqli_query($con,$sql));
        // echo "<script>console.log('$total')</script>";
        if($total==0){ 
            echo json_encode('sin reserva:'.$hor);
        }
        // }else{  
        //     $result = mysqli_query($con,$sql);
        //     $fechaResult = array();
        //     while ($row = mysqli_fetch_assoc($result)) {
        //         $fechaResult[] = $row;
        //     }
        //     echo json_encode($fechaResult);
        // }
        break;

    case 'clickfecha':// Al seleccionar alguna fecha
        $date = $_POST['eventDate'];
        $sql = "SELECT hora FROM citas WHERE fecha = '".$date."'" ;
        $result = mysqli_query($con,$sql);
        $fechaResult = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $fechaResult[] = $row;
        }
        echo json_encode($fechaResult);
    break;
    

    case 'validacionfechas': // Cuando ya se envian las opciones y el formulario completo
        $servicio = $_POST['servicio'];
        $personal = $_POST['personal'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone']; 
        $description = $_POST['description'];
        $precio = $_POST['precio']; 
        
        if(isset( $servicio) && isset( $personal) && isset( $fecha) 
            && isset( $hora) && isset( $name) && isset( $email) &&
            isset( $phone) && isset( $description) && isset( $precio))
        {  
            $msj = 'Hola, '.$name.'!'."\n"; 
            $msj .='tu servicio es'.$servicio."\n";
            $msj .='te atendera'.$personal."\n";
            $msj .='fecha y hora '.$fecha.' '.$hora;
            
            $data = [
                
                'phone' => '52'.$phone, // Receivers phone
                'body' => $msj, // Message
            ];
            $json = json_encode($data); // Encode data to JSON
            // URL for request POST /message
            $token = 'ftog1nuo2ctnu8fh';
            $instanceId = '242512';
            $url = 'https://api.chat-api.com/instance'.$instanceId.'/message?token='.$token;
            // Make a POST request
            $options = stream_context_create(['http' => [
                    'method'  => 'POST',
                    'header'  => 'Content-type: application/json',
                    'content' => $json
                ]
            ]);
            // Send a request
            $result = file_get_contents($url, false, $options);

            $sql = "INSERT INTO citas(servicio, personal, fecha,hora,nombre,email,telefono, comentarios, precio)
            VALUES( '$servicio','$personal','$fecha','$hora','$name','$email','$phone','$description','$precio')"; 

            if (mysqli_query($con, $sql)){  
                echo  json_encode('Registro exitoso!'.$fecha.'');
            }else{
                echo "Error:".mysqli_error($con);
            }
            mysqli_close($con); 
        }

        
    break;

}



 
?>