//função
const criarTarefa = (evento) => {
    //evento
    evento.preventDefault();    

    //input
    const input = document.querySelector('[data-form-input]');
    //Capturando valor do input
    const valor = input.value;
    input.value = " "

    //preenchendo lista apos cadastrar novo item
    const tarefa = document.querySelector('[data-task]');
    //criando modelo parágrafo
    const conteudo = `<p class="content">${valor}</p>`
    //acessando valor da li e adicionando conteudo dentro dele        
    tarefa.innerHTML = conteudo
}

//button
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando evento
novaTarefa.addEventListener('click', criarTarefa);
