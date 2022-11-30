import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const env = process.env.NODE_ENV;
export const databaseName = process.env.DATABASE_NAME;
export const databaseUsername = process.env.DATABASE_USERNAME;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseHost = process.env.DATABASE_HOST;
