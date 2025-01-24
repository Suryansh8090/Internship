<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $razorpay_payment_id = $_POST['razorpay_payment_id'];
    $order_id = $_POST['order_id'];

    $query = "INSERT INTO orders (payment_id, order_id, user_email, amount) VALUES ('$razorpay_payment_id', '$order_id', '".$_SESSION['user']."', 500)";
    if (mysqli_query($conn, $query)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "failure"]);
    }
}
?>
