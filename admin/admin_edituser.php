<?php

require_once '../load.php';
confirm_logged_in();

$id = $_SESSION['user_id'];

$user = getSingleUser($id);
if(is_string($user)){
    $message = $user;
}

if(isset($_POST['fname'])){
    $fname = trim($_POST['fname']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $email = trim($_POST['email']);
    $message = editUser($id, $fname, $username, $password, $email);
}

?>

