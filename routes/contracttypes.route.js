module.exports = app => {
    const contracttypes = require("../controllers/contracttypes.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // /contracttypes?ContratTypeName=*
    router.get("/", [authJwt.verifyToken], contracttypes.findAll);

    router.get("/:ContratTypeId", [authJwt.verifyToken], contracttypes.findOne);
    app.use('/api/contracttypes', router);
};