module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cities_weather', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
      },
      cityId: {
        field: 'city_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'id',
        },
      },
      weatherId: {
        field: 'weather_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'weather',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cities_weather');
  }
};
