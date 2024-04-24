// Função para atualizar o texto do tempo decorrido
function atualizarTempoDecorrido(dias, horas, minutos) {
    const anos = Math.floor(dias / 365); // Calcular anos
    const semanas = Math.floor((dias % 365) / 7); // Calcular semanas
    const diasRestantes = dias % 7; // Dias restantes

    // Formatar o texto
    const textoTempoDecorrido = `Ou seja: ${anos} ano, ${semanas} semana(s) e ${diasRestantes} dia(s).`;

    // Atualizar o elemento HTML com o texto
    document.getElementById('tempoDecorrido').textContent = textoTempoDecorrido;
}

// Defina a data de referência
const dataDeReferencia = new Date('2023-04-12T16:00:00Z');


// Função para atualizar o timer
function atualizarTimer() {
    const agora = new Date();
    const diferenca = agora - dataDeReferencia;

    // Converter a diferença de milissegundos para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizar os elementos HTML com o tempo decorrido
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    // Atualizar o texto de tempo decorrido
    atualizarTempoDecorrido(dias, horas, minutos);
}

const scrollToBottomButton = document.getElementById('scrollToBottomButton');

// Adicione um ouvinte de evento de clique ao botão
scrollToBottomButton.addEventListener('click', function() {
    // Role a página até o final
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Adiciona uma animação de rolagem suave
    });
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});

// Chamar a função inicialmente e a cada segundo
atualizarTimer();
setInterval(atualizarTimer, 1000);
