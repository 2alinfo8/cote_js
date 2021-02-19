module.exports = (sequelize, Sequelize) => {
    const demande = sequelize.define("demande-accouplement", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        from: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        animal: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER,
        },
        photo: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING
        }
    });

    return demande;
};
