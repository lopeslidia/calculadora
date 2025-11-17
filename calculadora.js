//arquivo
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Calculadora de Subtração ===");

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {

        let resultado = parseFloat(num1) - parseFloat(num2);
        console.log("Resultado da subtração:", resultado);

        rl.close();
    });
});