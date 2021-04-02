module.exports = app => {
    const professionsectors = require("../controllers/professionsectors.controller.js");
    const { authJwt } = require("../middleware");

    var router = require("express").Router();


    // Retrieve all professions  [authJwt.verifyToken],
    router.get("/", professionsectors.findAll);

    router.get("/:ProfessionSecteurId", [authJwt.verifyToken], professionsectors.findOne);

    app.use('/api/professionsectors', router);
};