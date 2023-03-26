const dados = document.getElementById("resultado")
const paisesA = ['AF', 'ZA', 'AL', 'DE', 'AD', 'AO', 'AG', 'SA', 'DZ', 'AR', 'AM', 'AU', 'AT', 'AZ']

//
// criar um array com as informações das bandeiras
const a1 = [
    { pais: "AF", bandeira: "assets/bandeiras/afeganistao.svg" },
    { pais: "ZA", bandeira: "assets/bandeiras/africaSul.svg" },
    { pais: "AL", bandeira: "assets/bandeiras/albânia.svg" },
    { pais: "DE", bandeira: "assets/bandeiras/alemanha.svg" },
    { pais: "AO", bandeira: "assets/bandeiras/andorra.svg" },
    { pais: "AG", bandeira: "assets/bandeiras/angola.svg" },
    { pais: "SA", bandeira: "assets/bandeiras/barbuda.svg" },
    { pais: "DZ", bandeira: "assets/bandeiras/arabia.svg" },
    { pais: "AR", bandeira: "assets/bandeiras/argelia.svg" },
    { pais: "AM", bandeira: "assets/bandeiras/armenia.svg" },
    { pais: "AU", bandeira: "assets/bandeiras/australia.svg" },
    { pais: "AT", bandeira: "assets/bandeiras/austria.svg" },
    { pais: "AZ", bandeira: "assets/bandeiras/azerbaijao.svg" },
];

// função para criar os elementos HTML das bandeiras e adicionar eventos de clique
function criarBandeiras(letra,array) {
    const bandeirasDiv = document.getElementById(letra);

    array.forEach(bandeira => {
        const bandeiraDiv = document.createElement("div");
        bandeiraDiv.className = "bandeira";

        const link = document.createElement("a");
        link.onclick = () => {
            esconderBandeiras();
            mostrarDados(bandeira.pais);
        }

        const img = document.createElement("img");
        img.src = bandeira.bandeira;

        link.appendChild(img);
        bandeiraDiv.appendChild(link);
        bandeirasDiv.appendChild(bandeiraDiv);
    });
}

// chame a função para criar as bandeiras
criarBandeiras('a1',a1);


//
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
                botaoHistoria.onclick = () => mostraHistoria(data)
                dados.appendChild(botaoHistoria)
            } catch (error) {
                console.log("erro com o botão da história")
            }

            try {
                const capital = document.createElement("p")
                const capitalString = data[0].governo.capital.nome
                capital.textContent = `Capital: ${capitalString}`
                dados.appendChild(capital)
            } catch {
                console.log("Não foi possível encontrar a capital")
            }
            try {
                const lingua = document.createElement("p")
                const linguaString = data[0].linguas[0].nome
                lingua.textContent = `Lingua falada: ${linguaString}`
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
                subRegiao.textContent = `Sub-Região: ${subRegiaoString}`
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
function mostraHistoria(data) {
    // limpando tela
    resultado.innerHTML = ""
    try {
        const paisNome = document.createElement("h2")
        const nome = data[0].nome.abreviado
        paisNome.textContent = `história - ${nome}`
        dados.appendChild(paisNome)
    } catch {
        console.log("erro no nome do país")
    }
    // nome do pais
    try {
        const historia = document.createElement("p")
        const historiaString = data[0].historico
        historia.textContent = historiaString
        historia.id = "textoHistoria"
        const sectionR = document.getElementById("resultado")
        sectionR.appendChild(historia)
    } catch {
        alert("deu ruim")
    }
}