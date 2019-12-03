
function validar(event) {

    let cpf = formulario.cpf.value;

    if (cpf === "") {
        console.log('Preencha o campo com seu CPF');
        alert('Preencha o campo com seu CPF');
        formulario.cpf.focus();
        return false;
    }
    
    else if (cpf.length < 11){
        console.log('CPF incompleto!');
        alert('CPF incompleto!');
        formulario.cpf.focus();
        return false;
    }
    
     else if(cpf.length > 11){
        console.log('CPF possui onze números!');
        alert('CPF possui onze números!');
        formulario.cpf.focus();
        return false;
    }
    
    function enviar() {
        

    let dados = {
        cpf: formulario.cpf.value
    }

    fetch('Envia.php', {
        method: 'post',
        body: JSON.stringify(dados)
    })
    .then((response) => response.json())
    .then((dados) => {
        console.log(dados)
    })
}
}

