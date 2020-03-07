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


       function getUser($conn) {
        // validate that the post method is working from out JS file
        $username = $_POST['username'];

        // echo $userame; 

        $getUser = 'SELECT * FROM users WHERE user_name="'.$username.'"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }

?>