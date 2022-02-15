const index = require("../handler");
require('dotenv').config();
const request = require("supertest");
const express = require("express");
const app = express();
const axios = require('axios');
const getProductsTestData = require('../../testData/getProductsTestData');
const getImagesTestData = require('../../testData/getImagesTestData');

jest.mock('axios');
app.use(express.urlencoded({ extended: false }));
app.use("/", index);


test("should fetch correct image for a product sku", done => {
    
    //mock Product API and return product test data
    axios.get.mockImplementation((url) => {
        if (url === process.env.API_URL + "/products") {
            return Promise.resolve({
                data: getProductsTestData
            });
        }
        //mock Image API and return image test data
        if (url === process.env.API_URL + "/images") {
            return Promise.resolve({
                data: getImagesTestData
            });
        }
    });

    request(app)
        .get("/products")
        .end((err, res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body[0].sku).toBe("DW00100001");
            expect(res.body[0].name).toBe("Classic Oxford 40 Rose Gold");
            expect(res.body[0].images[0].src).toBe("https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png")
            done();
        })
});