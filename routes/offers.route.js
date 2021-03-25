module.exports = app => {
    const offers = require("../controllers/offers.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all offers
    router.get("/", [authJwt.verifyToken], offers.findAll);
    router.get("/:id", [authJwt.verifyToken], offers.findOne);

    app.use('/api/offers', router);
};