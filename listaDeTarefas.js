//função
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
    botaoConclui.addEventListener('click', ()=> {
        console.log('Fui clicado');
    })

    return botaoConclui;

}

