const db = require("../models");
const config = require("../config/auth.config");
const consultation = db.consultation;
const Op = db.Sequelize.Op;


exports.addConsultation = (req, res) => {
    // Save request to Database
    consultation.create({
        patient: req.body.patient,
        vet: req.body.vet,
        starts_at: req.body.starts_at,
        status: req.body.status
    })
        .then(result => {
            // TODO : waiting for crud Users to verify if patient and vet are valids 
            res.status(201).send({ message: "Consultation was registered successfully!" });
            
        })
        .catch(err => {
            res.status(400).send({ message: err.message });
        });
};
exports.updateConsultation = (req, res) => {
    // Save request to Database
    consultation.update({
        id: req.body.id,
        patient: req.body.patient,
        vet: req.body.vet,
        starts_at: req.body.starts_at,
        status: req.body.status

    },{where :{
        id:req.body.id,
    }})
        .then(result => {
            res.status(200).send({ message: "Request was updated successfully!" });
        })
        .catch(err => {
            res.status(400).send({ message: err.message });
        });
};
exports.deleteConsultation = (req, res) => {
    // Save request to Database
    consultation.destroy({where :{
            id:req.query.id,
        }})
        .then(result => {
            res.status(204).send({ message: "Request was deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.findAllConsultation = (req, res) => {
    consultation.findAll()
        .then(consultation => {
            if (!consultation) {
                return res.status(404).send({ message: "No opportunity found !" });
            }
            else{
                res.status(200).send({
                    consultation
                });
            }
        })
        .catch(err => {
            res.status(400).send({ message: err.message });
        });
};

