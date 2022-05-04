import { config } from "dotenv";
import path, { join } from "path";

config();

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db: {
        development: {
            type: process.env.DEVELOPMENT_DB_TYPE || "postgres",
            port: parseInt(`${process.env.DEVELOPMENT_DB_PORT}` || "5432"),
            host: process.env.DEVELOPMENT_DB_HOST || "localhost",
            username: process.env.DEVELOPMENT_DB_USERNAME || "test",
            database: process.env.DEVELOPMENT_DB_DATABASE || "test",
            password: process.env.DEVELOPMENT_DB_PASSWORD || "test",
            sync: process.env.DEVELOPMENT_DB_SYNCHRONIZE === "true",
            logging: process.env.DEVELOPMENT_DB_LOGGING === "true",
            ssl: false,
            // extra: {
            //     ssl: {
            //         rejectUnauthorized: false,
            //     },
            // },
            entities: [join(__dirname, "../db/entities/*.entity.{ts,js}")],
            // entities: [join(__dirname, "../entities/*.entity.ts")],
            migrations: [join(__dirname, "../db/migrations/*.{ts,js}")],
            // subscribers: ["../db/subscriber/**/*.{ts,js}"],
            cli: {
                migrationsDir: "src/db/migrations",
            },
        },
        production: {},
    },
    token: {
        secret: process.env.SECRET_JWT || "",
    },
};