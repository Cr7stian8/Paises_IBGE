// mudando tela para o resultado
const resultado = document.getElementById("resultado")
const voltar = document.getElementById("voltar")
const nav = document.getElementById("navbar")
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
    nav.style.display= 'none'
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
    nav.style.display = "flex"
}