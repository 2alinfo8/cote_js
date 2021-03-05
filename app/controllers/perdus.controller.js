const db = require("../models");
const config = require("../config/auth.config");
const perdus = db.perdus;

const Op = db.Sequelize.Op;

exports.addPerdus = (req, res) => {
    // Save request to Database
    perdus.create({
        espece: req.body.espece,
        description: req.body.description,
        region: req.body.region,
        date: req.body.date,
        photo: req.body.photo,
        
    })
        .then(result => {
            res.status(201).send({ message: "Request was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.updatePerdus = (req, res) => {
    // Save request to Database
     perdus.update({
       espece: req.body.espece,
        description: req.body.description,
        region: req.body.region,
        date: req.body.date,
        photo: req.body.photo,

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
exports.deletePerdus = (req, res) => {
    // Save request to Database
    perdus.destroy({where :{
            id:req.query.id,
        }})
        .then(result => {
            res.status(202).send({ message: "Request was deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllPerdus = (req, res) => {
    perdus.findAll()
        .then(perdus => {
            if (!perdus) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    perdus
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllPerdusByRegion = (req, res) => {
    perdus.findAll({
        where: {
            region: req.query.region
        }
    })
        .then(perdus => {
            if (!perdus) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    perdus
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};



