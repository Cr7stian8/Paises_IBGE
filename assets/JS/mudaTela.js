// mudando tela para o resultado
const resultado = document.getElementById("resultado")
const voltar = document.getElementById("voltar")
resultado.style.display = "none"
voltar.style.display = "none"


function esconderBandeiras(){
    const section = document.getElementById("bandeiras")
    section.style.display = "none"
    resultado.style.display = "block"
    voltar.style.display = "block"
}
function mostrarBandeiras(){
    const section = document.getElementById("bandeiras")
    section.style.display = "block"
    section.style.flexWrap = "wrap"
    resultado.style.display = "none"
    voltar.style.display = "none"
}