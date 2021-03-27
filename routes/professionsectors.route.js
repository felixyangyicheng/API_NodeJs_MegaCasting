module.exports = app => {
    const professionsectors = require("../controllers/professionsectors.controller.js");
    const { authJwt } = require("../middleware");

    var router = require("express").Router();


    // Retrieve all professions
    router.get("/", [authJwt.verifyToken], professionsectors.findAll);

    router.get("/:ProfessionSecteurId", [authJwt.verifyToken], professionsectors.findOne);

    app.use('/api/professionsectors', router);
};