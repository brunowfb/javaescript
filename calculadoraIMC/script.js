function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value) / 100;
    var peso = parseFloat(document.getElementById("peso").value);
    var res = document.getElementById("res");

    var imc = peso / (altura ** 2);
    
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Você está abaixo do peso'
    } else if (imc < 24.9) {
        classificacao = 'Você está com peso normal'
    } else if (imc < 29.9) {
        classificacao = 'Você está com sobrepeso'
    } else if (imc < 39.9) {
        classificacao = 'Você está com obesidade'
    } else {
        classificacao = 'Você está com obesidade mórbida'
    }
    res.innerHTML = `<p class="imc-valor">IMC: ${imc.toFixed(2)}</p><p class="classificacap">(${classificacao})</p>`;

}


