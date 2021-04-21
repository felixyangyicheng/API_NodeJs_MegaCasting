const db = require("../models");
const DiffusionPartners = db.diffusionpartners; //must be all lowercases
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const DiffusionPartnerName = req.query.DiffusionPartnerName;
    var condition = DiffusionPartnerName ? {
        DiffusionPartnerName: {
            [Op.like]: `%${DiffusionPartnerName}%`
        }
    } : null;
    DiffusionPartners.findAll({ attributes: ["DiffusionPartnerId", "DiffusionPartnerName"], where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des partenaires de diffusion."
            });
        });
};
exports.findOne = (req, res) => {
    const DiffusionPartnerId = req.params.DiffusionPartnerId;

    DiffusionPartners.findByPk(DiffusionPartnerId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche du partenaire de diffusion avec id=" + DiffusionPartnerId
            });
        });
};