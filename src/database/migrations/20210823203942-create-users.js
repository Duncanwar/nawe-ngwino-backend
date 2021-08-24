"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: { type: Sequelize.STRING, allowNull: false },
      last_name: { type: Sequelize.STRING, allowNull: false },
      phone_number: { type: Sequelize.STRING, allowNull: false },
      phone_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      email_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      nid: { type: Sequelize.INTEGER, allowNull: false },
      total_deposit: { type: Sequelize.BIGINT, allowNull: false },
      email: Sequelize.STRING,
      deposit_monthly: Sequelize.BIGINT,
      late_deposit_fee: Sequelize.BIGINT,
      birth_date: Sequelize.DATE,
      password: { type: Sequelize.STRING, allowNull: false },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
