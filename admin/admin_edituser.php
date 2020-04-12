<?php

require_once '../load.php';
confirm_logged_in();

// $id = $_SESSION['user_id'];

// $user = getSingleUser($id);
// if(is_string($user)){
//     $message = $user;
// }

if(isset($_GET["edit_user"])) {

    $resultEdit = editUser();
}

echo json_encode($resultEdit);



?>

