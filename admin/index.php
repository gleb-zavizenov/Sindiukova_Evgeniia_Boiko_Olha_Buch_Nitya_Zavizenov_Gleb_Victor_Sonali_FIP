<?php
    require_once '../load.php';


if(isset($_GET['content'])) {
    $tbl = "tbl_" . trim($_GET["content"]);

}

if(isset($_GET['delete_content'])){
    $content = $_GET['id'];
    $result = deleteContent($content);

}

if(isset($_GET['filter'])) {

    $args = array(
    
    'tbl' => $tbl,
    'tbl2' => 'tbl_year',
    'tbl3' => 'tbl_year_media',
    'col' => 'media_id',
    'col2' => 'year_id',
    'col3' => 'year_name',
    'filter' => $_GET['filter'],
    );

    $results = getMoviesByFilter($args);

    echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));

} 


else {

    $results = getAll($tbl);
    echo json_encode($results);
}