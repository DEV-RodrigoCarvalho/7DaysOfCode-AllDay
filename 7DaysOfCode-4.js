const min = 0;
const max = 10;
const numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min);

const totalTentativas = 3;
let acertou = false; 
// 2 tentativa 
for (let tentativa = 1; tentativa <= totalTentativas; tentativa++) {
    // chute
    const chute = prompt(`Tentativa ${tentativa} de ${totalTentativas}. Chute um número entre ${min} e ${max}:`);
    const chuteNumero = parseInt(chute);

    if (chuteNumero === numeroSecreto) {
        alert(`Parabéns! Você acertou! O número era ${numeroSecreto}.`);
        acertou = true;
        break; //PARAD SE ACERTOU
    } else {
        const dica = chuteNumero > numeroSecreto ? "menor" : "maior";
        if(tentativa < totalTentativas) {
             alert(`Você errou! O número secreto é ${dica} que ${chuteNumero}. Tente novamente.`);
        }
    }
}
if (!acertou) {
    alert(`Que pena, suas tentativas acabaram. O número secreto era ${numeroSecreto}.`);
}