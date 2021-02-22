<?php
include './conexion/conexionDB.php';
$factual = $_POST['datos']; 
//echo "<script>console.log('$factual');</script>";
// $query = mysqli_query($con, "SELECT * FROM citas where fechahora = '$factual'") 
// or die('Query failed: ' . mysql_error()); 

$total = mysqli_num_rows(mysqli_query($con,"SELECT * FROM citas where fechahora = '$factual'"));
if($total==0){
    $msj= 'sin registros';
    echo json_encode($msj);
}else{ 
    echo 'Hay un total de '.$total.' usuarios';
    // $eventResult = array();
    // while ($row = mysqli_fetch_assoc($query)) {
    //     $eventResult[] = $row;
    // }
    //echo json_encode($eventResult);
}






 
?>