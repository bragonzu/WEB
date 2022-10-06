const btnCalculator = document.getElementById("calcular").addEventListener('click',calcular);

function calcular(){
    const p1 = parseFloat(document.getElementById("n2").value)
    const operation = document.getElementById("operacion").value
    const name = document.getElementById("n1").value
    const result = document.getElementById("resultado");
    if (!p1 || !name || p1<=0){
        alert("Verificar que todos los campos esten llenos o precio original mayor a 0")
        
    }else{
    switch(operation){
        case "1":result.value=p1-(p1*0.1);break;
        case "2":result.value=p1-(p1*0.2);break;
    }
    }
}