<?php
 require_once 'config.php';

 $conn = mysqli_connect(SERVERNAME, USER, PASS, DBNAME);
 mysqli_set_charset($conn, 'utf8');

$sql = "SELECT * FROM score ORDER BY score DESC LIMIT 20";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $out = '<ol>';
    while($row = $result->fetch_assoc()) {
        $out .='<li><b>'.$row['score'].'</b> '.$row['username'].'</li>';
    }
    $out .= '</ol>';
    echo $out;
} else {
    echo "Пока ничего нет!";
}
$conn->close();