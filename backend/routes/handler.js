const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/products', async function (req, res) {

    //fetch Products data from given Products REST API
    const productsAPIResponse = await axios.get(process.env.API_URL + "/products");

    //fetch Image data from given Images REST API
    const productImagesAPIResponse = await axios.get(process.env.API_URL + "/images");

    const products = productsAPIResponse.data.products;
    const productImages = productImagesAPIResponse.data.images;

    //merge both APIs and send as response to UI
    const productDetails = [];
    let productUI = {};
    products.forEach(product => {
        productUI = { ...product };
        productUI.images = productImages[product.sku];
        productDetails.push(productUI);
    })
    res.send(productDetails);
});

module.exports = router;