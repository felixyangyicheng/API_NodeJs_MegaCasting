module.exports = app => {
    const offers = require("../controllers/offers.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all offers [authJwt.verifyToken],
    router.get("/", [authJwt.verifyToken], offers.findAll);
    router.get("/offerduration", [authJwt.verifyToken], offers.findAllByDuration);
    router.get("/location", [authJwt.verifyToken], offers.findAllByLocation);
    router.get("/:OfferId", [authJwt.verifyToken], offers.findOne);

    app.use('/api/offers', router);
};