const express = require("express");
const { getProduct, postProduct, deleteProduct, updateProduct, getSingleProduct } = require("../controller/productController");
const router = express.Router();

router.get("/Product", getProduct);
router.get("/Product/:id", getSingleProduct);
router.post("/Product", postProduct);
router.delete("/Product/:id", deleteProduct);
router.put("/Product/:id", updateProduct);

module.exports = router;