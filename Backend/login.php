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

$login_Email = $_POST['loginEmail'];
$login_Password = $_POST['loginPassword'];
$sql_log = "SELECT * FROM user WHERE Email='$login_Email' and userPassword='$login_Password'";

$result = mysqli_query($conn, $sql_log);


$count = mysqli_num_rows($result);


if (mysqli_query($conn, $sql_log)) {
    if ($count === 1) {
        while ($row = mysqli_fetch_array($result)) {
            echo $row['UserName'];
        }
    } else {
        echo "false";
    }
} else {
    echo "Error!";
}
