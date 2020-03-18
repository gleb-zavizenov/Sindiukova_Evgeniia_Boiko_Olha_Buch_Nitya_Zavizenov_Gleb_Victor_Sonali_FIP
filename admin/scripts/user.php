<?php 
    
    function createUser($fname, $username, $password, $email) {
    $pdo = Database::getInstance()->getConnection();
    
    $create_user_query = "INSERT INTO tbl_user (user_fname, user_name, user_pass, user_email, user_ip) VALUES (:fname, :username, :pass, :email, 'no')";
    $sql_set = $pdo->prepare($create_user_query);
    $user_result = $sql_set->execute(
            array(
            ':fname'=>$fname,
            ':username'=>$username,
            ':email'=>$email,
            ':pass'=>$password
            )
        );

 
        

}

function editUser($id, $fname, $username, $password, $email){

    $pdo = Database::getInstance()->getConnection();
    
    $update_query = "UPDATE tbl_user SET user_fname = :fname, user_name = :username, user_pass = :password, user_email = :email WHERE user_id = :id";
        $update_set = $pdo->prepare($update_query);
        $results = $update_set->execute(
            array(

                ':id'=>$id,
                'fname'=>$fname,
                ':username'=>$username,
                ':password'=>$password,
                ':email'=>$email
            

            )

        );

}

function getAllUsers(){
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute();

    $users = array();

    if($get_user_result){
        while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['fname'] = $user['user_fname'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['password'] = $user['user_pass'];
            $currentuser['email'] = $user['user_email'];

            $users[]= $currentuser;
        }

        return json_encode($users);
    } else {
        
        return 'There was a problem getting the users';
    }
}

function deleteUser($id) {
    $pdo = Database::getInstance()->getConnection();
    $delete_user = 'DELETE FROM tbl_user WHERE user_id = :id';
    $delete_set = $pdo->prepare($delete_user);
    $results = $delete_set->execute(
        array(

            ':id'=>$id,
        )
    );

    $users = array();
    if($results){
        while($user = $delete_set->fetch(PDO::FETCH_ASSOC)) {

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['fname'] = $user['user_fname'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['password'] = $user['user_pass'];
            $currentuser['email'] = $user['user_email'];

            $users[]= $currentuser;
        }

        return json_encode($users);
    }

}

?>