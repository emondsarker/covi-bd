
<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "covibd";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_GET['name']; $CenterEmail = $_GET['CenterEmail'];
$location = $_GET['location']; $contact = $_GET['contact'];
$GBedOcc = $_GET['GBedOcc']; $GBedVac = $_GET['GBedVac'];
$IcuBedOcc = $_GET['IcuBedOcc']; $IcuBedVac = $_GET['IcuBedVac'];
$oxygentankavail = $_GET['oxygentankavail']; $District = $_GET['District'];
    $sql = "UPDATE `covid_hospital`
        SET `name` ='$name', `location` ='$location',
        `contact` ='$contact', `GBedOcc` ='$GBedOcc',
        `GBedVac` ='$GBedVac', `IcuBedOcc` ='$IcuBedOcc',
        `IcuBedVac` ='$IcuBedVac', `oxygentankavail` ='$oxygentankavail',
        `District` ='$District'
        WHERE `CenterEmail` ='$CenterEmail' ";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
