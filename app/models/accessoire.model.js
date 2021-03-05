module.exports = (sequelize, Sequelize) => {
    const accessoire = sequelize.define("accessoire", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        categorie: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        prix: {
            type: Sequelize.STRING
        }
    });

    return accessoire;
};
