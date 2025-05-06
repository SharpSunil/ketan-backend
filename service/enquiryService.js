import { database } from "../db/database.js";



export const addEnquiry = async (data) => {
  const [result] = await database.query(
    "INSERT INTO enquiry (service_type,name, mobile, details, status) VALUES (?, ?, ?, ?, ?)",
    [data.service_type, data.name, data.mobile, data.details, data.status]
  );
  return result;
};


//----------------Get All Enquiry------------------//
export const getAllEnquiry = async () => {
  try {
    const [rows] = await database.query("SELECT * FROM enquiry");
    console.log("Fetched enquiry:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching enquiry:", error);
    throw error;
  }
};

//----------------Get Enquiry By ID------------------//
export const getEnquiryById = async (id) => {
  try {
    const [rows] = await database.query(
      "SELECT * FROM enquiry WHERE id = ?",
      [id]
    );
    console.log(`Fetched enquiry with ID ${id}:`, rows[0]);
    return rows[0];
  } catch (error) {
    console.error(`Error fetching enquiry with ID ${id}:`, error);
    throw error;
  }
};

//----------------Update Enquiry------------------//
export const updateEnquiry = async (id, data) => {
  try {
    const [result] = await database.query(
      "UPDATE enquiry SET service_type = ?, name = ?, mobile = ?, details = ?, status = ? WHERE id = ?",
      [data.service_type, data.name, data.mobile, data.details, data.status, id]
    );

    console.log(`Update result for ID ${id}:`, result);
    return result;
  } catch (error) {
    console.error(`Error updating enquiry with ID ${id}:`, error);
    throw error;
  }
};
//----------------Delete Enquiry------------------//
export const deleteEnquiry = async (id) => {
  try {
    const [result] = await database.query(
      "DELETE FROM enquiry WHERE id = ?",
      [id]
    );
    console.log(`Delete result for ID ${id}:`, result);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting enquiry with ID ${id}:`, error);
    throw error;
  }
};