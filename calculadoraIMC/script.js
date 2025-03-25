function calcularIMC() {
    var altura = (document.getElementById("altura").value) / 100
    var peso = document.getElementById("peso").value


    var imc = peso / altura ** 2;
    if (imc < 18.5) {
        res.innerHTML = "<p>Você está abaixo do peso</p>"
    } else if (imc < 24.9) {
        res.innerHTML = "<p>Você está com peso norma</p>l"
    } else if (imc < 29.9) {
        res.innerHTML = "<p>Você está com sobrepeso</p>"
    } else if (imc < 39.9) {
        res.innerHTML = "<p>Você está com obesidade</p>"
    } else if (imc > 39.9) {
        res.innerHTML = "<p>Você está com obesidade mórbida</p>"
    }

}


