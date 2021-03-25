const db = require("../models");
const Contracts = db.contracts;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    Contracts.findAll()
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
    const ContractId = req.params.id;

    Tutorial.findByPk(ContractId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la recherche de contrat avec id=" + id
            });
        });
};