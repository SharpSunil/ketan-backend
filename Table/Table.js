import { database } from "../db/database.js";

const appointments = `CREATE TABLE IF NOT EXISTS appointments (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    booking_with VARCHAR(255) NOT NULL, 
    appointment_datetime DATETIME NOT NULL,
    amount INTEGER NOT NULL,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

const enquiry = `CREATE TABLE IF NOT EXISTS enquiry (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  service_type TEXT NOT NULL,
  name TEXT NOT NULL,
  mobile VARCHAR(255) NOT NULL,
  details TEXT NOT NULL,
  status ENUM('pending', 'completed') DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

const customers = `CREATE TABLE IF NOT EXISTS customers (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  mobile VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  address TEXT NOT NULL,
  social_media TEXT NOT NULL,
  referance TEXT NOT NULL,
  photoid TEXT NOT NULL,
  signature TEXT NOT NULL,
  occupation TEXT NOT NULL,
  consultant TEXT NOT NULL,
  designed_by TEXT NOT NULL,
  asigned_artist TEXT NOT NULL,
  costing TEXT NOT NULL,
  inventary TEXT NOT NULL,
  for_studio TEXT NOT NULL,
  service TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

const contact = `CREATE TABLE IF NOT EXISTS contact (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL,
  mobile VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

  const login = `CREATE TABLE IF NOT EXISTS login (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

const createTable = async (tableName, query) => {
  try {
    await database.query(query);
    console.log(`Table Create Successfully: ${tableName}`);
  } catch (error) {
    console.error(`Error creating table`, error);
  }
};

export const createAllTable = async () => {
  try {
    await createTable("appointments", appointments);
    await createTable("enquiry", enquiry);
    await createTable("customers", customers);
    await createTable("contact", contact);
    await createTable("login", login);
  } catch (error) {
    console.error("Something Wrong in create table");
  }
};
