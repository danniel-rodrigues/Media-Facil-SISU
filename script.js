var form = document.getElementById("form");
var modal = document.getElementById("mainModal");
var span = document.getElementsByClassName("close")[0];
// var mediaValorSpan = document.getElementById("mediaValor");

function calcular(event) {
    event.preventDefault();
    // Sua lógica de cálculo aqui
    // var mediaCalculada =  // Resultado do cálculo

    // Atualiza o valor da média no modal
    // mediaValorSpan.textContent = mediaCalculada.toFixed(2);

    // Mostra o modal
    modal.style.display = "block";
}

function realizarNovoCalculo() {
    // Oculta o modal
    modal.style.display = "none";
    // Restaura o formulário ou realiza a ação necessária
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
