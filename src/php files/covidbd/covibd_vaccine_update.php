
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
$CenterName = $_GET['CenterName']; $CenterEmail = $_GET['CenterEmail'];
$VaccineType = $_GET['VaccineType']; $SpecialInfo = $_GET['SpecialInfo'];
$Status = $_GET['Status']; $DailyDoseAvailable = $_GET['DailyDoseAvailable'];
$DailyDoseGiven = $_GET['DailyDoseGiven']; $District = $_GET['District'];
    $sql = "UPDATE `covid_vaccine`
        SET `CenterName` ='$CenterName', `VaccineType` ='$VaccineType',
        `SpecialInfo` ='$SpecialInfo', `Status` ='$Status',
        `DailyDoseAvailable` ='$DailyDoseAvailable', `DailyDoseGiven` ='$DailyDoseGiven',
        `District` ='$District'
        WHERE `CenterEmail` ='$CenterEmail' ";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
