const db = require("../models");
const Professions = db.professions;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const ProfessionName = req.query.ProfessionName;
    var condition = ProfessionName ? {
        ProfessionName: {
            [Op.like]: `%${ProfessionName}%`
        }
    } : null;
    Professions.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des professions."
            });
        });
};
exports.findOne = (req, res) => {
    const ProfessionId = req.params.ProfessionId;

    Professions.findByPk(ProfessionId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de profession avec id=" + id
            });
        });
};