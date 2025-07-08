// Função para calcular saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base no saldo
function determinarNivel(saldo) {
    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo <= 20) {
        return "Bronze";
    } else if (saldo <= 50) {
        return "Prata";
    } else if (saldo <= 80) {
        return "Ouro";
    } else if (saldo <= 90) {
        return "Diamante";
    } else if (saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Molde do objeto de personagem
function criarPersonagem(nome, vitorias, derrotas) {
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldo);

    return {
        nome: nome,
        vitorias: vitorias,
        derrotas: derrotas,
        saldo: saldo,
        nivel: nivel,
        exibirStatus: function() {
            console.log(`O jogador ${this.nome} tem um saldo de ${this.saldo} e está no nível ${this.nivel}.`);
        }
    };
}

// Exemplo de uso:
const jogador1 = criarPersonagem("Rondinele", 75, 20);
jogador1.exibirStatus();
