const produtos = require('../bancodedados');
const fs = require('fs/promises');

const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}

const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body;
console.log(req.body)
    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id)
    });
    console.log(produtoEncontrado)

    if (!produtoEncontrado) {
        return res.status(404).json('O produto n foi encontrado.')
    }

    try {
        const vendas = await fs.readFile('./src/vendas.json');

        const parseVendas = JSON.parse(vendas);

        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        });

        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas));

        return res.status(201).json('Vendas registrada com sucesso.');
    } catch (erro) {
        return res.status(500).json('Erro do servidor');
    }
}



module.exports = {
    listagemProdutos,
    vendas
}