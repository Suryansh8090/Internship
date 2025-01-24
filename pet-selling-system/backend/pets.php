<?php
include 'config.php';

$query = "SELECT * FROM pets";
$result = mysqli_query($conn, $query);

$pets = [];
while ($row = mysqli_fetch_assoc($result)) {
    $pets[] = $row;
}

echo json_encode($pets);
?>
