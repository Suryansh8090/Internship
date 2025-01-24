<?php
include 'config.php';

$fileName = $_GET['file'] ?? '';

$query = "SELECT * FROM files WHERE file_name='$fileName'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $file = mysqli_fetch_assoc($result);
    $filePath = $file['file_path'];
    $password = $file['password'];
    $expiryDate = $file['expiry_date'];

    // Check if the link has expired
    if ($expiryDate && strtotime($expiryDate) < time()) {
        echo json_encode(['status' => 'failure', 'message' => 'Link has expired']);
        exit;
    }

    // If password is set, ask for the password
    if ($password) {
        if (!isset($_GET['password']) || $_GET['password'] !== $password) {
            echo json_encode(['status' => 'failure', 'message' => 'Incorrect password']);
            exit;
        }
    }

    // Proceed with the file download
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
    readfile($filePath);
} else {
    echo json_encode(['status' => 'failure', 'message' => 'File not found']);
}
?>
