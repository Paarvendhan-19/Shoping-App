const express = require("express");
const { getProduct } = require("../controller/productController");
const router = express.Router();

router.get("/Product",getProduct);

module.exports = router;