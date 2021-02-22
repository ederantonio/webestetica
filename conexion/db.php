<?php
 
$conn = mysqli_connect('localhost', 'root', '', 'phpsamples');
if (!$conn) {
echo("Connect failed: %s\n".mysqli_connect_error());
exit;
}
?>
