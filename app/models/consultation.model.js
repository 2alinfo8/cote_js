const { consultation } = require(".");
const { User } = require("./user.model")
module.exports = (sequelize, Sequelize) => {
    const consultation = sequelize.define("consultations", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        patient: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        vet: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        starts_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        status: {
            type: Sequelize.ENUM('PENDING', 'APPROVED', 'REJECTED'),
            defaultValue: 'PENDING'
        }
    });

    return consultation;
};

