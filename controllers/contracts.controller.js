const db = require("../models");
const Contracts = db.contracts;
const ContractTypes = db.contracttypes;
const Op = db.Sequelize.Op;

ContractTypes.hasMany(Contracts, {
    foreignKey: 'ContractTypeId'
})
Contracts.belongsTo(ContractTypes, {
    as: 'CTT',
    foreignKey: 'ContractTypeId'
})


exports.findAll = (req, res) => {

    Contracts.findAll({
            attributes: ["ContractId", "ContractReference", "ContractBegins", "ContractDuration", "ContractPdfFile", ], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            include: [{
                    model: ContractTypes,
                    as: 'ContractType',
                    attributes: ["ContractTypeName"]
                },

            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des contrats."
            });
        });
};

exports.findAllByReference = (req, res) => {
    const ContractReference = req.query.ContractReference;
    var condition = ContractReference ? {
        ContractReference: {
            [Op.like]: `%${ContractReference}%`
        }
    } : null
    Contracts.findAll({
            attributes: ["ContractId", "ContractReference", "ContractBegins", "ContractDuration", "ContractPdfFile", ], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            where: condition,
            include: [{
                    model: ContractTypes,
                    as: 'CTT',
                    attributes: ["ContractTypeName"]
                },

            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la recherche des contrats."
            });
        });
};
exports.findOne = (req, res) => {
    const ContractId = req.params.ContractTypeId;

    Contracts.findByPk(ContractId, {
            attributes: ["ContractId", "ContractReference", "ContractBegins", "ContractDuration", "ContractPdfFile", ], //set arttibuts (select columns) to avoid concatenation of tableName and columnName
            include: [{
                    model: ContractTypes,
                    as: 'CTT',
                    attributes: ["ContractTypeName"]
                },

            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de contrat avec id=" + ContractTypeId
            });
        });
};