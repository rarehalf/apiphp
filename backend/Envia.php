<?php

$postdata = file_get_contents("php://input");


if(isset($postdata) && $postdata != "") {
    $data = json_decode($postdata);

    $cpf = $data->cpf;

    if($cpf != ""){
        $token = base64_encode($cpf);

        http_response_code(200);
        echo json_encode([
            'msg' => "token gerado com sucesso",
            'token' => $token,
        ]);
    }else{
        http_response_code(400);
        echo json_encode([
            'CPF não informado',
        ]);
    }
}


