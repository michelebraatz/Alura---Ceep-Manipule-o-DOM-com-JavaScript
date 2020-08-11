
import BotaoConclui from './Componentes/concluiTarefa.js'
import BotaoDeleta from './Componentes/deletaTarefa.js'
    
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


