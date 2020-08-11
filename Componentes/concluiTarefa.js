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