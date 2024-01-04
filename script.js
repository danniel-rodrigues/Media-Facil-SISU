let form = document.getElementById("form");
let modal = document.getElementById("mainModal");
let span = document.getElementsByClassName("close")[0];
let mediaValorSpan = document.getElementById("mediaValor");

function calcular(event) {
    event.preventDefault();

    // Nota e peso de Linguagens
    let notaLing = parseFloat(document.getElementById("notaLinguagens").value);
    let pesoLing = parseFloat(document.getElementById("pesoLinguagens").value);

    // Nota e peso de Humanas
    let notaHum = parseFloat(document.getElementById("notaHumanas").value);
    let pesoHum = parseFloat(document.getElementById("pesoHumanas").value);

    // Nota e peso de Natureza
    let notaNat = parseFloat(document.getElementById("notaNatureza").value);
    let pesoNat = parseFloat(document.getElementById("pesoNatureza").value);

    // Nota e peso Matemática
    let notaMat = parseFloat(document.getElementById("notaMatematica").value);
    let pesoMat = parseFloat(document.getElementById("pesoMatematica").value);

    // Nota e peso Redação
    let notaRedacao = parseFloat(document.getElementById("notaRedacao").value);
    let pesoRedacao = parseFloat(document.getElementById("pesoRedacao").value);

    if (
        isNaN(notaLing) || isNaN(pesoLing) ||
        isNaN(notaHum) || isNaN(pesoHum) ||
        isNaN(notaNat) || isNaN(pesoNat) ||
        isNaN(notaMat) || isNaN(pesoMat) ||
        isNaN(notaRedacao) || isNaN(pesoRedacao)
    ) {
        alert("Por favor, preencha todos os campos com valores numéricos!");
    } else {
        let somaPesos = pesoLing + pesoHum + pesoNat + pesoMat + pesoRedacao;

        if(somaPesos < 10 || somaPesos > 10) {
            alert("A soma dos pesos deve ser igual a 10. Verifique se os pesos foram informados corretamente!");
        }
        else {
            let mediaCalculada = (
                (notaLing * pesoLing) +
                (notaHum * pesoHum) +
                (notaNat * pesoNat) +
                (notaMat * pesoMat) +
                (notaRedacao * pesoRedacao)
            ) / somaPesos;
    
            // Atualiza o valor da média no modal
            mediaValorSpan.textContent = mediaCalculada.toFixed(2);
    
            // Mostra o modal
            modal.style.display = "block";
        }

    }
}

function realizarNovoCalculo() {
    // Oculta o modal
    modal.style.display = "none";

    //Array de campos
    const campos = [
        "notaLinguagens", "pesoLinguagens",
        "notaHumanas", "pesoHumanas",
        "notaNatureza", "pesoNatureza",
        "notaMatematica", "pesoMatematica",
        "notaRedacao", "pesoRedacao"
    ];

    // Limpa os campos do formulário
    campos.forEach(campo => {
        document.getElementById(campo).value = "";
    });
}

function fecharModal() {
    // Fecha o modal ao clicar no botão de fechar
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
