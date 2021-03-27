const db = require('../models/');
const ContractTypes = db.contracttypes;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const ContractTypeName = req.query.ContractTypeName;
    var condition = ContractTypeName ? {
        ContractTypeName: {
            [Op.like]: `%${ContractTypeName}%`
        }
    } : null;
    ContractTypes.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des types."
            });
        });
};

exports.findOne = (req, res) => {
    const ContractTypeId = req.params.ContractTypeId;

    ContractTypes.findByPk(ContractTypeId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche avec id=" + id
            });
        });
};