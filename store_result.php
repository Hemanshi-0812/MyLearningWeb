<?php
$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['username']) && isset($_POST['score']) && isset($_POST['total'])) {
  $user = $_POST['username'];
  $score = (int) $_POST['score'];
  $total = (int) $_POST['total'];

  $stmt = $conn->prepare("INSERT INTO student (username, score, total) VALUES (?, ?, ?)");
  $stmt->bind_param("sii", $user, $score, $total);

  if ($stmt->execute()) {
    echo "Result stored successfully!";
  } else {
    echo "Error storing result: " . $conn->error;
  }

  $stmt->close();
} else {
  echo "Missing data!";
}

$conn->close();
?>
