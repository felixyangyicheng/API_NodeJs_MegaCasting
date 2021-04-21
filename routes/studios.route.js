module.exports = app => {
    const studios = require("../controllers/studios.controller.js");
    const { authJwt } = require("../middleware");

    var router = require("express").Router();


    // Retrieve all studios  [authJwt.verifyToken],
    router.get("/", [authJwt.verifyToken], studios.findAll);

    router.get("/:StudioId", [authJwt.verifyToken], studios.findOne);
    app.use('/api/studios', router);
};