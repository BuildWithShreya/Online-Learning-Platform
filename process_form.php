<?php
$servername = "localhost";
$username = "root";
$password = "Shreya@1305";
$dbname = "OnlineCourseData";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];
$address = $_POST['address'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registrations (name, email, course, address) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $course, $address);

// Execute the statement
if ($stmt->execute()) {
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
