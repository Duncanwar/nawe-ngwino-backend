require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    version: "true",
    dialect: "postgres",
    logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    version: "true",
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
