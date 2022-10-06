const btnCalculator4 = document.getElementById("calcular4").addEventListener('click', calcular_4);

function calcular_4() {
    const p1 = document.getElementById("#1").value
    const result = document.getElementById("result");

    if (p1 >= 100) {
        result.value = 55 * p1;
    }
    else if (p1 >= 50) {
        result.value = 65 * p1;
    }
    else if (p1 >= 30) {
        result.value = 90 * p1;
    }
    else if (p1 >= 0) {
        result.value = 5000;
    }
    else {
        alert("Verificar que el campo sea entero y mayor o igual a 0")
    }
}
