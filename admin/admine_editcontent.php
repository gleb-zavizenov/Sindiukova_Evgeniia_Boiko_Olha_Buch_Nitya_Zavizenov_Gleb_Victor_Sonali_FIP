<?php

require_once '../load.php';
confirm_logged_in();


if(isset($_GET["edit_content"])) {

    $result = editContent();
}

echo json_encode($result);



?>