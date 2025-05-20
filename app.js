document.getElementById("btnVendas").addEventListener("click", function() {
    let vendasSection = document.getElementById("vendas");

    // Alterna entre mostrar e esconder a seção de vendas
    vendasSection.style.display = (vendasSection.style.display === "none" || vendasSection.style.display === "") ? "block" : "none";
});