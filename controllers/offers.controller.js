const db = require("../models");
const Offers = db.offers;
const Studios = db.studios;
const Professions=db.professions;
const Op = db.Sequelize.Op;

Studios.hasMany(Offers, {
    foreignKey: "StudioId"
});
Offers.belongsTo(Studios);

Professions.hasMany(Offers, {
    foreignKey: "ProfessionId"
});
Offers.belongsTo(Professions);

exports.findAll = (req, res) => {
    const Title = req.query.Title;
    var condition = Title ? {
        Title: {
            [Op.like]: `%${Title}%`
        }
    } : null;
    Offers.findAll({
            attributes: ["OfferId", "OfferReference", "Title", "PublishDate", "OfferDuration", "OfferDescription", "AvailablePlace", "ProfilDescription", "Location", "StudioId", "ProfessionId", ], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherhce des offres."
            });
        });
};

exports.findAllByDuration = (req, res) => {
    const OfferDuration = req.query.OfferDuration;
    var condition = OfferDuration ? {
        OfferDuration: {
            [Op.like]: `%${OfferDuration}%`
        }
    } : null;
    Offers.findAll({
            attributes: ["OfferId", "OfferReference", "Title", "PublishDate", "OfferDuration", "OfferDescription", "AvailablePlace", "ProfilDescription", "Location", "StudioId", "ProfessionId",], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherhce des offres."
            });
        });
};
exports.findAllByLocation = (req, res) => {
    const Location = req.query.Location;
    var condition = Location ? {
        Location: {
            [Op.like]: `%${Location}%`
        }
    } : null;
    Offers.findAll({
            attributes: ["OfferId", "OfferReference", "Title", "PublishDate", "OfferDuration", "OfferDescription", "AvailablePlace", "ProfilDescription", "Location", "StudioId", "ProfessionId",], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherhce des offres."
            });
        });
};
exports.findOne = (req, res) => {
    const OfferId = req.params.OfferId;

    Offers.findByPk(OfferId, {
            attributes: ["OfferId", "OfferReference", "Title", "PublishDate", "OfferDuration", "OfferDescription", "AvailablePlace", "ProfilDescription", "Location", "StudioId", "ProfessionId",], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherhce de l'offre avec id=" + OfferId
            });
        });
};