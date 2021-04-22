const { professionsectors } = require("../models");
const db = require("../models");
const Professions = db.professions;
const Offers = db.offers;
const ProfessionSectors = db.professionsectors;
const Op = db.Sequelize.Op;

Professions.hasMany(Offers, {
    foreignKey: 'ProfessionId'
});
Offers.belongsTo(Professions);

ProfessionSectors.hasMany(Professions, {
    foreignKey: 'ProfessionSectorId'
});

Professions.belongsTo(ProfessionSectors);

exports.findAll = (req, res) => {
    const ProfessionName = req.query.ProfessionName;
    var condition = ProfessionName ? {
        ProfessionName: {
            [Op.like]: `%${ProfessionName}%`
        }
    } : null;

    Professions.findAll({
            attributes: ["ProfessionId", "ProfessionName"], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            where: condition,
        include: [
            {
                model: Offers,
                as: 'Offers',
                attributes: ["OfferReference"]
            },
            {
                model: ProfessionSectors,
                as: 'ProfessionSectors',
                attributes: ["ProfessionSectorId", "SectorName"]
            }],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des professions."
            });
        });
    console.log(Professions);
};


exports.findOne = (req, res) => {
    const ProfessionId = req.params.ProfessionId;

    Professions.findByPk(ProfessionId, { attributes: ["ProfessionId", "ProfessionName"]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de profession avec id=" + ProfessionId
            });
        })
};