import 'dotenv/config'

export default {
    client: 'postgres',
    connection: {
        host : process.env.POSTGRES_HOST || '127.0.0.1',
        port : process.env.POSTGRES_PORT || 5432,
        user : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PASSWORD,
        database : process.env.POSTGRES_DB
    },
    acquireConnectionTimeout: 1000,
    migrations: {
        directory: 'database/migrations'
    },
    seeds: {
        directory: 'database/seeds'
    }
}