import {
  addappointment,
  deleteAppointment,
  getAllAppointment,
  getAppointmentById,
  updateAppointment,
} from "../service/appointmentService.js";

//----------------Data Add Appointment------------------//
export const Addappointment = async (req, res) => {
  try {
    const data = req.body;
    const result = await addappointment(data);
    res.status(200).json({
      status: true,
      message: "Appointment Added Successfully",
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

//----------------Get All Appointment------------------//
export const GetAllAppointment = async (req, res) => {
  try {
    const result = await getAllAppointment();
    res.status(200).json({
      status: true,
      message: "Get All Appointment Successfully",
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

//----------------Get Appointment By ID------------------//
export const GetAppointmentById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getAppointmentById(id);
    res.status(200).json({
      status: true,
      message: "Get Appointment By ID Successfully",
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
//----------------Update Appointment------------------//
export const UpdateAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateAppointment(id, data);
    res.status(200).json({
      status: true,
      message: "Update Appointment Successfully",
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
//----------------Delete Appointment------------------//
export const DeleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteAppointment(id);
    res.status(200).json({
      status: true,
      message: "Delete Appointment Successfully",
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
