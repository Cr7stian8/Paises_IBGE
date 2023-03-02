const dados = document.getElementById("resultado")

function mostrarDados(pais) {
    const dados = document.getElementById("resultado")
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}`)
        .then(response => response.json())
        // comentar a linha abaixo para ver o objeto
        // .then(data => console.log(data))
        .then(data => {
            const paisNome = document.createElement("h2")
            const nome = data[0].nome.abreviado
            paisNome.textContent = nome

            const lingua = document.createElement("p")
            const linguaString = data[0].linguas[0].nome
            lingua.textContent = `Lingua falada: ${linguaString} `

            const area = document.createElement("p")
            const areaString = data[0].area.total
            area.textContent = `Área: ${areaString} m²`

            const continente = document.createElement("p")
            const continenteString = data[0].localizacao.regiao.nome
            continente.textContent = `Continente: ${continenteString} `

            const subRegiao = document.createElement("p")
            const subRegiaoString = data[0].localizacao['sub-regiao'].nome
            subRegiao.textContent = `Sub-Região: ${subRegiaoString} `

            const regiaoIntermediaria = document.createElement("p")
            const regiaoIntermediariaString = data[0].localizacao['regiao-intermediaria'].nome
            regiaoIntermediaria.textContent = `Regiao-Intermediaria: ${regiaoIntermediariaString} `

            // remover os elementos HTML antigos antes de inserir os novos
            dados.innerHTML = ""

            // inserir os elementos HTML no elemento #resultado
            dados.appendChild(paisNome)
            dados.appendChild(lingua)
            dados.appendChild(area)
            dados.appendChild(continente)
            dados.appendChild(subRegiao)
            dados.appendChild(regiaoIntermediaria)
        })
        .catch(error => console.error("Apareceu esse erro aqui, se vira" ,error))
}