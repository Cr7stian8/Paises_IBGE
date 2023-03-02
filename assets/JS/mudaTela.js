// mudando tela para o resultado
const resultado = document.getElementById("resultado")
const voltar = document.getElementById("voltar")
resultado.style.display = "none"
voltar.style.display = "none"

function esconderBandeiras(){
    var section = document.getElementsByClassName("bandeiras")
    var i
    for (i = 0; i < section.length; i++) {
        section[i].style.display = 'none'
    }
    resultado.style.display = "block"
    voltar.style.display = "block"
}
function mostrarBandeiras(){
    var section = document.getElementsByClassName("bandeiras")
    var i
    for (i = 0; i < section.length; i++) {
        section[i].style.display = "block"
        section[i].style.flexWrap = "wrap"
    }
    resultado.style.display = "none"
    voltar.style.display = "none"
}