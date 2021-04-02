module.exports = app => {
    const aspnetusers = require("../controllers/aspnetusers.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all contracts [authJwt.verifyToken],
    // router.get("/", aspnetusers.findAll);
    // router.get("/username", aspnetusers.findName);
    // router.get("/id", aspnetusers.findId);


    app.use('/api/aspnetusers', router);
};