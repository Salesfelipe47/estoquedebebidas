function filtrar() {
    const TABELA = document.getElementById('tabela-dados');

    TABELA.innerHTML = '';

let palavra =  busca.value.toLowerCase();

let resultado = bebidas.filter (function (cada) {
    let nomeBebidas = cada.nome.toLowerCase();

    let descricao = cada.descricao.toLowerCase();

    let quantidade = cada.quantidade.toString();


    return nomeBebidas.includes(palavra) || descricao.includes(palavra) || quantidade.includes(palavra);

    
        
    });
    atualizarTabela(resultado);
}




