let listaDeCompras = { //sequencia 
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
};
let adicionarMais = "sim"; 
while (adicionarMais.toLowerCase() !== "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na sua lista de compras? (sim/não)");
    if (adicionarMais.toLowerCase() !== "sim") {
        break;
    }
    let item = prompt("Qual comida você deseja inserir?");
    let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, outros)");
    if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(item);
    } else {
        alert("Categoria não encontrada. O item será adicionado em 'outros'.");
        listaDeCompras.outros.push(item);
    }
}
console.log("--- Lista de Compras ---");
for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        console.log(`    ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(', ')}`);
    } else {
        console.log(`    ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: (vazio)`);
    }
}