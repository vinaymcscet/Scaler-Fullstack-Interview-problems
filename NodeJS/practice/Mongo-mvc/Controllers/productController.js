const ProductModel = require("../Models/productModel");

const createProduct = async(req, res) => {
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
        return res.status(201).json({ message: 'Product created successully!', data: product });
    } catch(err) {
        console.log(err);
        return res.status(400).json({ message: 'Something went wrong', err});
    }
}

const getAllProducts = async(req, res) => {
    const allProducts = await ProductModel.find({})
    console.log(allProducts);
    return res.status(200).json({ message: "All products", data: allProducts, suucess: true });
}

const searchProductByCategory = async(req, res) => {
    const name = req.params.search;
    console.log("++", parseString(name));
    const allProducts = await ProductModel.find({ category: parseString(name)});
    console.log(allProducts);
    return res.status(200).json({message: 'Search result found successfully', data: allProducts, success: true});
}

const searchProductByName = async (req, res) => {
    const name = req.params.name;
    const product = await ProductModel.find({ product_name: name });
    res.status(200).json(product);
};

const getProductById = async(req, res) => {
    const id = req.params.id;
    const allProducts = await ProductModel.findById(id);
    console.log(allProducts);
    if (!allProducts) {
        return res.status(404).json({ message: "Product not found" });
    }    
    return res.status(200).json(allProducts);
}

const updateProductById = async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ message: "Product updated" });
};

const deleteProductById = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Product Deleted successfully' })
}

module.exports = {
    createProduct,
    getAllProducts,
    searchProductByCategory,
    searchProductByName,
    getProductById,
    updateProductById,
    deleteProductById
}
