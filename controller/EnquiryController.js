import { addEnquiry, deleteEnquiry, getAllEnquiry, getEnquiryById, updateEnquiry } from "../service/enquiryService";



//----------------------Data Add Enquiry------------------//
export const AddEnquiry = async (req, res) => {
  try {
    const data = req.body;
    const result = await addEnquiry(data);
    res.status(200).json({
      status: true,
      message: "Enquiry Added Successfully",
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
//----------------Get All Enquiry------------------//
export const GetAllEnquiry = async (req, res) => {
  try {
    const result = await getAllEnquiry();
    res.status(200).json({
      status: true,
      message: "Get All Enquiry Successfully",
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
//----------------Get Enquiry By ID------------------//
export const GetEnquiryById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getEnquiryById(id);
    res.status(200).json({
      status: true,
      message: "Get Enquiry By ID Successfully",
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
//----------------Update Enquiry------------------//
export const UpdateEnquiry = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateEnquiry(id, data);
    res.status(200).json({
      status: true,
      message: "Enquiry Updated Successfully",
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
//----------------Delete Enquiry------------------//
export const DeleteEnquiry = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteEnquiry(id);
    res.status(200).json({
      status: true,
      message: "Enquiry Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}

