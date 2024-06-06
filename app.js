 let listaDeNumerosSortedos = [];
 let  numeroLimite = 10 ;   
 let numeroSecreto = gerarNumeroAleatorio ();
 let tentativas = 1; 
 //essa função exibi coisas, faz algo, mas ela não retorna informação. tem pararemetros 
 function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
 }

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial();

//esssa função não tem parametro e não tem retorno. 
function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertoooou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior!');

        }
        tentativas++;
        limparCampo();
    }
    
}
// esssa função não tem nenhum parametro mas ela tem retorno de um número aleatório. 
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1 );
    let quantidadeDeElementosDaLista = listaDeNumerosSortedos.length;

    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumerosSortedos = []
    }
 

    if (listaDeNumerosSortedos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSortedos.push(numeroEscolhido);
        console.log(listaDeNumerosSortedos);
        return numeroEscolhido;
    }
}



function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}
 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true)


 }