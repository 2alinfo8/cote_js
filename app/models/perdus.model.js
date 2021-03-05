module.exports = (sequelize, Sequelize) => {
    const perdus = sequelize.define("perdus", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        espece: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        photo: {
            type: Sequelize.STRING,
        }
    });

    return perdus;
};
