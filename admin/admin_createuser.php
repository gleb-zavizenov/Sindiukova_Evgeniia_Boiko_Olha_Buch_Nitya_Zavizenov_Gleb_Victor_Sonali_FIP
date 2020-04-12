<?php 
require_once '../load.php';
confirm_logged_in();

if (isset($_GET["add_user"])) {

    $resultUser = addUser();
}

echo json_encode($resultUser);

?>
