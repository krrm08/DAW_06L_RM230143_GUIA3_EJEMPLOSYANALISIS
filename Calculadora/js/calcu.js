document.addEventListener("DOMContentLoaded", function() {
    const btnSuma = document.getElementById('btnSuma');
    const btnResta = document.getElementById('btnResta');
    const btnMulti = document.getElementById('btnMulti');
    const btnDivi = document.getElementById('btnDivi');
    const btnPorcen = document.getElementById('btnPorcen');
    const btnInversa = document.getElementById('btnInversa');
    const btnCuadrado = document.getElementById('btnCuadrado');
    const btnRaiz = document.getElementById('btnRaiz');
    
    btnSuma.addEventListener('click', function() { calculate('+') });
    btnResta.addEventListener('click', function() { calculate('-') });
    btnMulti.addEventListener('click', function() { calculate('*') });
    btnDivi.addEventListener('click', function() { calculate('/') });
    btnPorcen.addEventListener('click', function() { calculate('%') });
    btnInversa.addEventListener('click', function() { calculate('inv') });
    btnCuadrado.addEventListener('click', function() { calculate('square') });
    btnRaiz.addEventListener('click', function() { calculate('sqrt') });

    function calculate(operation) {
        const numInput1 = document.getElementById('numInput1');
        const numInput2 = document.getElementById('numInput2');
        const resultOutput = document.getElementById('resultado');

        const num1 = parseFloat(numInput1.value);
        const num2 = parseFloat(numInput2.value);

        let resultado;
        switch (operation) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultado = 'Error: División por cero';
                } else {
                    resultado = num1 / num2;
                }
                break;
            case '%':
                resultado = num1 % num2;
                break;
            case 'inv':
                resultado = 1 / num1;
                break;
            case 'square':
                resultado = num1 * num1;
                break;
            case 'sqrt':
                resultado = Math.sqrt(num1);
                break;
            default:
                resultado = 'Operación no válida';
        }

        resultOutput.textContent = `Resultado: ${resultado}`;
    }
});
