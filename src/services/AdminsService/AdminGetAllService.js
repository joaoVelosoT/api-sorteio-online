import Admin from "../../models/Admin.js";

const AdminGetAllService = async () => {
  try {
    const admins = await Admin.find();

    return {
      code: 200,
      message: "Adminis encontrados",
      admins,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminGetAllService;
