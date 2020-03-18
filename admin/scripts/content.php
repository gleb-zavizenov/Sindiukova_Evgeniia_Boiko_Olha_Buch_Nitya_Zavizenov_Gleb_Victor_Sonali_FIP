<?php

// function getContent() {


// $pdo = Database::getInstance()->getConnection();
// $getData = 'SELECT * FROM main_sections';
// $runQuery = $pdo->query($getData);

// $result = array();

// while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
//     $result[] = $row;
// }

// return $result;

// }

function getContent($tbl){
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM '.$tbl;
    $results = $pdo->query($queryAll);

    if($results){
        return $results;

    }else {
        return "there was a problem accessing this info";
    }
}