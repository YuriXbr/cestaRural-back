const express = require('express');
const cors = require('cors');
const example = require('./experimental/example.json');
const app = express();

app.use(express.json());
app.use(cors()); // Adiciona o middleware CORS

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to get product list
app.get('/products', (req, res) => {
    res.json(example.exampleProductList);
});

// Route to get product by ID
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = example.exampleProductList.products.find(p => p.productId === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

// Rout to get seller by ID
app.get('/seller/:id', (req, res) => {
    const sellerId = parseInt(req.params.id);
    const seller = example.exampleSellerList.sellers.find(s => s.sellerId === sellerId);

    if (seller) {
        res.json(seller);
    } else {
        res.status(404).json({ error: 'Vendedor não encontrado' });
    }
});

// Route to handle product sell request
app.post('/sell/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = example.exampleProductList.products.find(p => p.productId === productId);

    if (!product) {
        res.status(404).json({ success: false, error: 'Produto não encontrado' });
        return;
    }
    if (!product.quantityAvalible) {
        res.status(400).json({ success: false, error: 'Produto esgotado' });
        return;
    }

    const transactionId = Math.floor(Math.random() * 1000000); // Gerar um ID de transação aleatório
    res.json({
        success: true,
        product: product,
        transactionId: transactionId
    });
});

// Estrutura de dados para armazenar o carrinho de compras
let cart = [];

// Rota para mostrar itens no carrinho
app.get('/cart', (req, res) => {
    res.json({ success: true, cart });
});

// Rota para adicionar produtos ao carrinho
app.post('/cart/add', (req, res) => {
    const { productId, quantity } = req.body;
    const product = example.exampleProductList.products.find(p => p.productId === productId);

    if (!product) {
        res.status(404).json({ success: false, error: 'Produto não encontrado' });
        return;
    }

    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    console.log(cart);
    res.json({ success: true, cart });
});

// Rota para remover produtos do carrinho
app.post('/cart/remove', (req, res) => {
    const { productId, quantity } = req.body;
    const cartItem = cart.find(item => item.productId === productId);

    if (!cartItem) {
        res.status(404).json({ success: false, error: 'Produto não encontrado no carrinho' });
        return;
    }

    if (cartItem.quantity <= quantity) {
        cart = cart.filter(item => item.productId !== productId);
    } else {
        cartItem.quantity -= quantity;
    }

    res.json({ success: true, cart });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;