"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        as: "roles",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: DataTypes.STRING,
      phone_number: { type: DataTypes.STRING, allowNull: false },
      phone_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      nid: { type: DataTypes.INTEGER, allowNull: false },
      total_deposit: { type: DataTypes.BIGINT, allowNull: false },
      deposit_monthly: DataTypes.BIGINT,
      late_deposit_fee: DataTypes.BIGINT,
      birth_date: DataTypes.DATE,
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};
