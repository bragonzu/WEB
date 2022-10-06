const btnCalculator3 = document.getElementById("calcular3").addEventListener('click', calcular_3);

function calcular_3() {
    const p1 = parseFloat(document.getElementById("#1").value)
    const number = parseInt(document.getElementById("#2").value)
    const result = document.getElementById("result");
    console.log("----")
    console.log(p1)
    console.log(number)
    if (!p1 || !number) {
        alert("Verificar que todos los campos esten llenos y/o correctos")
        

    } else {
        switch (number) {
            case 1: result.value = p1 - p1 * 0.08; break;
            case 2: result.value = p1 - p1 * 0.05; break;
            case 3: result.value = p1 - p1 * 0.06; break;
            case 4: result.value = p1 - p1 * 0.09; break;
            default:result.value="EL MODELO NO ES VALIDO DE DESCUENTO";
        }
    }
}
