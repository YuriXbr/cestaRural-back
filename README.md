# DOCS

## ROTAS
* GET `/products/` -- Retorna uma lista de produtos
* GET `/product/:id` -- Retorna informações especificas do produto com ID identificado ou 404 se não houver
* GET `/seller/:id` -- Retorna informações especificas de um vendedor com ID identificado ou 404 se não houver
* POST `/sell/:id` -- Retornará se a venda foi concluida ou não baseado se o produto ID existe e está disponivel em estoque
* GET `/cart` -- Retorna o carrinho de compras
* POST `/cart/add` -- Envie um json com productId e quantity para adicionar ao carrinho
* POST`/cart/remove` -- Envie um json com productId e quantity para remover do carrinho


## Exemplo de JSON Produto
```js
"exampleProduct1": {
        "producitId": 247,
        "name": "Cenouras Fresas 1kg",
        "description": "Cenouras frescas sem agrotóxicos produzidas em Pelotas",
        "price": 7.43,
        "quantityAvalible": 20,
        "seller": {
            "sellerId": 128,
            "name": "Hortaliças do Sul",
            "shortDescription": "Hortaliças frescas sem agrotóxicos",
            "longDescription": "Hortaliças frescas sem agrotóxicos produzidas em Pelotas, desde 1998 com qualidade e preço justo",
            "address": "Rua 15 de Novembro, 123",
            "postalCode": "96015-000",
            "city": "Pelotas",
            "email": "joao@outlook.com",
            "phone": "+55 53 99999-9999",
            "logo": "https://th.bing.com/th/id/R.47ed1051f953751bb41076cd2ea6c708?rik=oJmwGUIFYN9v6Q&pid=ImgRaw&r=0",
            "banner": "https://th.bing.com/th/id/R.47ed1051f953751bb41076cd2ea6c708?rik=oJmwGUIFYN9v6Q&pid=ImgRaw&r=0"
        }
    },
```

## Exemplo de JSON Vendedor
```js
"exampleSeller": {
        "sellerId": 128,
        "name": "Hortaliças do Sul",
        "shortDescription": "Hortaliças frescas sem agrotóxicos",
        "longDescription": "Hortaliças frescas sem agrotóxicos produzidas em Pelotas, desde 1998 com qualidade e preço justo",
        "address": "Rua 15 de Novembro, 123",
        "postalCode": "96015-000",
        "city": "Pelotas",
        "email": "joao@outlook.com",
        "phone": "+55 53 99999-9999",
        "logo": "https://th.bing.com/th/id/R.47ed1051f953751bb41076cd2ea6c708?rik=oJmwGUIFYN9v6Q&pid=ImgRaw&r=0",
        "banner": "https://th.bing.com/th/id/R.47ed1051f953751bb41076cd2ea6c708?rik=oJmwGUIFYN9v6Q&pid=ImgRaw&r=0",
        "productsIds": [247, 248]
    },
```
