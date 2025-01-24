<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $password = $_POST['password'] ?? '';
    $expiryDate = $_POST['expiryDate'] ?? '';

    // Handle file upload
    $fileName = uniqid() . "_" . basename($file['name']);
    $filePath = "uploads/" . $fileName;

    if (move_uploaded_file($file['tmp_name'], $filePath)) {
        // Insert record into the database
        $query = "INSERT INTO files (file_name, file_path, password, expiry_date) 
                  VALUES ('$fileName', '$filePath', '$password', '$expiryDate')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(['status' => 'success', 'link' => "http://localhost/file-sharing-api/download.php?file=$fileName"]);
        } else {
            echo json_encode(['status' => 'failure', 'message' => 'Database insert failed']);
        }
    } else {
        echo json_encode(['status' => 'failure', 'message' => 'File upload failed']);
    }
}
?>
