"use strict";
const ERole = require("../../constants/ERole");
const created_at = new Date();
const updated_at = created_at;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("roles", [
      {
        name: ERole.nsa,
        description: "Nawe Ngwino System Admin",
        created_at,
        updated_at,
      },
      {
        name: ERole.president,
        description: "Nawe Ngwino President",
        created_at,
        updated_at,
      },
      {
        name: ERole.accountant,
        description: "Nawe Ngwino Accountant",
        created_at,
        updated_at,
      },
      {
        name: ERole.member,
        description: "Nawe Ngwino member",
        created_at,
        updated_at,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
