module.exports = app => {
    const artists = require("../controllers/artists.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Retrieve all artists  artists?FirstName=*  [authJwt.verifyToken],
    router.get("/", artists.findAll);

    router.get("/artistname", artists.findAllByArtistName);
    router.get("/lastname", [authJwt.verifyToken], artists.findAllByLastName);

    // Retrieve a single Tutorial with id
    router.get("/:ArtistId", artists.findOne);

    app.use('/api/artists', router);
};