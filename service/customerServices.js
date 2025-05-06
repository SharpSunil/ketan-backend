import { database } from "../db/database";



export const addCutomer = async (data) =>{
    const [result] = await database.query( "INSERT INTO customer (name, mobile, email, dob, address, social_media, referance, photoid, signature, occupation, consultant, designed_by, asigned_artist, costing, inventary, for_studio, service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [data.name, data.mobile, data.email, data.dob, data.address, data.social_media, data.referance, data.photoid, data.signature, data.occupation, data.consultant, data.designed_by, data.asigned_artist, data.costing, data.inventary, data.for_studio, data.service]);
    return result;
}

//----------------Get All Customer------------------//
export const getAllCustomer = async () => {
    try {
        const [rows] = await database.query("SELECT * FROM customers");
        console.log("Fetched customer:", rows);
        return rows;
    } catch (error) {
        console.error("Error fetching customer:", error);
        throw error;
    }
};

//----------------Get Customer By ID------------------//
export const getCustomerById = async (id) => {
    try {
        const [rows] = await database.query("SELECT * FROM customers WHERE id = ?", [id]);
        console.log(`Fetched customer with ID ${id}:`, rows[0]);
        return rows[0];
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error);
        throw error;
    }
};
//----------------Update Customer------------------//
export const updateCustomer = async (id, data) => {
    try {
        const [result] = await database.query("UPDATE customers SET name = ?, mobile = ?, email = ?, dob = ?, address = ?, social_media = ?, referance = ?, photoid = ?, signature = ?, occupation = ?, consultant = ?, designed_by = ?, asigned_artist = ?, costing = ?, inventary = ?, for_studio = ?, service = ? WHERE id = ?", [data.name, data.mobile, data.email, data.dob, data.address, data.social_media, data.referance, data.photoid, data.signature, data.occupation, data.consultant, data.designed_by, data.asigned_artist, data.costing, data.inventary, data.for_studio, data.service, id]);
        console.log(`Update result for ID ${id}:`, result);
        return result;
    } catch (error) {
        console.error(`Error updating customer with ID ${id}:`, error);
        throw error;
    }
};
//----------------Delete Customer------------------//
export const deleteCustomer = async (id) => {
    try {
        const [result] = await database.query("DELETE FROM customers WHERE id = ?", [id]);
        console.log(`Delete result for ID ${id}:`, result);
        return result;
    } catch (error) {
        console.error(`Error deleting customer with ID ${id}:`, error);
        throw error;
    }
};