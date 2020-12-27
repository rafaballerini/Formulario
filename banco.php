<?php 
    $host = "localhost";
    $user = "root";
    $senha = "";
    $db = "formulario";

    $conexao = new mysqli($host,$user,$senha,$db);

    if(mysqli_connect_errno()) trigger_error(mysqli_connect_errno());

    echo mysqli_connect_error();


?>