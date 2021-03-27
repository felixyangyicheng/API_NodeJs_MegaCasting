module.exports = app => {
    const professions = require("../controllers/professions.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all professions
    router.get("/", [authJwt.verifyToken], professions.findAll);
    router.get("/:ProfessionId", [authJwt.verifyToken], professions.findOne);

    app.use('/api/professions', router);
};