const readline = require('readline');

// Criar uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para determinar o nível do jogador baseado na quantidade de vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função para calcular o saldo de vitórias e determinar o nível
function calcularSaldo(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = determinarNivel(vitorias);
    return { saldoVitorias, nivel };
}

// Função principal para interagir com o usuário
function iniciarCalculadora() {
    const loopCalculadora = () => {
        rl.question("Digite a quantidade de vitórias: ", (vitoria) => {
            rl.question("Digite a quantidade de derrotas: ", (derrota) => {
                const vitorias = parseInt(vitoria);
                const derrotas = parseInt(derrota);

                // Calculando saldo e nível
                const { saldoVitorias, nivel } = calcularSaldo(vitorias, derrotas);
                console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}.`);

                // Pergunta se deseja continuar
                rl.question("Deseja calcular novamente? (s/n): ", (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        loopCalculadora(); // Chama a função novamente
                    } else {
                        rl.close(); // Fecha a interface de leitura
                    }
                });
            });
        });
    };

    loopCalculadora(); // Iniciar o loop de cálculo
}

// Iniciar a calculadora de partidas ranqueadas
iniciarCalculadora();
