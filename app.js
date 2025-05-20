document.getElementById("btnVendas").addEventListener("click", function() {
    document.getElementById("vendas").style.display = "block"; // Mostra a seção de vendas
    document.querySelector(".buttons-container").classList.add("hidden"); // Esconde os botões iniciais
});
