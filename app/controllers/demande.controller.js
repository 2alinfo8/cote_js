const db = require("../models");
const config = require("../config/auth.config");
const demande = db.demande;

const Op = db.Sequelize.Op;

exports.addNewDemande = (req, res) => {
    // Save request to Database
    demande.create({
        from: req.body.from,
        to: req.body.to,
        animal: req.body.animal,
        gender: req.body.gender,
        age: req.body.age,
        photo: req.body.photo,
        location: req.body.location
    })
        .then(result => {
            res.status(201).send({ message: "Request was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.updateDemande = (req, res) => {
    // Save request to Database
    demande.update({
        from: req.body.from,
        to: req.body.to,
        animal: req.body.animal,
        gender: req.body.gender,
        age: req.body.age,
        photo: req.body.photo,
        location: req.body.location

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
exports.deleteDemande = (req, res) => {
    // Save request to Database
    demande.destroy({where :{
            id:req.query.id,
        }})
        .then(result => {
            res.status(202).send({ message: "Request was deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllDemande = (req, res) => {
    demande.findAll()
        .then(demandes => {
            if (!demandes) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    demandes
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllDemandeByLocation = (req, res) => {
    demande.findAll({
        where: {
            location: req.query.location
        }
    })
        .then(demandes => {
            if (!demandes) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    demandes
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllDemandeByType = (req, res) => {
    demande.findAll({
        where: {
            animal: req.query.type
        }
    })
        .then(demandes => {
            if (!demandes) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    demandes
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
