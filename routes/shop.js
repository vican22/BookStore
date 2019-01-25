const path = require("path");

const express = require("express");

const productController = require('../contollers/products')

const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;
