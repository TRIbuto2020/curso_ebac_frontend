const form = document.getElementById('form-nums');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let formValido = false;

    const numA = document.getElementById('numA');
    const numB = document.getElementById('numB');

    let valA = parseInt(numA.value);
    let valB = parseInt(numB.value);
    
    const mensagemSucesso = `Sucesso! <b>${valB}</b> é maior que <b>${valA}</b>!`;
    const mensagemErro = `Erro! <b>${valB}</b> não é maior que <b>${valA}</b>!`;

    formValido = valB > valA;

    if (formValido){
        document.querySelector('p').style.display = 'block';
        document.querySelector('p').style.backgroundColor = '#27ae60';
        document.querySelector('p').innerHTML = mensagemSucesso;

        numA.style.color = '#27ae60';
        numB.style.color = '#27ae60';
        numA.style.border = '2px solid #27ae60';
        numB.style.border = '2px solid #27ae60';

    } else {
        
        document.querySelector('p').style.display = 'block';
        document.querySelector('p').style.backgroundColor = '#ae2727';
        document.querySelector('p').innerHTML = mensagemErro;

        numA.style.color = '#ae2727';
        numB.style.color = '#ae2727';
        numA.style.border = '2px solid #ae2727';
        numB.style.border = '2px solid #ae2727';
    }
});

form.addEventListener('reset', function(e){

    document.querySelector('p').style.display = 'none';
    numA.style = '';
    numB.style = '';
    
});