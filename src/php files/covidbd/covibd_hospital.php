<?php

$connect=mysqli_connect("localhost","root","","covibd");

if($_SERVER["REQUEST_METHOD"] == "GET"){
$district = $_GET['district'];
$sql="SELECT * FROM `covid_hospital` WHERE `District` LIKE '$district'";
$result=mysqli_query($connect,$sql);

$json_array=array();
while($row=mysqli_fetch_assoc($result))
{
	$json_array[]=$row;

}
echo json_encode($json_array);
}
?>
