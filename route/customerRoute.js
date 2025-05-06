import {
  AddCustomer,
  DeleteCustomer,
  GetAllCustomer,
  GetCustomerById,
  UpdateCustomer,
} from "../controller/CustomerController";

export const customerRoute = express.Router();

customerRoute.post("/addcustomer", AddCustomer);
customerRoute.get("/getcustomer", GetAllCustomer);
customerRoute.get("/getcustomer/:id", GetCustomerById);
customerRoute.put("/updatecustomer/:id", UpdateCustomer);
customerRoute.delete("/deletecustomer/:id", DeleteCustomer);
