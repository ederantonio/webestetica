<?php
include "./conexion/conexionDB.php";
$peticion=$_POST['peticion']; 

switch($peticion)
{
    case 'clickfecha':
        $date = $_POST['eventDate'];
        $sql = "SELECT hora FROM citas WHERE fecha ='".$date."'";
        $result = mysqli_query($con,$sql);
        $fechaResult = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $fechaResult[] = $row;
        }
        echo json_encode($fechaResult);
    break;
    

    case 'validacionfechas': 
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