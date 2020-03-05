<?php
    require('connect.php');

       function getContent($conn) {

           $getData = 'SELECT * FROM main_sections';
           $runQuery = $conn->query($getData);

           $result = array();

           while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
               $result[] = $row;
           }

           return $result;
       }

?>