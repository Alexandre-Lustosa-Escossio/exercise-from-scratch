'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      plan_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'plan',
          key: 'plan_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};