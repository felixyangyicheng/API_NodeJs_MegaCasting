module.exports = app => {
    const professions = require("../controllers/professions.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all professions [authJwt.verifyToken],
    router.get("/", professions.findAll);
    router.get("/:ProfessionId", [authJwt.verifyToken], professions.findOne);

    app.use('/api/professions', router);
};