import Admin from "../../../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const AdminLoginService = async (dataAdmin) => {
  try {
    // registration
    const admin = await Admin.findOne({
      registration: dataAdmin.registration,
    });
    if (!admin) {
      return {
        code: 401,
        error: {
          message: "Credenciais invalidas",
        },
      };
    }

    const passwordDecode = await bcrypt.compareSync(
      dataAdmin.password,
      admin.password
    );

    if (!passwordDecode) {
      return {
        code: 401,
        error: {
          message: "Credenciais invalidas",
        },
      };
    }

    const token = await jwt.sign(
      {
        _id: admin._id,
        name: admin._name,
        registration: admin.registration,
        role: admin.role,
      },
      process.env.SECRET
    );

    return {
      code: 201,
      message: "Admin logado com sucesso",
      admin: {
        admin: admin,
        token,
      },
    };

    // password
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminLoginService;
