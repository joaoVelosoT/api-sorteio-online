import Admin from "../../models/Admin.js";

const AdminDeleteService = async (_idAdmin) => {
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

    await admin.deleteOne();

    return {
      code: 200,
      message: "Admin deletado com sucesso",
      admin,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminDeleteService;
