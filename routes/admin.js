const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const productsContoller = require('../contollers/products')
// /admin/add-product => GET
router.get("/add-product", productsContoller.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsContoller.postAddProduct);

module.exports = router
