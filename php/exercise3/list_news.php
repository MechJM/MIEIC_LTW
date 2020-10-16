<!DOCTYPE html>
<html lang="PT-pt">
    <head>
        <title>SQLite</title>
    </head>
    <body>
        <?php
            $db = new PDO("sqlite:news.db");
            $stmt = $db->prepare("SELECT news.*, users.*, COUNT(comments.id) AS comments
            FROM news JOIN
                 users USING (username) LEFT JOIN
                 comments ON comments.news_id = news.id
            GROUP BY news.id, users.username
            ORDER BY published DESC
            ");
            $stmt->execute();
            $articles = $stmt->fetchAll();

            foreach( $articles as $article)
            {
                echo "<article>";
                echo "<header>";
                echo "<h1>" . $article["title"] . "</h1>";
                echo "</header>";
                echo "<p>" . $article["introduction"] ."</p>";
                echo "<p>" . $article["fulltext"] . "</p>";
                echo "<footer>";
                echo '<span class="author">';
                echo $article["username"];
                echo "</span>";
                echo "</footer>";
                echo "</article>";
            }
            
        ?>
    </body>
</html>