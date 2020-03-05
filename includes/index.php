<?php 
include('functions.php');

// if we are passing in a user key in the GET superglobal, then go get a user

if(isset($_GET["getContent"])) {
    $content = getContent($pdo);

    echo json_encode($content);
}