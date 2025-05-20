document.getElementById("btnVendas").addEventListener("click", function() {
    document.getElementById("vendas").style.display = "block"; // Mostra a seção de vendas
    document.querySelector(".buttons-container").classList.add("hidden"); // Esconde os botões iniciais
});

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sua_senha",
    database: "seu_banco"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao banco!");
});

// Rota para salvar uma venda
app.post("/vendas", (req, res) => {
    const { produto, quantidade, valor } = req.body;
    const sql = "INSERT INTO vendas (produto, quantidade, valor) VALUES (?, ?, ?)";

    db.query(sql, [produto, quantidade, valor], (err, result) => {
        if (err) {
            console.error("Erro ao salvar venda:", err);
            res.status(500).send("Erro ao registrar venda");
        } else {
            res.send("Venda registrada com sucesso!");
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

document.getElementById("formVenda").addEventListener("submit", async (event) => {
    event.preventDefault();

    const venda = {
        produto: document.getElementById("produto").value,
        quantidade: document.getElementById("quantidade").value,
        valor: document.getElementById("valor").value
    };

    const response = await fetch("http://localhost:3000/vendas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(venda)
    });

    const result = await response.text();
    alert(result);
});