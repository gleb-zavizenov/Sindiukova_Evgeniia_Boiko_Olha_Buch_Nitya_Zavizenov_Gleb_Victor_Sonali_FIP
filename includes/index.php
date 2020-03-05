<?php 
include('functions.php');

// if we are passing in a user key in the GET superglobal, then go get a user

if(isset($_GET["getUsers"])) {
    $users = getUsers($pdo);

    echo json_encode($users);
}