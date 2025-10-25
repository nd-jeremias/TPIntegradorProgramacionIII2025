import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function connection() {
  console.log('Conectado a la base de datos');
  return await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DBPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
}