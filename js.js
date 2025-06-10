    function calcularDesconto(){


    let valorOriginal = document.getElementById("Valor").value;
    let desconto = document.getElementById("Desconto").value;

    let valorDesconto = (valorOriginal * desconto) / 100
    let valorFinal = valorOriginal - valorDesconto  

    document.getElementById("resultado").textContent = "Valor final: " + valorFinal
    }