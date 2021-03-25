const db = require("../models");
const Studios = db.studios;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const StudioName = req.query.StudioName;
    var condition = StudioName ? {
        StudioName: {
            [Op.like]: `%${StudioName}%`
        }
    } : null;
    Studios.findAll({ where: condition })
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

    Tutorial.findByPk(StudioId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de studio avec id=" + id
            });
        });
};