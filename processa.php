<?php 
    include 'banco.php';

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email =  $_POST['email'];
$devweb = $_POST['devweb'];
$senioridade = $_POST['senioridade'];
$experiencia = $_POST['experiencia'];


$nome = $nome.' '. $sobrenome; 

$sql = "INSERT INTO `devs` (`id_dev`, `nome`, `email`, `funcao`, `grau`, `experiencia`) VALUES (NULL, '$nome', '$email', '$devweb', '$senioridade', '$experiencia');";

if($conexao ->query($sql) == true){
    echo "<h3> Deu certo </h3>";
}else{
    echo "<h3> Deu tudo errado </h3>";
    echo "Error: " . $sql . "<br>" . $conexao->error;
};
