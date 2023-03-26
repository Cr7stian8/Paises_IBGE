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
const b1 = [
    {pais: "BS", bandeira: "assets/bandeiras/bahamas.svg"},
    {pais: "BD", bandeira: "assets/bandeiras/bangladesh.svg"},
    {pais: "BB", bandeira: "assets/bandeiras/barbados.svg"},
    {pais: "BH", bandeira: "assets/bandeiras/barein.svg"},
    {pais: "BY", bandeira: "assets/bandeiras/belarus.svg"},
    {pais: "BE", bandeira: "assets/bandeiras/belgica.svg"},
    {pais: "BZ", bandeira: "assets/bandeiras/belize.svg"},
    {pais: "BJ", bandeira: "assets/bandeiras/benin.svg"},
    {pais: "BO", bandeira: "assets/bandeiras/bolivia.svg"},
    {pais: "BA", bandeira: "assets/bandeiras/bosnia.svg"},
    {pais: "BW", bandeira: "assets/bandeiras/botsuana.svg"},
    {pais: "BR", bandeira: "assets/bandeiras/brasil.svg"},
    {pais: "BN", bandeira: "assets/bandeiras/brunei.svg"},
    {pais: "BG", bandeira: "assets/bandeiras/bulgaria.svg"},
    {pais: "BF", bandeira: "assets/bandeiras/burkina.svg"},
    {pais: "BI", bandeira: "assets/bandeiras/burundi.svg"},
    {pais: "BT", bandeira: "assets/bandeiras/butao.svg"},
]
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
criarBandeiras('b1',b1);