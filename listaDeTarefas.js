//função
const criarTarefa = (evento) => {
    //evento
    evento.preventDefault();    

    //input
    const input = document.querySelector('[data-form-input]');
    //Capturando valor do input
    const valor = input.value;
    
    console.log (valor)
    input.value = " "
}

//button
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando evento
novaTarefa.addEventListener('click', criarTarefa);
