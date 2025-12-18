const express = require("express");
const { getProduct, postProduct, deleteProduct, updateProduct } = require("../controller/productController");
const router = express.Router();

router.get("/Product", getProduct);
router.post("/Product", postProduct);
router.delete("/Product/:id", deleteProduct);
router.put("/Product/:id", updateProduct);

module.exports = router;