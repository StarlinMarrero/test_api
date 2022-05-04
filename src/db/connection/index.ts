import { DataSource } from "typeorm";
import config from "../../config";
import ormconfig from "./ormconfig";

const AppDataSource = new DataSource(ormconfig);

export const createConnection = async () => {
    
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
};

export default AppDataSource;