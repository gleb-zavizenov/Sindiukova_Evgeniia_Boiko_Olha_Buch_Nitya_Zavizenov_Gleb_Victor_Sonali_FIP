<?php

function getAll($tbl)
{
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM ' . $tbl;
    $results = $pdo->query($queryAll);

    if ($results) {
        return $results->fetchAll(PDO::FETCH_ASSOC);
    } else {
        return 'There was a problem accessing this info';
    }
}

function addContent() {

    try{

    $pdo = Database::getInstance()->getConnection();

    //test image
    $image = $_FILES['img']['name'];
    $image_types = array('gif', 'jpg', 'jpeg', 'png', 'webp');
    if(!in_array(pathinfo($_FILES['img']['name'])['extension'], $image_types)){
        throw new Exception('Wrong image type! Choose gif, jpg, jpeg, png or webp');
    }
    $file_path = '../images/';
    $path = $file_path . $image;
    if(!move_uploaded_file($_FILES['img']['tmp_name'], $path)){
        throw new Exception('Failed');
    }
    $create_content_query = "INSERT INTO tbl_main_sections (section_header, section_text, section_hashtag, section_color, img, popup) VALUES (:header, :text, :hashtag, :color, :image, 'no')";

    $sql_set = $pdo->prepare($create_content_query);

    $result = $sql_set->execute(
        array(


        ':header' => $_POST['section_header'],
        ':text' => $_POST['section_text'],
        ':hashtag' => $_POST['section_hashtag'],
        ':color' => $_POST['section_color'],
        ':image'=>$image
)

   
       
           
    );
 
    if ($result) {
       
        return array('result' => $result);

    } else {
        
        return array('result' => false);
    }

    }catch(Exception $e){

    $error = $e->getMessage();
    return $error;

}

}


function deleteContent($id) {
    $pdo = Database::getInstance()->getConnection();

    $delete_user = 'DELETE FROM tbl_main_sections WHERE id = :id';
    $delete_set = $pdo->prepare($delete_user);
    $results = $delete_set->execute(
        array(

            ':id'=>$id,
        )
    );

    $content = array();
    if($results){
        while($con = $delete_set->fetch(PDO::FETCH_ASSOC)) {

            $currentcontent = array();

            $currentcontent['id'] = $con['id'];
            $currentcontent['section_header'] = $con['section_header'];
            $currentcontent['section_text'] = $con['section_text'];
            $currentcontent['section_hashtag'] = $con['section_hashtag'];
            $currentcontent['section_color'] = $con['section_color'];
            $currentcontent['img'] = $con['img'];
            $currentcontent['popup'] = $con['popup'];

            $content[]= $currentcontent;
        }

        return json_encode($content);
    }

}

function editContent(){

    $pdo = Database::getInstance()->getConnection();

    $create_user_query = 'UPDATE tbl_main_sections SET section_header = :header, section_text = :text, section_hashtag = :hashtag, section_color = :color, img = :image, popup = :popup WHERE id = :id';

    $sql_set = $pdo->prepare($create_user_query);

    $resultUser = $sql_set->execute(
        array(

        ':id' => $_POST['id'],
        ':header' => $_POST['section_header'],
        ':text' => $_POST['section_text'],
        ':hashtag' => $_POST['section_hashtag'],
        ':color' => $_POST['section_color'],
        ':image' => $_POST['img'],
        ':popup' => $_POST['popup']



        )
           
    );
 
    if ($resultUser) {
       
        return array('result' => $resultUser);
    } else {
        
        return array('result' => false);
    }


}