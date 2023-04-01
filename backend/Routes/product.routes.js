const express = require("express");
const router = express.Router();
const Product = require("../Model/products.model");

// GET all products
router.get("/", async (req, res) => {
  let { page, limit, sort } = req.query;
  if (page < 1) {
    page = 1;
  }
  if (!limit) {
    limit = 20;
  }
  let x = {};
  if (sort == "desc") {
    x = { price: -1 };
  } else if (sort == "asc") {
    x = { price: 1 };
  } else {
    x = {};
  }
  try {
    let search = req.query.q || "";
    const queryObj = { ...req.query };
    const exclude = ["page", "limit", "sort"];
    exclude.forEach((el) => delete queryObj[el]);

    const products = await Product.find(queryObj)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort(x);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific product by ID
router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

// POST a new product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a product by ID
router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
