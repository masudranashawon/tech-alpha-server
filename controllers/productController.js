const Product = require("../model/productModel");

//GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET a single product
const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET products by category
const getCategoryProducts = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  getCategoryProducts,
};
