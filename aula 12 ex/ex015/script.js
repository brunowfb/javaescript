function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
        
        
    }
}