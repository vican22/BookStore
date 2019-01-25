const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminContoller = require("../contollers/admin");
// /admin/add-product => GET
router.get("/add-product", adminContoller.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminContoller.postAddProduct);

router.get("/products", adminContoller.getProducts);
module.exports = router;
