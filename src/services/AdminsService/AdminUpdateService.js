import bcrypt from "bcryptjs";
import Admin from "../../models/Admin.js";

const AdminUpdateService = async (_idAdmin, dataUpdate) => {
  try {
    const admin = await Admin.findById(_idAdmin);
    if (!admin) {
      return {
        code: 404,
        error: {
          message: "O Admin não foi encontrado",
        },
      };
    }

    // Criptografar a senha
    if (dataUpdate.password) {
      dataUpdate.password = await bcrypt.hash(dataUpdate.password, 12);
    }

    // Atualizar o admin
    await admin.updateOne(dataUpdate);

    return {
      code: 200,
      message: "Admin atualizado com sucesso",
      admin,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminUpdateService;
