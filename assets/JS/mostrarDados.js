const dados = document.getElementById("resultado")

function mostrarDados(pais) {
    const dados = document.getElementById("resultado")
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}`)
        .then(response => response.json())
        .then(data => {
            const paisNome = document.createElement("h2")
            paisNome.textContent = data.nome

            const capital = document.createElement("p")
            capital.textContent = `Capital: ${data.capital}`

            const populacao = document.createElement("p")
            populacao.textContent = `População: ${data.populacao}`

            // remover os elementos HTML antigos antes de inserir os novos
            dados.innerHTML = ""

            // inserir os elementos HTML no elemento #resultado
            dados.appendChild(paisNome)
            dados.appendChild(capital)
            dados.appendChild(populacao)
        })
        .catch(error => console.error(error))
}

