const express = require('express');
const { 
    createProduct,
    getAllProducts,
    searchProductByCategory,
    searchProductByName,
    getProductById,
    updateProductById,
    deleteProductById
 } = require('../Controllers/productController');

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);
productRouter.get("/:search", searchProductByCategory);
productRouter.get("/search/:name", searchProductByName);

module.exports = productRouter;