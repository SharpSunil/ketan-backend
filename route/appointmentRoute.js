import express from "express";
import {
  Addappointment,
  DeleteAppointment,
  GetAllAppointment,
  GetAppointmentById,
  UpdateAppointment,
} from "../controller/AppointmentController.js";

export const appointmentRoute = express.Router();
appointmentRoute.post("/addappointment", Addappointment);
appointmentRoute.get("/getappointment", GetAllAppointment);
appointmentRoute.get("/getappointment/:id", GetAppointmentById);
appointmentRoute.put("/updateappointment/:id", UpdateAppointment);
appointmentRoute.delete("/deleteappointment/:id", DeleteAppointment);
