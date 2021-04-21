const db = require("../models");
const Artists = db.artists;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const FirstName = req.query.FirstName;
    var condition = FirstName ? {
        FirstName: {
            [Op.like]: `%${FirstName}%`
        }
    } : null

    Artists.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de recherche des artists."
            });
        });
};
exports.findOne = (req, res) => {
    const ArtistId = req.params.ArtistId;

    Artists.findByPk(ArtistId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de recherche d'artiste avec id=" + ArtistId
            });
        });
};

exports.findAllByArtistName = (req, res) => {
    const ArtistName = req.query.ArtistName;
    var condition = ArtistName ? {
        ArtistName: {
            [Op.like]: `%${ArtistName}%`
        }
    } : null

    Artists.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de recherche des artists."
            });
        });
};

exports.findAllByLastName = (req, res) => {
    const LastName = req.query.LastName;
    var condition = LastName ? {
        LastName: {
            [Op.like]: `%${LastName}%`
        }
    } : null

    Artists.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de recherche des artists."
            });
        });
};