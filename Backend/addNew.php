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

$recPhotoUrl = $_POST['photourl'];
$recUserEmail = $_POST['useremail'];
$recContent = $_POST['content'];
$recTitle = $_POST['title'];
$query = "INSERT INTO experience (PhotoUrl, UserEmail, Content, Title) value ('$recPhotoUrl', '$recUserEmail', '$recContent', '$recTitle')";


if (mysqli_query($conn, $query)) {
    echo "Data has been inserted successfully";
} else {
    echo "Error!";
}
