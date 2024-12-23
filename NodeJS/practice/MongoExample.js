// mongodb+srv://vinaymcscet68:<db_password>@cluster0.g0wxqiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dbUrl = 
`mongodb+srv://vinaymcscet68:4M6nKb9PEhWAeAMU@cluster0.g0wxqiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = 8081;
// once for connection
mongoose.connect(dbUrl)
    .then((connection) => {
        console.log("connected to db", connection.STATES);
    }).catch(err => console.log(err))

// Schema
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    IsInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function() {
                return this.password === this.confirmPassword;
            },
            message: 'Password and confirm password could be same',
        }
    }
}, {timestamps: true});
const ProductModel = mongoose.model('products', productSchema);
app.use(express.json()); // middleware for post request

// post api
app.post('/api/products', async(req, res) => {
    const body = req.body;
    try {
        const product = await ProductModel.create({
            product_name: body.product_name,
            product_price: body.product_price,
            IsInStock: body.IsInStock,
            category: body.category,
            password: body.password,
            confirmPassword: body.confirmPassword,
        })
        console.log(product);
        return res.status(201).json({ message: 'Product created successully!' });
    } catch(err) {
        console.log(err);
        return res.status(400).json({ message: 'Something went wrong', err});
    }
})

// Get Api
app.get('/api/products', async(req, res) => {
    const allProducts = await ProductModel.find({})
    console.log(allProducts);
    return res.status(200).json(allProducts);
})

// Search Api
app.get('/api/products/search', async(req, res) => {
    const allProducts = await ProductModel.find({ category: 'Electronics'});
    console.log(allProducts);
    return res.status(200).json(allProducts);
})

// search by id
app.get('/api/products/:id', async(req, res) => {
    const id = req.params.id;
    const allProducts = await ProductModel.findById(id);
    console.log(allProducts);
    return res.status(200).json(allProducts);
})

// update product in mongo db by put
app.put("/api/products/:id", async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ message: 'Resource Updated' })
})

// Delete a product
app.delete("/api/products/:id", async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Resource Deleted' })
})

app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})
