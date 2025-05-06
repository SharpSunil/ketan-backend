import express from "express";
import cors from "cors";
import http from "http";
import { createAllTable } from "./Table/Table.js";
import dotenv from "dotenv";
import { checkConnection } from "./db/database.js";
import { appointmentRoute } from "./route/appointmentRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", appointmentRoute);
const origin = "http://localhost:3001";
const port = process.env.PORT || 5400;
app.use("/", (req, res) => {
  res.send("Hello USER WELCOME TO THE API");
});
try {
  await checkConnection();
  await createAllTable();
  
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`server running ${port}`);
  });
} catch (error) {
  console.log(error);
}
