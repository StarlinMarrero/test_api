import 'dotenv/config';


export const config = { 
    app: {
        port: process.env.PORT || 4000,
        env: process.env.NODE_ENV || "development",
    },
    db: {
        type: process.env.DB_TYPE || "postgres",
        host: process.env.TYPEORM_DB_HOST || "localhost",
        port: process.env.TYPEORM_DB_PORT || 5432,
        database: process.env.TYPEORM_DB_NAME || "test",
        user: process.env.TYPEORM_DB_USER || "postgres",
        password: process.env.TYPEORM_DB_PASSWORD || "postgres",
     }
}