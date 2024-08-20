function exibirPaginadeCadastro(request, response) {
    response.render('cadastro');
}

function criarConta(request, response){
    console.log(request.body);
}

module.exports = {
    exibirPaginadeCadastro,
    criarConta
}