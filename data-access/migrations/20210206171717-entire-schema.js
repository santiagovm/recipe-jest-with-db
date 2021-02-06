module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            mode: {
                type: Sequelize.STRING,
            },
        }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Orders'),
}
