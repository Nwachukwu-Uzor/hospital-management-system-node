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
  }
);

export default connection;
