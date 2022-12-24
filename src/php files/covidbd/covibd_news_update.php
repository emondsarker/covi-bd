
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$connect=mysqli_connect("localhost","root","","covibd");
if ($connect->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$Header = $_GET['Header']; $SubHeader = $_GET['SubHeader'];
$Image = $_GET['Image']; $Link = $_GET['Link'];
$Header .= "..."; $SubHeader .= "...";
if($_SERVER["REQUEST_METHOD"] == "GET"){
$sql="INSERT INTO `covid_news` (Header, SubHeader, Image, Link)
    VALUES ('$Header', '$SubHeader', '$Image', '$Link' )";
$result=mysqli_query($connect,$sql);

$json_array=array();
while($row=mysqli_fetch_assoc($result))
{
	$json_array[]=$row;

}
echo json_encode($json_array);
}

?>
