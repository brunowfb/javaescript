function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'imagens/manha-p.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'imagens/tarde-p.png'
    document.body.style.background = '#b9846f'
} else {
    //BOA NOITE!
    img.src = 'imagens/noite-p.png'
    document.body.style.background = '#515154'
}
}