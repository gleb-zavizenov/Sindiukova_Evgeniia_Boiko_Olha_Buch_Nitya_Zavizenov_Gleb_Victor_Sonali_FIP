<?php 
require_once '../load.php';
confirm_logged_in();

if (isset($_GET["add_content"])) {

    $resultaddContent = addContent();
}

echo json_encode($resultaddContent);

?>
