import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import config from "../../config";

export default config.db.development as PostgresConnectionOptions;