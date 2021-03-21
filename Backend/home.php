<?php
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "react_php";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$experience = "SELECT PhotoUrl, UserEmail, Content, Title from experience";
$result_experience = mysqli_query($conn, $experience);
$res = [];

foreach ($result_experience as $row) {
    $res[] = $row;
}

if (mysqli_query($conn, $experience)) {
    echo json_encode($res, JSON_PRETTY_PRINT);
} else {
    echo "Error!";
}
