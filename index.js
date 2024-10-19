// Express server
const express = require('express');
const example = require('./experimental/example.json');
const app = express();
const axios = require('axios');

app.use(express.json());

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
    const product = example.exampleProductList.products.find(p => p.producitId === productId);

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
    const product = example.exampleProductList.products.find(p => p.producitId === productId);

   if(!product) {
       res.status(404).json({ success: false, error: 'Produto não encontrado' });
         return;
    }
    if(!product.quantityAvalible) {
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// make a test request to the server sell endpoint

axios.post('http://localhost:3000/sell/247')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
