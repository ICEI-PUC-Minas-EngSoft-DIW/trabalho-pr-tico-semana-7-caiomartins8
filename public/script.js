// dados iniciais
let nome = prompt("Qual é o seu nome?");

// função  para validar se a entrada é um número válido
function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor === "" || valor === null) {
        valor = prompt("Valor inválido! Por favor, digite um número:");
    }
    return Number(valor);
}

let renda = lerNumero(`Olá ${nome}, qual sua renda mensal?`);

let qtdDespesas = lerNumero("Quantas despesas deseja informar (mínimo 1, máximo 5)?");

// regra de limite entre 1 e 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// lançamento de despesas com for
let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = lerNumero(`Digite o valor da despesa ${i}:`);
    totalDespesas += valorDespesa;
}

// análise com if / else
let sobra = renda - totalDespesas;
let mensagemClassificacao = "";

if (totalDespesas > renda) {
    mensagemClassificacao = "Atenção: você gastou mais do que ganhou.";
} else {
    let margemSeguranca = renda * 0.3; // 30% da renda
    if (sobra >= margemSeguranca) {
        mensagemClassificacao = "Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "Ok: dá para melhorar a sobra.";
    }
}

// saída final
let resultadoFinal = `
--- RESUMO DO ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
---------------------------
Status: ${mensagemClassificacao}
`;

// Exibição
alert(resultadoFinal);
console.log(resultadoFinal);