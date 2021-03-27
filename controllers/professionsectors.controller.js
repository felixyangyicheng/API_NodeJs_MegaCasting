const db = require('../models');
const ProfessionSectors = db.professionsectors;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const SectorName = req.query.SectorName;
    var condition = SectorName ? {
        SectorName: {
            [Op.like]: `%${SectorName}%`
        }
    } : null;
    ProfessionSectors.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des secteurs"
            });
        });
};
exports.findOne = (req, res) => {
    const ProfessionSectorId = req.params.ProfessionSectorId;

    ProfessionSectors.findByPk(ProfessionSectorId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de secteur avec id=" + id
            });
        });
};