<?php 

require_once '../load.php';


if(isset($_GET["getContent"])) {
    $content = getContent($table);
    $table = 'main_sections';
 
    echo json_encode($content);
} 
