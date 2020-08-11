//função de execução imediata - utilizando dessa forma não aparece mais no escopo global, somente no escopo dessa função
(() => { 
    
    const criarTarefa = (evento) => {
    //evento
    evento.preventDefault();    

    //lista - buscando elemento da ul
    const lista = document.querySelector('[data-list]');
    
    //input
    const input = document.querySelector('[data-form-input]');
    
    //Capturando valor do input
    const valor = input.value;

    //Criando li
    const tarefa = document.createElement('li');

    //acessar class para o elemento li
    tarefa.classList.add('task');
   
    //criando modelo parágrafo
    const conteudo = `<p class="content">${valor}</p>`  

    tarefa.innerHTML = conteudo;

    //adicionando elemento botao
    tarefa.appendChild(BotaoConclui());

    //adicionando o elemento dentro do elemento pai quue é o li
    tarefa.appendChild(BotaoDeleta());    

    //adicionando elemento dentro do outro, li dentro de ul.
    lista.appendChild(tarefa);
    
    //Limpa o input
    input.value = " ";
}

//button
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando evento
novaTarefa.addEventListener('click', criarTarefa);

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
})

// indica para o navegador que está utilizando a função dentro dela
()

