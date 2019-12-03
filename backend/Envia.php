<?php

$postdata = file_get_contents("php://input");

$data = json_decode($postdata);

$cpf = $data->cpf;

echo json_encode([
    'msg' -> 'token gerado com sucesso',
    'token' -> 'TOKEN'
]);