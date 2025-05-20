document.getElementById("btnVendas").addEventListener("click", function() {
    let vendasSection = document.getElementById("vendas");

    // Alterna entre mostrar e esconder a seção de vendas
    if (vendasSection.style.display === "none" || vendasSection.style.display === "") {
        vendasSection.style.display = "block";
    } else {
        vendasSection.style.display = "none";
    }
});
