<!DOCTYPE html>
<html lang="PT-pt">
    <head>
        <title>Database connection</title>
    </head>
    <body>
        <?php
            $db = new PDO("sqlite:news.db");
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        ?>
    </body>
</html>
