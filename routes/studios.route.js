module.exports = app => {
    const studios = require("../controllers/studios.controller.js");
    const { authJwt } = require("../middleware");

    var router = require("express").Router();


    // Retrieve all studios  [authJwt.verifyToken],
    router.get("/", studios.findAll);

    router.get("/:id", [authJwt.verifyToken], studios.findOne);
    app.use('/api/studios', router);
};