const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productController");

//Router
const router = express.Router();

//GET all projects
router.get("/", getAllProducts);

// GET single product
router.get("/:productId", getSingleProduct);

module.exports = router;
