const dados = document.getElementById("resultado")

function mostrarDados(pais) {
    const dados = document.getElementById("resultado")
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}`)
        .then(response => response.json())
        // comentar a linha abaixo para ver o objeto
        // .then(data => console.log(data))
        .then(data => {
            // remover os elementos HTML antigos antes de inserir os novos
            dados.innerHTML = ""
            try {
                const paisNome = document.createElement("h2")
                const nome = data[0].nome.abreviado
                paisNome.textContent = nome
                dados.appendChild(paisNome)
            } catch {
                console.log("erro no nome do país")
            }
            try {
                const botaoHistoria = document.createElement("button")
                botaoHistoria.textContent = "ver história"
                botaoHistoria.id = "botaoHistoria"
                botaoHistoria.onclick =
                dados.appendChild(botaoHistoria)
            } catch (error) {
                console.log("erro com o botão da história")
            }

            try{
                const capital = document.createElement("p")
                const capitalString = data[0].governo.capital.nome
                capital.textContent = `Capital: ${capitalString}`
                dados.appendChild(capital)
            }catch{
                console.log("Não foi possível encontrar a capital")
            }
            try {
                const lingua = document.createElement("p")
                const linguaString = data[0].linguas[0].nome
                lingua.textContent = `Lingua falada: ${linguaString} `
                dados.appendChild(lingua)
            } catch {
                console.log("erro na lingua do país")
            }
            try {
                const area = document.createElement("p")
                const areaString = data[0].area.total
                area.textContent = `Área: ${areaString} km²`
                dados.appendChild(area)
            } catch {
                console.log("erro na área do país")
            }
            try {
                const continente = document.createElement("p")
                const continenteString = data[0].localizacao.regiao.nome
                continente.textContent = `Continente: ${continenteString} `
                dados.appendChild(continente)
            } catch {
                console.log("erro no continente")
            }
            try {
                const subRegiao = document.createElement("p")
                const subRegiaoString = data[0].localizacao['sub-regiao'].nome
                subRegiao.textContent = `Sub-Região: ${subRegiaoString} `
                dados.appendChild(subRegiao)
            }
            catch {
                console.log("erro na subregião")
            }
            try {
                const regiaoIntermediaria = document.createElement("p")
                const regiaoIntermediariaString = data[0].localizacao['regiao-intermediaria'].nome
                regiaoIntermediaria.textContent = `Regiao-Intermediaria: ${regiaoIntermediariaString} `
                dados.appendChild(regiaoIntermediaria)
            } catch {
                console.log("erro na regiãoIntermediaria")
            }
        })
        .catch(error => console.error("Apareceu esse erro aqui, se vira", error))
}