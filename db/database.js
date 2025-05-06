import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();


const database = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

const checkConnection = async () => {
  let connection;

  try {
    connection = await database.getConnection();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};




export { database, checkConnection };