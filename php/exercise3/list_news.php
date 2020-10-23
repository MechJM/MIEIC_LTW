<!DOCTYPE html>
<html lang="PT-pt">
    <head>
        <title>SQLite</title>
    </head>
    <body>
        <?php
            include_once("../database/connection.php");
            include_once("../database/news.php");
            $articles = getAllNews();

            foreach( $articles as $article)
            {
                echo "<article>";
                echo "<header>";
                echo "<h1>" ; 
                ?>
                <a href="news_item.php?id=<?=$article["id"]?>"><?=$article["title"]?></a>
                <?php
                echo "</h1>";
                echo "</header>";
                echo "<p>" . $article["introduction"] ."</p>";
                $article_text_array = explode("\n",$article["fulltext"]);
                foreach( $article_text_array as $paragraph)
                {
                    echo "<p>" . $paragraph . "</p>";
                }
                echo "<footer>";
                echo '<span class="author">';
                echo $article["username"];
                echo "</span>";
                echo '<span class="tags">';
                $tags = explode(",",$article["tags"]);
                foreach($tags as $tag)
                {
                    echo ' <a href="index.html">'. $tag . '</a>';
                }
                echo "</span>";
                echo ' <span class="date">';
                echo date("d-m-Y", $article["published"]);
                echo "</span>";
                ?>
                <a class="comments" href="news_item.php?id=<?=$article["id"]?>#comments"><?=$article["comments"]?></a>
                
                <?php
                //echo ' <a class="comments" href="news_item.html#comments">' . $article["comments"] . '</a>';
                echo "</footer>";
                echo "</article>";
            }
            
        ?>
    </body>
</html>