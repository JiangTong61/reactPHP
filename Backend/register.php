<?php
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "react_php";

$conn = new mysqli($servername, $username, $password, $dbname);

//  if ($conn ->connect_error) {
//     die("Connection failed: " . $conn->connect_error );
// }
$recEmail = $_POST['email'];
$recPassword = $_POST['password'];
$recUsername = $_POST['username'];
$query = "INSERT INTO user (Email, userPassword, UserName) value ('$recEmail', '$recPassword', '$recUsername')";


if (mysqli_query($conn, $query)) {
    echo "Data has been inserted successfully";
} else {
    echo "Error!";
}
