//criando um componente do botão

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    //adicionando class ao botao check
    botaoConclui.classList.add('check-button');
     
    //adicionando texto ao botão check
    botaoConclui.innerText = 'concluir';


    //evento click
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

    //função criar tarefa
    
    const concluirTarefa = (evento) => {
        //descobre qual elemento foi clicado atraves do target
        const botaoConclui = evento.target
        
        //pegou o pai do elemento botão li
        const tarefaCompleta = botaoConclui.parentElement
        
        //efeito de rabisco na li
        tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;

