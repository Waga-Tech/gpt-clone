import mysql from "mysql2/promise";
// import Pool from "./../node_modules/undici-types/pool.d";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  user: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: process.env.DB_CA_CERT,
  },
});

export default db;
