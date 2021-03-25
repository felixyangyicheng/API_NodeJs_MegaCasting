const db = require("../models");
const Offers = db.offers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const Title = req.query.Title;
    var condition = Title ? {
        Title: {
            [Op.like]: `%${Title}%`
        }
    } : null;
    Offers.findAll({ where: condition })
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

    Tutorial.findByPk(OfferId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherhce de l'offre avec id=" + id
            });
        });
};