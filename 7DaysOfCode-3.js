//ESCOLHA SUA AREA
const area = prompt("Olá! Qual área de programação você que ir? Digite 'Front-End' ou 'Back-End'.");

let tecnologia = "";
if (area === "Front-End") {
    tecnologia = prompt("Que Massa! E qual framework você quer aprender? Digite 'React' ou 'Vue'.");
} else if (area === "Back-End") {
    tecnologia = prompt("Excelente! Em qual linguagem você quer aprender? Digite 'C#' ou 'Java'.");
} else {
    alert("Lascou Não achei essa, recarregue a página e tente de novo.");
}

//TEM QUE TER ESCOLHIDO ALGO NA AREA DA TECNOLOGIA
if (area) {
    const especializacao = prompt(`Você quer (1) seguir se especializando em ${area} ou (2) se desenvolver para se tornar Fullstack? Digite o número da sua opção.`);

    if (especializacao == 1) {
        alert(`Parabéns! Continue neste caminho ${tecnologia} para se tornar um bom em ${area}. O mercado precisará de você!`);
    } else if (especializacao == 2) {
        alert(`Que bom! Para ser Fullstack, é bom dominar ${tecnologia} e depois ver as tecnologias de outras áreas. Bons estudos!`);
    } else {
        alert("Opção não encontrada.");
    }
    let maisTecnologias = "sim";
    while (maisTecnologias.toLowerCase() === "sim") {
        const novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite o nome.");

       //o usuário escreveu algo mostre esta msg
        if(novaTecnologia) {
            alert(`${novaTecnologia} Boa escolha! Anotado.`);
        }
        //aqui repete
        maisTecnologias = prompt("Gostaria de listar mais alguma area? Digite 'sim' para continuar.");
    }
}

alert("Sua jornada de escolhas terminou por aqui. Sucesso nos seus estudos!");