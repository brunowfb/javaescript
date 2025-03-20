function calcularIMC() {
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value
    
   
    var imc = peso / altura ** 2;
    if(imc<18.5){
        window.alert(" Você está abaixo do peso")
    } else if(imc<24.9){
        window.alert(" Você está com peso normal")
    } else if(imc<29.9){
        window.alert("Você está com sobrepeso")
    } else if(imc<39.9){
        window.alert("Você está com obesidade")
    } else if(imc>39.9) {
        window.alert("Você está com obesidade mórbida")
    }

}


