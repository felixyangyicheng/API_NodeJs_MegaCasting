const db = require("../models");
const Artists = db.artists;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.query.FirstName;
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

    Tutorial.findByPk(ArtistId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de recherche d'artiste avec id=" + id
            });
        });
};