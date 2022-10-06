const btnCalculator2 = document.getElementById("calcular2").addEventListener('click',calcular_2);

function calcular_2(){
    const p1 = parseFloat(document.getElementById("#1").value)
    const operation = document.getElementById("op").value
    const result = document.getElementById("result");
    console.log("----")
    console.log(p1)
    console.log(operation)
    if (!p1){
        alert("Verificar que todos los campos esten llenos o el indice sea mayor o igual a 0")
        
    }else{
        if ((operation=='1' && p1>0.4) || (operation=='2' && p1>0.3) ||(operation=='3' && p1>0.5) || (operation=='4' && p1>0.6)){
            result.value="POSITIVO";
        }
        else{
            result.value="FALSO";
        }
    }
}