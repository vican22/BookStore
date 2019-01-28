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

router.get("/edit-product/:productId", adminContoller.getEditProduct);

router.post("/edit-product", adminContoller.postEditProduct);
module.exports = router;
