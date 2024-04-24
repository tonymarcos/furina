
function atualizarTempoDecorrido(dias, horas, minutos) {
    const anos = Math.floor(dias / 365); 
    const semanas = Math.floor((dias % 365) / 7); 
    const diasRestantes = dias % 7; 


    const textoTempoDecorrido = `Ou seja: ${anos} ano, ${semanas} semana(s) e ${diasRestantes} dia(s).`;

    
    document.getElementById('tempoDecorrido').textContent = textoTempoDecorrido;
}

// Defina a data de referência
const dataDeReferencia = new Date('2023-04-12T16:00:00Z');



function atualizarTimer() {
    const agora = new Date();
    const diferenca = agora - dataDeReferencia;

    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    
    atualizarTempoDecorrido(dias, horas, minutos);
}

const scrollToBottomButton = document.getElementById('scrollToBottomButton');


scrollToBottomButton.addEventListener('click', function() {
    
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
    });
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

atualizarTimer();
setInterval(atualizarTimer, 1000);
