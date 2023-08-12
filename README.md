![](https://i.imgur.com/xG74tOh.png)

# Exercício Resolvido

Implemente uma API REST de uma Loja Virtual que possibilite listar os produtos e realizar uma venda.

Os produtos disponíveis no sistema são:

```javascript
const produtos = [
    { id: 1, nome: "TV Samsung 4K", valor: 129900 },
    { id: 2, nome: "Notebook Dell", valor: 399990 },
    { id: 3, nome: "Mouse MX Master 3", valor: 23000 },
    { id: 4, nome: "Teclado Keychron K8", valor: 50000 },
    { id: 5, nome: "Cabo USB 2 Metros", valor: 1990 },
    { id: 6, nome: "Carregador portátil", valor: 4590 },
    { id: 7, nome: "Webcam C920s", valor: 80000 },
    { id: 8, nome: "Monitor LG 29 FHD", valor: 129900 },
]
```

A rota `GET /produtos` deverá retornar a listagem de produtos disponíveis.

A rota `POST /produtos` deverá registrar uma venda num arquivo `JSON` seguindo o seguinte formato:

```javascript
{
    "vendas": [
        {
            "produto": {
                "id": 1,
                "nome": "TV Samsung 4K",
                "valor": 129900
            },
            "quantidade": 5
        },
        {
            "produto": {
                "id": 8,
                "nome": "Monitor LG 29 FHD",
                "valor": 129900
            },
            "quantidade": 2
        }
    ]
}
```

O body enviado para a rota `POST /produtos` deverá conter o id do produto e a quantidade desejada.

Exemplo:

```javascript
{
    "produto_id": 1,
    "quantidade": 5
}
```