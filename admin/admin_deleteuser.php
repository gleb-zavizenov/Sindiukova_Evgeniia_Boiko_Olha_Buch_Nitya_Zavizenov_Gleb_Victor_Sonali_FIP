<?php 
    require_once '../load.php';
    confirm_logged_in();

    if(isset($_GET['allusers'])) {
        $result = getAllUsers();
        echo $result;

        

       
    }

    if(isset($_GET['delete_user'])){
        $users = $_GET['user_id'];
        $result = deleteUser($users);
    
    }

   

  
?>
