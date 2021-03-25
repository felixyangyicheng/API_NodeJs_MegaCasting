module.exports = app => {
    const diffusionpartners = require("../controllers/diffusionpartners.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all diffusionpartners
    router.get("/", [authJwt.verifyToken], diffusionpartners.findAll);
    router.get("/:id", [authJwt.verifyToken], diffusionpartners.findOne);

    app.use('/api/diffusionpartners', router);
};