const express = require("express");
const { vendas, listagemProdutos } = require("./controladores/vendas");

const app = express();

app.use(express.json());

app.get("/produtos", listagemProdutos);
app.post("./produtos", vendas)


app.listen(3000, () => {
  console.log("Servidor iniciado em http://localhost:3000");
});
