<?php
    include_once("../database/connection.php");

    function getAllNews()
    {
        global $db;
        $stmt = $db->prepare('SELECT * FROM news');
        $stmt->execute();
        $articles = $stmt->fetchAll();
        return $articles;
    }

    function getArticleByID($id)
    {
        global $db;
        $stmt = $db->prepare("SELECT * FROM news JOIN users USING (username) WHERE id = $id");

        $stmt = $db->prepare('SELECT * FROM news JOIN users USING (username) WHERE id = :id');
        
        $stmt->execute();

        return $stmt->fetch();
    }
?>