function gerar(){
    let texto = window.document.getElementById('res');
    let tipos = ["tentáculos", "monstro", "cavalo", "largato", "normal", "lobisomem"]
    let tiposTxt = Math.floor(Math.random() * tipos.length)
    let tam = Math.floor(Math.random() * 34) + 1
    texto.innerHTML = (`Seu tamanho de dildo ideal é de ${tam} cm, em formato de ${tiposTxt, tipos[tiposTxt]}`)

}