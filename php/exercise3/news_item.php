<!DOCTYPE html>
<html lang="PT-pt">
    <head>
        <title>SQLite</title>
    </head>
    <body>
        <?php
            include_once("../database/connection.php");
            include_once("../database/news.php");
            
            $article = getArticleByID($_GET["id"]);
             ?>
             <article>
                <header>
                <h1><?=$article["title"]?></h1>
                </header>
                <p><?=$article["introduction"]?></p>
                <p><?=explode("\n",$article["fulltext"])[0]?></p>
                <p><?=explode("\n",$article["fulltext"])[1]?></p>
                <footer>
                <span class="author"><?=$article["username"]?></span>
                <span class="tags"><a href="index.html">#<?=explode(",",$article["tags"])[0]?></a> <a href="index.html">#<?=explode(",",$article["tags"])[1]?></a></span>
                <span class="date"><?=date("d-m-Y",$article["published"])?></span>
                <a class="comments" href="item.html#comments">5</a>
                </footer>
            </article>
            <section id="comments">
                <h2>Comments</h2>
                <?php
                    $stmt = $db->prepare('SELECT * FROM comments JOIN users USING (username) WHERE news_id = ?');
                    $stmt->execute(array($_GET['id']));
                    $comments = $stmt->fetchAll();

                    foreach($comments as $comment)
                    {
                    ?>
                        <h3><?=$comment["username"]?></h3>
                        <span><?=date("d-m-Y",$comment["published"])?></span>
                        <p><?=$comment["text"]?></p>
                    <?php
                    }
                ?>
            </section>
    </body>
</html>