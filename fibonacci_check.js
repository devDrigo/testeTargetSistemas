function isFibonacci(n) {
    let a = 0;
    let b = 1;
    
    while (b < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return b === n || n === 0;
}

const number = parseInt(prompt("Informe um número para verificar se está na sequência de Fibonacci:"));
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
