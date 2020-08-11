//função deletar
const BotaoDeleta = (evento) => {
    //criar botão deleta
    const botaoDeleta = document.createElement('button');

    //colocar nome no botão
    botaoDeleta.innerHTML = 'Deletar' 
    
    //evento click e função
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
                
}
// deletar
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta;
}

export default BotaoDeleta;