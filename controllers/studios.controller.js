const db = require("../models");
const Studios = db.studios;
const Offers = db.offers;
const Op = db.Sequelize.Op;

Studios.hasMany(Offers, {
    foreignKey: 'StudioId'
});
Offers.belongsTo(Studios);

exports.findAll = (req, res) => {
    const StudioName = req.query.StudioName;
    var condition = StudioName ? {
        StudioName: {
            [Op.like]: `%${StudioName}%`
        }
    } : null;
    Studios.findAll({
            attributes: [
                "StudioId", "StudioName", "PostCode", "City", "Siret", "Address", "AddressNumber", "Phone", "Email",
            ],
            where: condition,
            include: [{
                model: Offers,
                as: 'Offers',
                attributes: ["OfferReference"]
            }]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des studios."
            });
        });
};
exports.findOne = (req, res) => {
    const StudioId = req.params.StudioId;

    Studios.findByPk(StudioId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de studio avec id=" + id
            });
        });
};