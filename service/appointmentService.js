import { database } from "../db/database.js";

export const addappointment = async (data) => {
  const [result] = await database.query(
    "INSERT INTO appointments (name, mobile, booking_with, appointment_datetime, amount) VALUES (?, ?, ?, ?, ?)",
    [
      data.name,
      data.mobile,
      data.booking_with,
      data.appointment_datetime,
      data.amount,
    ]
  );
};

//----------------Get All Appointment------------------//
export const getAllAppointment = async () => {
    try {
      const [rows] = await database.query("SELECT * FROM appointments");
      console.log("Fetched appointments:", rows);
      return rows;
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw error;
    }
  };
  

//----------------Get Appointment By ID------------------//
export const getAppointmentById = async (id) => {
    try {
      const [rows] = await database.query(
        "SELECT * FROM appointments WHERE id = ?",
        [id]
      );
      console.log(`Fetched appointment with ID ${id}:`, rows[0]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching appointment with ID ${id}:`, error);
      throw error;
    }
  };
  

//----------------Update Appointment------------------//
export const updateAppointment = async (id, data) => {
    try {
      const [result] = await database.query(
        "UPDATE appointments SET name = ?, mobile = ?, booking_with = ?, appointment_datetime = ?, amount = ? WHERE id = ?",
        [
          data.name,
          data.mobile,
          data.booking_with,
          data.appointment_datetime,
          data.amount,
          id,
        ]
      );
  
      console.log(`Update result for ID ${id}:`, result);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating appointment with ID ${id}:`, error);
      throw error;
    }
  };
  
//----------------Delete Appointment------------------//
export const deleteAppointment = async (id) => {
    try {
      const [result] = await database.query(
        "DELETE FROM appointments WHERE id = ?",
        [id]
      );
      console.log(`Deleted appointment with ID ${id}:`, result);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting appointment with ID ${id}:`, error);
      throw error;
    }
  };
  