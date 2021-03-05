const db = require("../models");
const config = require("../config/auth.config");
const accessoire = db.accessoire;

const Op = db.Sequelize.Op;

exports.addAccessoire = (req, res) => {
    // Save request to Database
    accessoire.create({
        categorie: req.body.categorie,
        name: req.body.name,
        description: req.body.description,
        prix: req.body.prix
    })
        .then(result => {
            res.status(201).send({ message: "Request was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllAccessoire = (req, res) => {
    accessoire.findAll()
        .then(accessoires => {
            if (!accessoires) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    accessoires
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};


exports.updateAccessoire = (req, res) => {
    // Save request to Database
    accessoire.update({
        categorie: req.body.categorie,
        name: req.body.name,
        description: req.body.description,
        prix: req.body.prix

    },{where :{
        id:req.body.id,
    }})
        .then(result => {
            res.status(200).send({ message: "Request was updated successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.deleteAccessoire = (req, res) => {
    // Save request to Database
    accessoire.destroy({where :{
            id:req.query.id,
        }})
        .then(result => {
            res.status(202).send({ message: "Request was deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllAccessoireByCategorie = (req, res) => {
    accessoire.findAll({
        where: {
            categorie: req.body.categorie
        }
    })
        .then(accessoires => {
            if (!accessoires) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    accessoires
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

