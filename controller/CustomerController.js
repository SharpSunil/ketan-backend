import {
  addCutomer,
  deleteCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
} from "../service/customerServices";

//-----------------Data Add Customer------------------//
export const AddCustomer = async (req, res) => {
  try {
    const data = req.body;
    const result = await addCutomer(data);
    res.status(200).json({
      status: true,
      message: "Customer Added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//----------------Get All Customer------------------//
export const GetAllCustomer = async (req, res) => {
  try {
    const result = await getAllCustomer();
    res.status(200).json({
      status: true,
      message: "Get All Customer Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//----------------Get Customer By ID------------------//
export const GetCustomerById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getCustomerById(id);
    res.status(200).json({
      status: true,
      message: "Get Customer By ID Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//----------------Update Customer------------------//
export const UpdateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateCustomer(id, data);
    res.status(200).json({
      status: true,
      message: "Customer Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
// //----------------Delete Customer------------------//
export const DeleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteCustomer(id);
    res.status(200).json({
      status: true,
      message: "Customer Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
