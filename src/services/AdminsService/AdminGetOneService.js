import Admin from "../../models/Admin.js";

const AdminGetOneService = async (_idAdmin) => {
  try {
    const admin = await Admin.findById(_idAdmin);
    if (!admin) {
      return {
        code: 404,
        error: {
          message: "Admin não encontrado",
        },
      };
    }

    return {
      code: 200,
      message: "Admin encontrado",
      admin,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminGetOneService;
