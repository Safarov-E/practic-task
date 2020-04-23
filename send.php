<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/panda.css">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>Panda Tetris</title>
</head>

<body>
    <div class="container">
        <header>
            <h1 class="text-center"><a href="/">
                Panda Tetris
                </a>
            </h1>
        </header>
        <div class="main">
            <?php
                require_once 'config.php';
                require_once 'function.php';

                $username = checkData($_POST['username']);
                $score = checkData($_POST['score']);

                if ($score && $username) {

                $conn = mysqli_connect(SERVERNAME, USER, PASS, DBNAME);

                // Check connection
                if (!$conn) {
                    die("Connection failed: " . mysqli_connect_error());
                }

                $sql = "INSERT INTO score (username, score, data) VALUES ('".$username."', ".$score.", ".time().")";

                if (mysqli_query($conn, $sql)) {
                    echo "Ваш результат записан!";
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }

                mysqli_close($conn);
            }
            else {
                echo '<h3 class="text-center warning">Введите имя!</h3>';
                echo '<div class="back"><a href="/">&larr;Назад</a></div>';
            }
            
            ?>
        </div>
    </div>


    <script src="js/panda.js"></script>
</body>

</html>