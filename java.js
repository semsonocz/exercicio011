const form = document.getElementById('form-numeros');


function campoMaior() {
    let campoA = document.getElementById('numero1');
    let campoB = document.getElementById('numero2');
    if(campoA < campoB){
        return true
    }
        return false
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero1');
    const numeroB = document.getElementById('numero2');
    const sucessMesg = (`O Campo A: ${numeroA.value} é menor que o Campo B: ${numeroB.value}`);


formEValido = campoMaior(numeroB.value);
if(formEValido) {
    const containnerMsgSucess = document.querySelector('.sucess-message');
    containnerMsgSucess.innerHTML = sucessMsg;
    containnerMsgSucess.style.display = 'block';

    numeroA.value = '';
    numeroB.value = '';
}
});