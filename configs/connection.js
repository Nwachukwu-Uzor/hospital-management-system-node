import Sequelize from "sequelize";
import {
  databaseName,
  databasePassword,
  databaseUsername,
  databaseHost,
} from "./index.js";

const connection = new Sequelize(
  databaseName,
  databaseUsername,
  databasePassword,
  {
    host: databaseHost,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

export default connection;
