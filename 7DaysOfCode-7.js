function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: Divisão por zero não é permitida.";
    }
}
let operacao = "";
while (operacao !== "5") {
    operacao = prompt(`Bem-vindo à Calculadora!
Qual operação você deseja realizar?
    1. Soma
    2. Subtração
    3. Multiplicação
    4. Divisão
    5. Sair`);
    if (operacao === "5") {
        break;
    }
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let resultado;
    switch (operacao) {
        case "1":
            resultado = soma(valor1, valor2);
            alert(`O resultado da soma é: ${resultado}`);
            break;
        case "2":
            resultado = subtracao(valor1, valor2);
            alert(`O resultado da subtração é: ${resultado}`);
            break;
        case "3":
            resultado = multiplicacao(valor1, valor2);
            alert(`O resultado da multiplicação é: ${resultado}`);
            break;
        case "4":
            resultado = divisao(valor1, valor2);
            alert(`O resultado da divisão é: ${resultado}`);
            break;
        default:
            alert("Opção inválida. Por favor, tente novamente.");
            break;
        }
        }
alert("Até a próxima!");