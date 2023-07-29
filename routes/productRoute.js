const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  getCategoryProducts,
} = require("../controllers/productController");

//Router
const router = express.Router();

//GET all projects
router.get("/", getAllProducts);

// GET single product
router.get("/:productId", getSingleProduct);

// GET products by category
router.get("/category/:category", getCategoryProducts);

module.exports = router;
